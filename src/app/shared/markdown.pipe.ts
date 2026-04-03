import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'markdown'
})
export class MarkdownPipe implements PipeTransform {
  transform(value?: string): string {
    if (!value) {
      return '';
    }

    const escaped = this.escapeHtml(value);
    const { text, codeBlocks } = this.extractCodeBlocks(escaped);
    const lines = text.split('\n');

    let html = '';
    let inUl = false;
    let inOl = false;

    const closeLists = () => {
      if (inUl) {
        html += '</ul>';
        inUl = false;
      }
      if (inOl) {
        html += '</ol>';
        inOl = false;
      }
    };

    for (const rawLine of lines) {
      const line = rawLine.trimEnd();
      if (!line.trim()) {
        closeLists();
        html += '<br />';
        continue;
      }

      const headingMatch = line.match(/^(#{1,3})\s+(.*)$/);
      if (headingMatch) {
        closeLists();
        const level = headingMatch[1].length;
        const content = this.applyInlineFormatting(headingMatch[2]);
        html += `<h${level}>${content}</h${level}>`;
        continue;
      }

      const quoteMatch = line.match(/^>\s+(.*)$/);
      if (quoteMatch) {
        closeLists();
        const content = this.applyInlineFormatting(quoteMatch[1]);
        html += `<blockquote>${content}</blockquote>`;
        continue;
      }

      const unorderedMatch = line.match(/^[-*]\s+(.*)$/);
      if (unorderedMatch) {
        if (!inUl) {
          closeLists();
          html += '<ul>';
          inUl = true;
        }
        const content = this.applyInlineFormatting(unorderedMatch[1]);
        html += `<li>${content}</li>`;
        continue;
      }

      const orderedMatch = line.match(/^(\d+)\.\s+(.*)$/);
      if (orderedMatch) {
        if (!inOl) {
          closeLists();
          html += '<ol>';
          inOl = true;
        }
        const content = this.applyInlineFormatting(orderedMatch[2]);
        html += `<li>${content}</li>`;
        continue;
      }

      closeLists();
      const content = this.applyInlineFormatting(line);
      html += `<p>${content}</p>`;
    }

    closeLists();

    let rebuilt = html;
    codeBlocks.forEach((block, index) => {
      const token = `@@CODEBLOCK_${index}@@`;
      rebuilt = rebuilt.replace(
        token,
        `<pre><code>${block}</code></pre>`
      );
    });

    return rebuilt;
  }

  private extractCodeBlocks(text: string): { text: string; codeBlocks: string[] } {
    const codeBlocks: string[] = [];
    let result = text;
    const regex = /```([\s\S]*?)```/g;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
      const code = match[1].trim();
      const token = `@@CODEBLOCK_${codeBlocks.length}@@`;
      codeBlocks.push(code);
      result = result.replace(match[0], token);
    }

    return { text: result, codeBlocks };
  }

  private applyInlineFormatting(value: string): string {
    let formatted = value;

    formatted = formatted.replace(/`([^`]+)`/g, '<code>$1</code>');
    formatted = formatted.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    formatted = formatted.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    formatted = formatted.replace(/~~([^~]+)~~/g, '<del>$1</del>');
    formatted = formatted.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, text, url) => {
      const safeUrl = this.sanitizeUrl(url);
      return `<a href="${safeUrl}" target="_blank" rel="noopener">${text}</a>`;
    });

    return formatted;
  }

  private sanitizeUrl(url: string): string {
    const trimmed = url.trim();
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
      return trimmed;
    }
    return '#';
  }

  private escapeHtml(value: string): string {
    return value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
}

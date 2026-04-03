import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UploadService } from '../../services/upload.service';

export interface PostFormValue {
  subject: string;
  content: string;
  topics: string[];
  imageUrl?: string;
}

type FormatAction =
  | 'bold'
  | 'italic'
  | 'strike'
  | 'link'
  | 'heading'
  | 'quote'
  | 'code'
  | 'bulleted'
  | 'numbered'
  | 'attach'
  | 'undo'
  | 'redo';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnChanges {
  @Input() title = 'Novo Post';
  @Input() submitLabel = 'Publicar post';
  @Input() submitting = false;
  @Input() initialValue?: PostFormValue;
  @Output() save = new EventEmitter<PostFormValue>();

  imageUrl?: string;
  imagePreview?: string;
  uploadingImage = false;
  imageError?: string;

  @ViewChild('contentInput') contentInput?: ElementRef<HTMLTextAreaElement>;
  @ViewChild('attachmentInput') attachmentInput?: ElementRef<HTMLInputElement>;

  private undoStack: string[] = [];
  private redoStack: string[] = [];

  topics = [
    'NSM News',
    'NFSe',
    'NFCe',
    'Notas Tecnicas',
    'NFe',
    'CTe',
    'CS Stats',
    'Semanal Growth',
    'RH',
    'Custo de Infra News',
    'MDe',
    'MDFe',
    'NFCom',
    'aSync',
    'DCe',
    'Ajuste SINIEF',
    'Gateway',
    'Backend',
    'S.I.',
    'OKRs',
    'Geral',
    'Newsletter Clientes',
    'Reforma Tributaria'
  ];

  form = this.fb.nonNullable.group({
    subject: ['', [Validators.required, Validators.minLength(3)]],
    content: ['', [Validators.required, Validators.maxLength(2000)]],
    topics: this.fb.nonNullable.control<string[]>([])
  });

  constructor(private fb: FormBuilder, private uploadService: UploadService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['initialValue'] && this.initialValue) {
      this.form.patchValue({
        subject: this.initialValue.subject,
        content: this.initialValue.content,
        topics: this.initialValue.topics ?? []
      });
      this.imageUrl = this.initialValue.imageUrl;
      this.imagePreview = this.initialValue.imageUrl;
      this.undoStack = [];
      this.redoStack = [];
    }
  }

  @ViewChild('imageInput') imageInput?: ElementRef<HTMLInputElement>;

  openImagePicker(): void {
    this.imageInput?.nativeElement.click();
  }

  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      return;
    }
    const file = input.files[0];
    input.value = '';

    const reader = new FileReader();
    reader.onload = (e) => {
      this.imagePreview = e.target?.result as string;
    };
    reader.readAsDataURL(file);

    this.uploadingImage = true;
    this.imageError = undefined;
    this.uploadService.uploadImage(file).subscribe({
      next: (url) => {
        this.imageUrl = url;
        this.uploadingImage = false;
      },
      error: () => {
        this.imageError = 'Falha ao enviar a imagem. Tente novamente.';
        this.imagePreview = undefined;
        this.uploadingImage = false;
      }
    });
  }

  removeImage(): void {
    this.imageUrl = undefined;
    this.imagePreview = undefined;
    this.imageError = undefined;
  }

  toggleTopic(topic: string, checked: boolean): void {
    const current = this.form.get('topics')?.value ?? [];
    const next = checked
      ? Array.from(new Set([...current, topic]))
      : current.filter((item) => item !== topic);
    this.form.patchValue({ topics: next });
  }

  isTopicSelected(topic: string): boolean {
    return (this.form.get('topics')?.value ?? []).includes(topic);
  }

  applyFormat(action: FormatAction): void {
    if (action === 'undo') {
      this.undo();
      return;
    }
    if (action === 'redo') {
      this.redo();
      return;
    }
    if (action === 'attach') {
      this.attachmentInput?.nativeElement.click();
      return;
    }

    const textarea = this.contentInput?.nativeElement;
    if (!textarea) {
      return;
    }

    const value = textarea.value;
    const start = textarea.selectionStart ?? value.length;
    const end = textarea.selectionEnd ?? value.length;
    const selected = value.slice(start, end);

    this.undoStack.push(value);
    this.redoStack = [];

    let nextValue = value;
    let nextStart = start;
    let nextEnd = end;

    switch (action) {
      case 'bold':
        ({ nextValue, nextStart, nextEnd } = this.wrapSelection(value, start, end, '**', '**', 'negrito'));
        break;
      case 'italic':
        ({ nextValue, nextStart, nextEnd } = this.wrapSelection(value, start, end, '*', '*', 'italico'));
        break;
      case 'strike':
        ({ nextValue, nextStart, nextEnd } = this.wrapSelection(value, start, end, '~~', '~~', 'riscado'));
        break;
      case 'link':
        ({ nextValue, nextStart, nextEnd } = this.wrapSelection(value, start, end, '[', '](url)', 'texto'));
        break;
      case 'heading':
        ({ nextValue, nextStart, nextEnd } = this.prefixLines(value, start, end, '## '));
        break;
      case 'quote':
        ({ nextValue, nextStart, nextEnd } = this.prefixLines(value, start, end, '> '));
        break;
      case 'code':
        if (selected.includes('\n')) {
          ({ nextValue, nextStart, nextEnd } = this.wrapSelection(
            value,
            start,
            end,
            '```\n',
            '\n```',
            'codigo'
          ));
        } else {
          ({ nextValue, nextStart, nextEnd } = this.wrapSelection(value, start, end, '`', '`', 'codigo'));
        }
        break;
      case 'bulleted':
        ({ nextValue, nextStart, nextEnd } = this.prefixLines(value, start, end, '- '));
        break;
      case 'numbered':
        ({ nextValue, nextStart, nextEnd } = this.numberLines(value, start, end));
        break;
      default:
        return;
    }

    this.updateContent(nextValue, nextStart, nextEnd);
  }

  onAttachmentSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      return;
    }

    const file = input.files[0];
    const textarea = this.contentInput?.nativeElement;
    if (!textarea) {
      return;
    }

    const value = textarea.value;
    const start = textarea.selectionStart ?? value.length;
    const end = textarea.selectionEnd ?? value.length;

    this.undoStack.push(value);
    this.redoStack = [];

    const insert = `[anexo: ${file.name}]`;
    const nextValue = value.slice(0, start) + insert + value.slice(end);
    const cursor = start + insert.length;
    this.updateContent(nextValue, cursor, cursor);

    input.value = '';
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    const value = this.form.getRawValue();
    const payload: PostFormValue = {
      subject: value.subject.trim(),
      content: value.content.trim(),
      topics: value.topics,
      imageUrl: this.imageUrl
    };

    this.save.emit(payload);
  }

  private undo(): void {
    const current = this.form.get('content')?.value ?? '';
    if (this.undoStack.length === 0) {
      return;
    }
    const previous = this.undoStack.pop() ?? '';
    this.redoStack.push(current);
    this.updateContent(previous, previous.length, previous.length);
  }

  private redo(): void {
    const current = this.form.get('content')?.value ?? '';
    if (this.redoStack.length === 0) {
      return;
    }
    const next = this.redoStack.pop() ?? '';
    this.undoStack.push(current);
    this.updateContent(next, next.length, next.length);
  }

  private updateContent(value: string, selectionStart: number, selectionEnd: number): void {
    this.form.patchValue({ content: value });
    const textarea = this.contentInput?.nativeElement;
    if (!textarea) {
      return;
    }
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(selectionStart, selectionEnd);
    }, 0);
  }

  private wrapSelection(
    value: string,
    start: number,
    end: number,
    prefix: string,
    suffix: string,
    placeholder: string
  ): { nextValue: string; nextStart: number; nextEnd: number } {
    const selection = value.slice(start, end) || placeholder;
    const wrapped = `${prefix}${selection}${suffix}`;
    const nextValue = value.slice(0, start) + wrapped + value.slice(end);
    const cursorStart = start + prefix.length;
    const cursorEnd = cursorStart + selection.length;
    return { nextValue, nextStart: cursorStart, nextEnd: cursorEnd };
  }

  private prefixLines(
    value: string,
    start: number,
    end: number,
    prefix: string
  ): { nextValue: string; nextStart: number; nextEnd: number } {
    const { lineStart, lineEnd } = this.expandToLines(value, start, end);
    const block = value.slice(lineStart, lineEnd);
    const lines = block.split('\n');
    const prefixed = lines.map((line) => (line.trim() ? `${prefix}${line}` : line)).join('\n');
    const nextValue = value.slice(0, lineStart) + prefixed + value.slice(lineEnd);
    const offset = prefixed.length - block.length;
    return { nextValue, nextStart: start + prefix.length, nextEnd: end + offset };
  }

  private numberLines(
    value: string,
    start: number,
    end: number
  ): { nextValue: string; nextStart: number; nextEnd: number } {
    const { lineStart, lineEnd } = this.expandToLines(value, start, end);
    const block = value.slice(lineStart, lineEnd);
    const lines = block.split('\n');
    let index = 1;
    const numbered = lines
      .map((line) => {
        if (!line.trim()) {
          return line;
        }
        const label = `${index}. `;
        index += 1;
        return `${label}${line}`;
      })
      .join('\n');
    const nextValue = value.slice(0, lineStart) + numbered + value.slice(lineEnd);
    const offset = numbered.length - block.length;
    return { nextValue, nextStart: start + 3, nextEnd: end + offset };
  }

  private expandToLines(
    value: string,
    start: number,
    end: number
  ): { lineStart: number; lineEnd: number } {
    const lineStart = value.lastIndexOf('\n', start - 1) + 1;
    const lineEndIndex = value.indexOf('\n', end);
    const lineEnd = lineEndIndex === -1 ? value.length : lineEndIndex;
    return { lineStart, lineEnd };
  }
}

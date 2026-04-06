import { Injectable } from '@angular/core';

export const ALL_TOPICS = [
  'NSM News', 'NFSe', 'NFCe', 'Notas Tecnicas', 'NFe', 'CTe',
  'CS Stats', 'Semanal Growth', 'RH', 'Custo de Infra News',
  'MDe', 'MDFe', 'NFCom', 'aSync', 'DCe', 'Ajuste SINIEF',
  'Gateway', 'Backend', 'S.I.', 'OKRs', 'Geral',
  'Newsletter Clientes', 'Reforma Tributaria'
];

@Injectable({ providedIn: 'root' })
export class UserPreferencesService {
  private readonly topicsKey = 'corpnet_followed_topics';
  private readonly readKey = 'corpnet_read_posts';

  getFollowedTopics(): string[] {
    try {
      const raw = localStorage.getItem(this.topicsKey);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  setFollowedTopics(topics: string[]): void {
    localStorage.setItem(this.topicsKey, JSON.stringify(topics));
  }

  isFollowing(topic: string): boolean {
    return this.getFollowedTopics().includes(topic);
  }

  markAsRead(postId: number): void {
    const ids = this.getReadIds();
    ids.add(postId);
    localStorage.setItem(this.readKey, JSON.stringify([...ids]));
  }

  isRead(postId: number): boolean {
    return this.getReadIds().has(postId);
  }

  getReadIds(): Set<number> {
    try {
      const raw = localStorage.getItem(this.readKey);
      return raw ? new Set<number>(JSON.parse(raw)) : new Set<number>();
    } catch {
      return new Set<number>();
    }
  }
}

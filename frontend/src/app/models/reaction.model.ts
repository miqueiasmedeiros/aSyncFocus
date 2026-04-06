export type ReactionType = 'LIKE' | 'LOVE' | 'HAHA' | 'WOW' | 'SAD' | 'ANGRY';

export interface ReactionCounts {
  like: number;
  love: number;
  wow: number;
  haha: number;
}

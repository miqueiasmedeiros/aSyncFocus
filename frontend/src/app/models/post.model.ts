import { User } from './user.model';
import { ReactionCounts } from './reaction.model';

export interface Post {
  id: number;
  author: User;
  subject: string;
  content: string;
  topics: string[];
  createdAt: string;
  reactions: ReactionCounts;
  commentsCount: number;
  imageUrl?: string;
  userReactions: string[];
}

import { User } from './user.model';

export interface Comment {
  id: number;
  author: User;
  content: string;
  createdAt: string;
}

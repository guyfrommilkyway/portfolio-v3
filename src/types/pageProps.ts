import { IFirebase } from '@/services/firebase';
import { IRepo, IUser } from '@/services/github';

export interface PageProps {
  firebase: IFirebase | null;
  user: IUser | null;
  repositories: IRepo | null;
}

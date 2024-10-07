import { IFirebase } from '@/services/firebase';
import { IUser } from '@/services/github';

export interface PageProps {
    firebase: IFirebase | null;
    user: IUser | null;
}

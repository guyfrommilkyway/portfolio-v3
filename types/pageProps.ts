import { IFirebase } from '@/services/firebase';

export interface PageProps {
    firebase: IFirebase | null;
    user: any | null;
    repo: any[];
}

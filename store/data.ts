// packages
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

// types
import { DataStoreType } from '@/types';

const useDataStore = create<DataStoreType>()(
	devtools(
		persist(
			(set) => ({
				data: {},
				setData: (param: any) => set({ data: param }),
			}),
			{
				name: 'data-store',
			}
		)
	)
);

export default useDataStore;

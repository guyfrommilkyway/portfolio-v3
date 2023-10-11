// packages
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useWorkStore = create<any>()(
	devtools(
		persist(
			(set) => ({
				work: {},
				dataHandler: (data: any) => set({ work: data }),
			}),
			{ name: 'work-store' }
		)
	)
);

export default useWorkStore;

// packages
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useRecentNewsStore = create<any>()(
	devtools(
		persist(
			(set) => ({
				recentnews: null,
				dataHandler: (data: any) => set({ recentnews: data }),
			}),
			{ name: 'recentnews-store' }
		)
	)
);

export default useRecentNewsStore;

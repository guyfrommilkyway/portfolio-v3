// packages
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useWhatsNewStore = create<any>()(
	devtools(
		persist(
			(set) => ({
				whatsnew: null,
				dataHandler: (data: any) => set({ whatsnew: data }),
			}),
			{ name: 'whatsnew-store' }
		)
	)
);

export default useWhatsNewStore;

// packages
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useAboutStore = create<any>()(
	devtools(
		persist(
			(set) => ({
				about: {},
				dataHandler: (data: any) => set({ about: data }),
			}),
			{ name: 'about-store' }
		)
	)
);

export default useAboutStore;

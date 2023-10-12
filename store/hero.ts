// packages
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useHeroStore = create<any>()(
	devtools(
		persist(
			(set) => ({
				hero: null,
				dataHandler: (data: any) => set({ hero: data }),
			}),
			{ name: 'hero-store' }
		)
	)
);

export default useHeroStore;

// packages
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const usePersonalStore = create<any>()(
	devtools(
		persist(
			(set) => ({
				personal: {},
				dataHandler: (data: any) => set({ personal: data }),
			}),
			{ name: 'personal-store' }
		)
	)
);

export default usePersonalStore;

// packages
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useExperienceStore = create<any>()(
	devtools(
		persist(
			(set) => ({
				experience: null,
				dataHandler: (data: any) => set({ experience: data }),
			}),
			{ name: 'experience-store' }
		)
	)
);

export default useExperienceStore;

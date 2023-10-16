// packages
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useStaticStore = create<any>()(
  devtools(
    persist(
      set => ({
        data: null,
        dataHandler: (paramData: any) => set({ data: paramData }),
      }),
      { name: 'data-store' },
    ),
  ),
);

export default useStaticStore;

// store/profileStore.ts

import { create } from 'zustand';
import { Profile } from './types';
import { DATA } from '../data';

let data = DATA[0].profile

interface ProfileStore {
  globalStore: any
  setGlobalStore: (data: Profile) => void;
  clearProfile: () => void;
}

export const useProfileStore = create<ProfileStore>((set) => ({
  globalStore: null,
  setGlobalStore: (data) => set({ globalStore: data }),
  clearProfile: () => set({ globalStore: null }),
}));

// interface ProfileStore {
//   globalStore: any
//   setGlobalStore: (data: Profile) => void;
//   clearProfile: () => void;
// }

// export const useProfileStore = create<ProfileStore>((set) => ({
//   globalStore: null,
//   setGlobalStore: (data) => set({ globalStore: data }),
//   clearProfile: () => set({ globalStore: null }),
// }));

import { create } from "zustand";
import {
  Profile,
  BusinessProfile,
  ContactInformation,
  GalleryItem,
} from "./types";

interface ProfileStore {
  globalStore: Profile | null;
  setGlobalStore: (data: Profile) => void;
  clearProfile: () => void;

  setBusinessProfile: (data: Partial<BusinessProfile>) => void;
  setContactInformation: (data: Partial<ContactInformation>) => void;
  setGallery: (gallery: GalleryItem[]) => void;
}

export const useProfileStore = create<ProfileStore>((set) => ({
  globalStore: null,

  // Set entire profile object
  setGlobalStore: (data) => set({ globalStore: data }),

  // Reset to null
  clearProfile: () => set({ globalStore: null }),

  // Update businessProfile
  setBusinessProfile: (data) =>
    set((state) =>
      state.globalStore
        ? {
            globalStore: {
              ...state.globalStore,
              businessProfile: {
                ...state.globalStore.businessProfile,
                ...data,
              },
            },
          }
        : state
    ),

  // Update contactInformation
  setContactInformation: (data) =>
    set((state) =>
      state.globalStore
        ? {
            globalStore: {
              ...state.globalStore,
              contactInformation: {
                ...state.globalStore.contactInformation,
                ...data,
              },
            },
          }
        : state
    ),

  // Update gallery
  setGallery: (gallery) =>
    set((state) =>
      state.globalStore
        ? {
            globalStore: {
              ...state.globalStore,
              gallery,
            },
          }
        : state
    ),
}));

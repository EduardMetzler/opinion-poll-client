import { create } from "zustand";

interface UseToastStore {
  toast: string;
  setToast: (text: string) => void;
}

export const useToastStore = create<UseToastStore>((set) => ({
  toast: "",

  setToast: (text) => set({ toast: text }),
}));

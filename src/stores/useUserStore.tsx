import { create } from "zustand";

interface UserStore {
  user: { email: string; userName: string; id: string };
  saveUser: (userWithoutPassword: any) => void;
  deleteUser: () => void;
}

export const useUserStore = create<UserStore>((set, get) => ({
  user: { email: "", userName: "", id: "" },
  saveUser: (userWithoutPassword) =>
    set({
      user: {
        email: userWithoutPassword.email,
        userName: userWithoutPassword.userName,
        id: userWithoutPassword._id,
      },
    }),
  deleteUser: () => set({ user: { email: "", userName: "", id: "" } }),
}));

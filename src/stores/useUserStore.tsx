import { create } from "zustand";

interface UserStore {
  user: { email: string; userName: string; id: string };
  saveUser: (userWithoutPassword: any) => void;
  deleteUser: () => void;
}

export const useUserStore = create<UserStore>((set, get) => ({
  user: { email: "", userName: "", id: "" },
  saveUser: (userWithoutPassword) => {
    // const { user } = get();

    const newUser = {
      email: userWithoutPassword.email,
      userName: userWithoutPassword.userName,
      id: userWithoutPassword._id,
    };
    set({
      user: newUser,
    });
  },
  deleteUser: () => {
    // const { user } = get();

    set({
      user: { email: "", userName: "", id: "" },
    });
    // console.log(user);
  },
}));

import { create } from "zustand";

interface userModalStore {
    isOpen: boolean ;
    onOpen: () => void ;
    onClose: () => void;
}

export const userStore = create<userModalStore>((set) => ({
    isOpen: false ,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}));
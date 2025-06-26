import { create } from 'zustand';

type User = {
  name: string;
  image: string;
};

type Action = {
  updateName: (firstName: User['name']) => void;
  updateImage: (lastName: User['image']) => void;
};

const useUser = create<User & Action>((set) => ({
  name: '',
  image: '',
  updateName: (newName: string) => set(() => ({ name: newName })),
  updateImage: (newImage: string) => set(() => ({ image: newImage })),
}));
export default useUser;

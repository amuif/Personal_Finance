import { create } from 'zustand';

type User = {
  name: string;
  image: string;
  email: string;
};

type Action = {
  updateName: (firstName: User['name']) => void;
  updateImage: (lastName: User['image']) => void;
  updateEmail: (email: User['email']) => void;
};

const useUser = create<User & Action>((set) => ({
  name: '',
  image: '',
  email: '',
  updateName: (newName: string) => set(() => ({ name: newName })),
  updateImage: (newImage: string) => set(() => ({ image: newImage })),
  updateEmail: (newEmail: string) => set(() => ({ email: newEmail })),
}));
export default useUser;

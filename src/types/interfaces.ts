export interface ToggleMode {
  toggle: boolean;
  setToggle: (values: boolean) => void;
}

interface ResultType {
  id: string;
  userId?: string;
  nextRole?: string;
  system?: number;
  person?: number;
  process?: number;
  technology?: number;
  influence?: number;
  isValided?: string;
  createdAt: string;
}
export interface UserStorageType {
  id: string;
  name: string;
  email: string;
  emailNotification?: string;
  chapter?: string;
  isAdmin?: boolean;
  profilePicture?: string;
  role?: string;
  team?: string;
  createdAt: string;
  results: ResultType[];
}

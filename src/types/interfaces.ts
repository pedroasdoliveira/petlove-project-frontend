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

export interface SpecialtiesType {
  name: any;
  id: string;
  performance: string;
  description: string;
  system: number;
  person: number;
  technology: number;
  process: number;
  influence: number;
}

export interface TestTypes {
  id: string;
  title?: string;
  system: string[];
  computationalFundamentals: string[];
  person: string[];
  process: string[];
  test: string[];
  design: string[];
  toolshop: string[];
}

export interface TestContextTypes {
  test?: TestTypes[];
  handleGetTest: () => void;
}

export interface UserTypes {
  profilePicture: string;
  results: ResultType[];
  id?: string;
  name: string;
  email: string;
  password?: string;
  team?: string;
  chapter?: string;
  role?: string;
  isAdmin?: boolean;
  isVerified?: boolean;
  emailNotification?: "none" | "team" | "all";
}

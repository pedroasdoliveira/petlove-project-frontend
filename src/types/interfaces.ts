export interface ToggleMode {
  toggle: boolean;
  setToggle: (values: boolean) => void;
}

export interface ResultType {
  id: string;
  userId?: string;
  nextRole: string;
  system: number;
  person: number;
  process: number;
  technology: number;
  influence: number;
  isValided?: string;
  createdAt: string;
}

export interface ResultReviewType {
  id?: string;
  userId?: string;
  nextRole?: string;
  system?: number;
  person?: number;
  process?: number;
  technology?: number;
  influence?: number;
  Processos?: number;
  Sistemas?: number;
  Pessoas?: number;
  Ferramentarias?: number;
  Design?: number;
  Teste?: number;
  Computacionais?: number;
  performance?: string;
  isValided?: string;
  createdAt?: string;
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
  createdAt: Date;
  results: ResultType[];
}

export interface PieChartType {
  name: string;
  value: number;
}

export interface SpecialtiesType {
  name: string;
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
  id?: string;
  title?: string;
  system: string[];
  computationalFundamentals: string[];
  person: string[];
  process: string[];
  test: string[];
  design: string[];
  toolshop: string[];
}

export interface StepsType {
  Content: string[] | undefined;
  label: string | undefined;
}

export interface TestContextTypes {
  test?: TestTypes[];
  handleGetTest: () => void;
}

export interface TeamType {
  media: number;
  team: string | undefined;
}

export interface ReduceType {
  Especialista: number;
  "Tech-Lead": number;
  Senior: number;
  Pleno: number;
  Junior: number;
  Trainee: number;
  Contratados: number;
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
  emailNotification?: string;
  createdAt?: Date;
}

export interface RadarChartType {
  subject: string;
  A?: number;
}

export interface ComparisonRadarChartType {
  subject: string;
  A?: number;
  B?: number;
}

export interface BarChartType {
  name: string;
  total?: number;
  media?: number;
}

export interface BarUserChartType {
  createdAt: string;
  A?: string | number;
  B?: string | number;
}

export interface LineChartType {
  createdAt: string;
  A: string;
}

export interface AreaChartType {
  nextRole: string;
  createdAt: string;
  speciality: string[] | undefined;
}
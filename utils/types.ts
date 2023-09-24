// types used in the application
export type User = {
  name: string,
  email: string,
  profile?: string,
  login: boolean,
  darkTheme: boolean,
};

export type Menu = {
  icon: React.ReactNode,
  title: string,
  amount: number,
  color: string
  path: string,
}

export interface Input extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  id: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  color?: string;
  icon?: React.ReactNode;
  inputMode?:
    | "search"
    | "text"
    | "email"
    | "tel"
    | "url"
    | "none"
    | "numeric"
    | "decimal"
    | undefined;
};

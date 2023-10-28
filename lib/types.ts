// types used in the application
export type User = {
  id: string;
  email: string;
  username: string;
  password?: string;
  profile?: string;
  isDark: boolean;
  createdAt: Date;
};

export type Menu = {
  icon: React.ReactNode,
  title: string,
  amount: number,
  color: string
  path: string,
}

export type Note = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  authorId: string;
  label: {
    name: string,
    color: string,
  }
};

export type Menu = {
  id: string;
  title: string;
  href?: string;
  amount: number;
  color?: string;
  icon?: string | React.ReactNode;
};

export type Note = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  author: string;
  authorId: string;
  starred?: boolean;
  archived?: boolean;
  trash?: boolean;
  folders: string[];
  labels: string[];
};

export type Folder = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  author: string;
  authorId: string;
  icon?: string | React.ReactNode;
  notes: string[];
};

export type Label = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  author: string;
  authorId: string;
  color?: string;
  icon?: string | React.ReactNode;
  notes: string[];
};

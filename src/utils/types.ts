export type createUser = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export type updateUser = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export type createExpense = {
  userId: string;
  description: string;
  cost: string;
  currency: string;
  date: Date;
  createdBy: string;
};

export type createUserExpense = {
  userId: number;
  paidShare: number;
  owedShare: number;
  netShare: number;
};

export type OpenTransaction = {
  amount: number;
  borrower: number;
  lender: number;
};

export interface iExpense {
  id: string;
  createdAt: Date;
  expenseName: string;
  expenseNumber: number;
  amount: number;
  category: "FOOD" | "HOUSE" | "MEDICAL" | "SELFCARE";
  date: Date;
}

export interface iEditExpense {
  id: string;
  createdAt: Date;
  expenseName: string;
  expenseNumber: number;
  amount: number;
  category: "FOOD" | "HOUSE" | "MEDICAL" | "SELFCARE";
  date: Date;
  description: string | null;

  username: string;
  email: string;
}

export interface iEditIncome {
  id: string;
  date: Date;
  source:
    | "SALARY"
    | "FREELANCE"
    | "BUSINESS"
    | "INVESTMENT"
    | "GIFTS"
    | "OTHERS";
  incomeMoney: number;
}

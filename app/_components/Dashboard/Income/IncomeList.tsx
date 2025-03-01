import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import IncomeAction from "./IncomeAction";

interface iIncome {
  source:
    | "SALARY"
    | "FREELANCE"
    | "BUSINESS"
    | "INVESTMENT"
    | "GIFTS"
    | "OTHERS";
  date: Date;
  incomeMoney: number;
  id: string;
}

export default async function IncomeList({ income }: { income: iIncome[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Income ID</TableHead>
          <TableHead>Income Date</TableHead>
          <TableHead>Income Source</TableHead>
          <TableHead>Amount (Rs.)</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {income.map((inc) => (
          <TableRow key={inc.id}>
            <TableCell>#{inc.id.split("-")[0]}</TableCell>

            <TableCell>
              {new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(
                new Date(inc.date)
              )}
            </TableCell>
            <TableCell>
              <Badge>{inc.source}</Badge>
            </TableCell>
            <TableCell>{inc.incomeMoney}</TableCell>
            <TableCell className="text-right">
              <IncomeAction id={inc.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

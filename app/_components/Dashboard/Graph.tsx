"use client";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

interface iApp {
  data: {
    date: string;
    amount: number;
  }[];
}

export default function Graph({ data }: iApp) {
  return (
    <ChartContainer
      config={{
        amount: {
          label: "Amount",
          color: "hsl(var(--primary))",
        },
      }}
      className="min-h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
          <Line
            type={"monotone"}
            dataKey={"amount"}
            stroke="var(--color-amount)"
            strokeWidth={"2px"}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

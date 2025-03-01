"use client";

import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { editIncome } from "@/utils/actions";
import { incomeSchema } from "@/utils/zodSchema";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { Calendar1Icon, PlusIcon } from "lucide-react";
import { useActionState, useState } from "react";
import SubmitButton from "../../Login/SubmitButton";
import { iEditIncome } from "@/utils/types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function EditIncome({ data }: { data: iEditIncome }) {
  const [lastResult, editIncomeAction] = useActionState(editIncome, undefined);

  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: incomeSchema,
      });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  const [selectedDate, setSelected] = useState(data.date);

  return (
    <Card className="flex justify-center items-center w-full mx-auto max-w-[500px] mt-20">
      <CardContent className="px-6 pb-8">
        <form
          action={editIncomeAction}
          id={form.id}
          onSubmit={form.onSubmit}
          noValidate
        >
          <input type="hidden" name="id" value={data.id} />

          <input
            type="hidden"
            name={fields.date.name}
            value={selectedDate.toISOString()}
          />

          <div className="mt-4">
            <Label>Source</Label>
            <Select
              defaultValue={data.source}
              name={fields.source.name}
              key={fields.source.key}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select source of income..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="SALARY">Salary 💵</SelectItem>
                <SelectItem value="FREELANCE">Freelance 💻</SelectItem>
                <SelectItem value="BUSINESS">Business 🧑‍💼</SelectItem>
                <SelectItem value="INVESTMENT">Investment 💸</SelectItem>
                <SelectItem value="GIFTS">Gifts 🤝</SelectItem>
                <SelectItem value="OTHERS">Others 🤔</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm text-red-400">{fields.source.errors}</p>
          </div>

          <div className="mt-4">
            <Label>Amount</Label>
            <Input
              placeholder="Enter the amount..."
              type="number"
              name={fields.incomeMoney.name}
              key={fields.incomeMoney.key}
              defaultValue={data.incomeMoney}
            />
            <p className="text-sm text-red-400">{fields.incomeMoney.errors}</p>
          </div>

          <div className="mt-4 flex gap-5 justify-between">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant={"outline"}>
                  <Calendar1Icon />
                  {selectedDate
                    ? new Intl.DateTimeFormat("en-US", {
                        dateStyle: "medium",
                      }).format(selectedDate)
                    : "Select date..."}
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => setSelected(date || new Date())}
                  fromDate={
                    new Date(new Date().setMonth(new Date().getMonth() - 1))
                  }
                />
              </PopoverContent>
            </Popover>

            <SubmitButton
              text="Update Income"
              icon={<PlusIcon className="size-5" />}
            />
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

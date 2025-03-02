"use client";
import { useForm } from "@conform-to/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
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
import { Textarea } from "@/components/ui/textarea";
import { Calendar1Icon, PlusCircleIcon } from "lucide-react";
import { useActionState, useState } from "react";
import SubmitButton from "../../Login/SubmitButton";
import { createExpense } from "@/utils/actions";
import { parseWithZod } from "@conform-to/zod";
import { expenseSchema } from "@/utils/zodSchema";

interface iDetails {
  name: string;
  email: string;
}

export default function ExpenseForm({ email, name }: iDetails) {
  const [lastResult, createExpenseAction] = useActionState(
    createExpense,
    undefined
  );
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: expenseSchema,
      });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Card className="w-full mx-auto max-w-5xl">
      <CardContent className="p-6">
        <form
          action={createExpenseAction}
          id={form.id}
          onSubmit={form.onSubmit}
          noValidate
        >
          <input
            type="hidden"
            name={fields.date.name}
            value={selectedDate.toISOString()}
          />

          <div className="flex flex-col gap-1 w-fit mb-10">
            <div className="flex items-center gap-4">
              <Badge variant={"secondary"}>Create</Badge>
              <Input
                name={fields.expenseName.name}
                key={fields.expenseName.key}
                defaultValue={fields.expenseName.initialValue}
                placeholder="Expense name..."
              />
            </div>
            <p className="text-sm text-red-400">{fields.expenseName.errors}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div>
              <Label>Expense No.</Label>
              <div className="flex">
                <span className="px-3 border border-r-0 rounded-l-md bg-muted flex items-center">
                  #
                </span>
                <Input
                  name={fields.expenseNumber.name}
                  key={fields.expenseNumber.key}
                  defaultValue={fields.expenseNumber.initialValue}
                  placeholder="Expense Num..."
                  className="rounded-l-none"
                />
              </div>
              <p className="text-sm text-red-400">
                {fields.expenseNumber.errors}
              </p>
            </div>

            <div>
              <Label>Category</Label>
              <Select
                defaultValue="SELFCARE"
                name={fields.category.name}
                key={fields.category.key}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select expense category..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="FOOD">Food & Dining 🍕</SelectItem>
                  <SelectItem value="HOUSE">Housing & Utilities 🏠</SelectItem>
                  <SelectItem value="MEDICAL">Health & Medical 🏥</SelectItem>
                  <SelectItem value="SELFCARE">
                    Skincare & Shopping 🌸
                  </SelectItem>
                </SelectContent>
              </Select>
              <p className=" text-sm text-red-400 ">{fields.category.errors}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div>
              <Label>User Details</Label>
              <div className="space-y-2">
                <Input
                  name={fields.username.name}
                  key={fields.username.key}
                  defaultValue={name}
                  placeholder="Username..."
                />
                <p className=" text-sm text-red-400 ">
                  {fields.username.errors}
                </p>

                <Input
                  name={fields.email.name}
                  defaultValue={email}
                  key={fields.email.key}
                  placeholder="Email..."
                />
                <p className=" text-sm text-red-400 ">{fields.email.errors}</p>
              </div>
            </div>

            <div>
              <Label>Expense Details</Label>
              <div className="space-y-2">
                <Input
                  name={fields.amount.name}
                  key={fields.amount.key}
                  defaultValue={fields.amount.initialValue}
                  placeholder="Amount..."
                  type="number"
                />
                <p className="text-sm text-red-400">{fields.amount.errors}</p>

                <div className="flex gap-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className="w-full text-left justify-start"
                      >
                        <Calendar1Icon />{" "}
                        {selectedDate ? (
                          <p>
                            {new Intl.DateTimeFormat("en-US", {
                              dateStyle: "long",
                            }).format(selectedDate)}
                          </p>
                        ) : (
                          "Expense Date"
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={(date) => setSelectedDate(date || new Date())}
                        fromDate={new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                  <p className="text-sm text-red-400">{fields.date.errors}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 w-full">
            <div className="col-span-8">
              <Label>Note</Label>
              <Textarea
                name={fields.description.name}
                key={fields.description.key}
                defaultValue={fields.description.initialValue}
                placeholder="(optional)Add your Note/s here...."
              />
              <p className="text-sm text-red-400">
                {fields.description.errors}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center mt-10">
            <SubmitButton
              text="Create Expense"
              icon={<PlusCircleIcon className="size-5" />}
            />
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

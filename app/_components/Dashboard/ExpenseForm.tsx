"use client";
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
import { useState } from "react";
import SubmitButton from "../Login/SubmitButton";

export default function ExpenseForm() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Card className="w-full mx-auto max-w-5xl">
      <CardContent className="p-6">
        <div className="flex flex-col gap-1 w-fit mb-10">
          <div className="flex items-center gap-4">
            <Badge variant={"secondary"}>Create</Badge>
            <Input placeholder="Test 123" />
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div>
            <Label>Expense No.</Label>
            <div className="flex">
              <span className="px-3 border border-r-0 rounded-l-md bg-muted flex items-center">
                #
              </span>
              <Input placeholder="Expense Num..." className="rounded-l-none" />
            </div>
          </div>

          <div>
            <Label>Category</Label>
            <Select defaultValue="SELFCARE">
              <SelectTrigger>
                <SelectValue placeholder="Select expense category..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="FOOD">Food & Dining 🍕</SelectItem>
                <SelectItem value="HOUSE">Housing & Utilities 🏠</SelectItem>
                <SelectItem value="MEDICAL">Health & Medical 🏥</SelectItem>
                <SelectItem value="SELFCARE">Skincare & Shopping 🌸</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div>
            <Label>User Details</Label>
            <div className="space-y-2">
              <Input placeholder="Username..." />
              <Input placeholder="Email..." />
            </div>
          </div>

          <div>
            <Label>Expense Details</Label>
            <div className="space-y-2">
              <Input placeholder="Amount..." type="number" />

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
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 w-full">
          <div className="col-span-8">
            <Label>Note</Label>
            <Textarea placeholder="(optional)Add your Note/s here...." />
          </div>
        </div>

        <div className="flex items-center justify-center mt-10">
          <SubmitButton
            text="Create Expense"
            icon={<PlusCircleIcon className="size-5" />}
          />
        </div>
      </CardContent>
    </Card>
  );
}

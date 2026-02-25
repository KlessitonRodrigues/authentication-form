import { z } from "zod";

const transactionSchema = {
  id: z.string().default(""),
  name: z.string().min(3, "required").default(""),
  date: z.string().default(""),
  type: z.string().min(1, "required").default(""),
  value: z.coerce.number().positive("must be positive").default(0),
};

export const createTransactionSchema = z.object({
  name: transactionSchema.name,
  date: transactionSchema.date,
  value: transactionSchema.value,
  type: transactionSchema.type,
});

import { z } from "zod";
import { errorMsg } from "../constants/dictionary";

const transactionSchema = {
  id: z.string().default(""),
  name: z.string().min(3, errorMsg.REQUIRED).default(""),
  date: z.string().default(""),
  type: z.string().min(1, errorMsg.REQUIRED).default(""),
  value: z.coerce.number().positive(errorMsg.MUST_BE_POSITIVE).default(0),
};

export const createTransactionSchema = z.object({
  name: transactionSchema.name,
  date: transactionSchema.date,
  value: transactionSchema.value,
  type: transactionSchema.type,
});

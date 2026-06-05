import { z } from "zod";

export const DateInfoSchema = z.object({
  day: z.coerce.number(),
  month: z.coerce.number(),
});

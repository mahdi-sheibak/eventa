import { z } from "zod";

const ConfigSchema = z
  .object({
    DB: z.string(),
    SUPABASE_KEY: z.string(),
    SUPABASE_URL: z.string(),
  })
  .transform((arg) => ({
    supabaseKey: arg.SUPABASE_KEY,
    db: arg.DB,
    supabaseUrl: arg.SUPABASE_URL,
  }));

export const config = ConfigSchema.parse(process.env);

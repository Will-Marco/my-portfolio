"use client";

import * as z from "zod";

export const formSchema = z.object({
  name: z.string().min(2).max(32),
  contactInformation: z.string().min(6),
  subject: z.string().min(3).max(32),
  message: z.string().min(12),
});

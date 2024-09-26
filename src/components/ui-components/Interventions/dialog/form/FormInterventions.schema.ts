import { z } from 'zod';

export const InterventionsSchemaForm = z.object({
    title: z.string().min(1, { message: "Title is required" }),
    location: z.string().min(1, { message: "Location is required" }),
    description: z.string().optional(),
    date: z.date(),
});
export type InterventionsForm = z.infer<typeof InterventionsSchemaForm>;

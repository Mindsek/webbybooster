import { z } from 'zod';

export const StickyNoteSchemaForm = z.object({
    title: z.string().min(1, { message: "Title is required" }),
});
export type StickyNoteForm = z.infer<typeof StickyNoteSchemaForm>;

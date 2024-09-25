import { z } from 'zod';

export const KanbanTasksId = z.string().uuid();
export const KanbanTasksStatus = z.enum(['not_started', 'in_progress', 'completed']);
export type KanbanTasksStatus = z.infer<typeof KanbanTasksStatus>;
export const KanbanTasksImportance = z.enum(['low', 'medium', 'high']);

export const KanbanTasksSchemaForm = z.object({
    title: z.string().min(1, { message: "Title is required" }),
    description: z.string().optional(),
    status: KanbanTasksStatus,
    importance: KanbanTasksImportance,
    expiryDate: z.date().optional(),
    createdAt: z.date(),
    updatedAt: z.date(),
});
export type KanbanTasksForm = z.infer<typeof KanbanTasksSchemaForm>;

export const KanbanTasksSchema = z.object({
    id: KanbanTasksId,
    ...KanbanTasksSchemaForm.shape,
});
export type KanbanTasks = z.infer<typeof KanbanTasksSchema>;
import { z } from 'zod';

export const KanbanTasksId = z.string().uuid();
export const KanbanTaskStatus = z.enum(['not_started', 'in_progress', 'completed']);
export type KanbanTaskStatus = z.infer<typeof KanbanTaskStatus>;
export const KanbanTasksImportance = z.enum(['low', 'medium', 'high']);

export const KanbanTasksSchema = z.object({
    id: KanbanTasksId,
    title: z.string(),
    description: z.string(),
    status: KanbanTaskStatus,
    importance: KanbanTasksImportance,
    createdAt: z.date(),
    updatedAt: z.date(),
});
export type KanbanTasks = z.infer<typeof KanbanTasksSchema>;
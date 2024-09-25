import { KanbanTasks } from "./KanbanTasks.schema";
const tasks: KanbanTasks[] = [
    {
        id: '123e4567-e89b-12d3-a456-426614174000',
        title: 'Task 1',
        description: 'Description 1',
        status: "not_started",
        importance: 'low',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: '123e4567-e89b-12d3-a456-426614174001',
        title: 'Task 2',
        description: 'Description 2',
        status: "in_progress",
        importance: 'medium',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: '123e4567-e89b-12d3-a456-426614174002',
        title: 'Task 3',
        description: 'Description 3',
        status: "completed",
        importance: 'high',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
]



export const useKanbanTasks = () => {
    return {
        tasks,
    };
};


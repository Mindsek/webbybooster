import { KanbanTasks, KanbanTasksStatus } from "@/components/ui-components/KanbanTasks/KanbanTasks.schema";

const TASKS_KEY = 'kanban_tasks';

export const getTasksFromLocalStorage = (): KanbanTasks[] => {
    if (typeof window === 'undefined') {
        return [];
    }
    const tasks = localStorage.getItem(TASKS_KEY);
    const tasksParsed = tasks ? JSON.parse(tasks) : [];
    const validTasks = tasksParsed.filter((task: KanbanTasks) => {
        const isValid = task.status && Object.values(KanbanTasksStatus._def.values).includes(task.status);
        if (!isValid) {
            console.log(`Deleting invalid task: ${JSON.stringify(task)}`);
        }
        return isValid;
    });
    saveTasksToLocalStorage(validTasks);
    return validTasks;
};

export const saveTasksToLocalStorage = (tasks: KanbanTasks[]): void => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
    }
};

export const updateTaskInLocalStorage = (updatedTask: KanbanTasks): void => {
    const tasks = getTasksFromLocalStorage();
    const updatedTasks = tasks.map(task => task.id === updatedTask.id ? updatedTask : task);
    saveTasksToLocalStorage(updatedTasks);
};

export const addTaskToLocalStorage = (newTask: KanbanTasks): void => {
    const tasks = getTasksFromLocalStorage();
    tasks.push(newTask);
    saveTasksToLocalStorage(tasks);
};

export const deleteTaskFromLocalStorage = (taskId: string): void => {
    const tasks = getTasksFromLocalStorage();
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    saveTasksToLocalStorage(updatedTasks);
};
"use client";
import { KanbanTasks } from "@/components/ui-components/KanbanTasks/KanbanTasks.schema";
import { addTaskToLocalStorage, deleteTaskFromLocalStorage, getTasksFromLocalStorage, updateTaskInLocalStorage } from "@/hooks/useLocaleStorage";
import { arrayMove } from "@dnd-kit/sortable";
import { create } from 'zustand';
interface TaskState {
    openDialog: boolean;
    setOpenDialog: (open: boolean) => void;
    activeId: string | null;
    tasks: KanbanTasks[];
    setActiveId: (id: string | null) => void;
    setTasks: (tasks: KanbanTasks[]) => void;

    fetchTasks: () => void;
    updateTask: (updatedTask: KanbanTasks) => void;
    addTask: (newTask: KanbanTasks) => void;
    moveTask: (oldIndex: number, newIndex: number) => void;
    deleteTask: (taskId: string) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
    openDialog: false,
    setOpenDialog: (open: boolean) => set({ openDialog: open }),
    activeId: null,
    tasks: [],
    setActiveId: (id: string | null) => set({ activeId: id }),
    setTasks: (tasks: KanbanTasks[]) => set({ tasks: tasks }),
    fetchTasks: () => {
        const tasks = getTasksFromLocalStorage();
        set({ tasks: tasks });
    },
    updateTask: (updatedTask: KanbanTasks) => {
        updateTaskInLocalStorage(updatedTask);
        useTaskStore.getState().fetchTasks();
    },
    addTask: (newTask: KanbanTasks) => {
        addTaskToLocalStorage(newTask);
        useTaskStore.getState().fetchTasks();
    },
    moveTask: (oldIndex: number, newIndex: number) => {
        console.log("oldIndex", oldIndex);
        console.log("newIndex", newIndex);
        set(() => ({
            tasks: arrayMove(useTaskStore.getState().tasks, oldIndex, newIndex),
        }));
    },
    deleteTask: (taskId: string) => {
        deleteTaskFromLocalStorage(taskId);
        useTaskStore.getState().fetchTasks();
    }
}));
"use client";
import { useTaskStore } from "@/store/tasks.store";
import {
    DragEndEvent,
    DragOverEvent,
    DragStartEvent,
    KeyboardSensor,
    MouseSensor,
    PointerSensor,
    TouchSensor,
    useSensor,
    useSensors
} from "@dnd-kit/core";
import {
    sortableKeyboardCoordinates
} from "@dnd-kit/sortable";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { KanbanTasksStatus } from "./KanbanTasks.schema";
export const useKanbanTasks = () => {
    const { tasks, activeId, setActiveId, updateTask, fetchTasks, moveTask } = useTaskStore();
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    const t = useTranslations('tasks');
    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);
    const sensors = useSensors(
        useSensor(MouseSensor),
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        }),
        useSensor(TouchSensor)
    );

    const handleDragStart = (event: DragStartEvent) => {
        setActiveId(event.active.id as string);
    };



    // const handleDragEnd = (event: DragEndEvent) => {
    //     const { active, over } = event;
    //     if (!over) return;

    //     console.log("active.id", active.id);
    //     console.log("over.id", over.id);

    //     if (active.id !== over.id) {
    //         const activeTask = tasks.find((task) => task.id === active.id);
    //         const overContainer = over.id as KanbanTasksStatus;
    //         const isOverColumn = Object.values(KanbanTasksStatus.Values).includes(overContainer);
    //         console.log("isOverColumn", isOverColumn);

    //         if (!isOverColumn) {
    //             const oldIndex = tasks.findIndex(task => task.id === active.id);
    //             const newIndex = tasks.findIndex(task => task.id === over.id);
    //             moveTask(oldIndex, newIndex);
    //         }

    //         if (activeTask && isOverColumn) {
    //             const updatedTask = { ...activeTask, status: overContainer };
    //             console.log("activeTask", activeTask);
    //             console.log("updatedTask", updatedTask);
    //             updateTask(updatedTask as KanbanTasks);
    //         }
    //     }
    //     setActiveId(null);
    // };
    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (!over) return;
        if (over && active.id !== over.id) {
            const overContainer = over.id as KanbanTasksStatus;
            const isOverColumn = Object.values(KanbanTasksStatus._def.values).includes(overContainer);
            const activeTask = tasks.find((task) => task.id === active.id);
            if (activeTask && activeTask.status !== overContainer && isOverColumn) {
                const updatedTask = { ...activeTask, status: overContainer };
                updateTask(updatedTask);
            }
        }
        setActiveId(null);
    };

    const onDragOver = (event: DragOverEvent) => {
        const { active, over } = event;
        if (!over) return;
        if (over && active.id !== over.id) {
            const overContainer = over.id as KanbanTasksStatus;
            const isNotOverColumn = !Object.values(KanbanTasksStatus._def.values).includes(overContainer);
            const activeTask = tasks.find((task) => task.id === active.id);
            // Im dropping a Task over another Task
            if (activeTask && isNotOverColumn) {
                const activeIndex = tasks.findIndex((t) => t.id === active.id);
                const overIndex = tasks.findIndex((t) => t.id === over.id);
                const activeTask = tasks[activeIndex];
                const overTask = tasks[overIndex];
                if (activeTask && overTask) {
                    moveTask(activeIndex, overIndex - 1);
                }
            }
        }
    }

    const activeTask = activeId
        ? tasks.find((task) => task.id === activeId)
        : null;
    return {
        openDialog,
        setOpenDialog,
        t,
        updateTask,
        sensors,
        handleDragStart,
        handleDragEnd,
        activeTask,
        tasks,
        activeId,
        onDragOver,
    };
};


/* eslint-disable @typescript-eslint/no-unused-vars */
import { useTaskStore } from "@/store/tasks.store";
import { useDraggable } from "@dnd-kit/core";
import { CSSProperties } from "react";
import { KanbanTasks } from "../KanbanTasks.schema";

interface DraggableProps {
    id: string;
    task: KanbanTasks;
}

export const useKanbanItemDraggableLogic = ({ id, task }: DraggableProps) => {
    const { deleteTask } = useTaskStore();
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: id,
    });
    const style: CSSProperties | undefined = transform
        ? {
            transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        }
        : undefined;

    const handleDelete = () => {
        console.log('Deleting task with id:', id);
        deleteTask(id);
    };

    return {
        attributes,
        listeners,
        setNodeRef,
        style,
        handleDelete,
    };
};
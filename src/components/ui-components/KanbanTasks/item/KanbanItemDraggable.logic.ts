/* eslint-disable @typescript-eslint/no-unused-vars */
import { useTaskStore } from "@/store/tasks.store";
import { useDraggable } from "@dnd-kit/core";
import { useLocale, useTranslations } from "next-intl";
import { CSSProperties } from "react";
import { KanbanTasks } from "../KanbanTasks.schema";

interface DraggableProps {
    id: string;
    task: KanbanTasks;
}

export const useKanbanItemDraggableLogic = ({ id, task }: DraggableProps) => {
    const { deleteTask } = useTaskStore();
    const t = useTranslations('tasks')
    const locale = useLocale()
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: id,
    });
    const style: CSSProperties | undefined = transform
        ? {
            transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        }
        : undefined;

    const handleDelete = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        console.log('Deleting task with id:', id);
        deleteTask(id);
    };

    const handleEdit = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        console.log('edit', task.id);
    };

    return {
        attributes,
        listeners,
        setNodeRef,
        style,
        handleDelete,
        handleEdit,
        t,
        locale
    };
};
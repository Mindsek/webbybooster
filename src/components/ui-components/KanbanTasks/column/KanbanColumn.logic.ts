import { useDroppable } from "@dnd-kit/core";
import { useTranslations } from "next-intl";
import { KanbanTasks, KanbanTasksStatus } from "../KanbanTasks.schema";

interface KanbanColumnLogicProps {
    status: KanbanTasksStatus
    tasks: KanbanTasks[]
}

export const useKanbanColumnLogic = ({ status, tasks }: KanbanColumnLogicProps) => {
    const t = useTranslations("tasks")
    const { setNodeRef } = useDroppable({
        id: status,
    });
    const filteredTasks = tasks.filter((task) => task.status === status);
    return {
        t,
        setNodeRef,
        filteredTasks
    }
}

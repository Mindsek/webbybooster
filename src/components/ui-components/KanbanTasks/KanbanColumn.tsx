// components/Column.tsx
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useDroppable } from "@dnd-kit/core";
import KanbanItemDraggable from "./KanbanItemDraggable";
import { KanbanTasks, KanbanTaskStatus } from "./KanbanTasks.schema";

export default function KanbanColumn({
    tasks,
    status,
    activeId,
}: {
    tasks: KanbanTasks[];
    status: KanbanTaskStatus;
    activeId: string | null;
}) {
    const { setNodeRef } = useDroppable({
        id: status,
    });
    return (
        <div className="rounded-tl-lg rounded-tr-lg  border overflow-hidden">
            <div
                className={cn(
                    "flex flex-row items-center justify-between space-y-0  px-3 ",
                    status === "not_started"
                        ? "bg-orange-50"
                        : status === "in_progress"
                            ? "bg-blue-50"
                            : "bg-green-50"
                )}
            >
                <h2 className="text-sm font-bold">
                    {status
                        .split("-")
                        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(" ")}
                </h2>
            </div>
            <div className="px-2">
                <ScrollArea ref={setNodeRef} className="h-[calc(100vh-16rem)]">
                    {tasks
                        .filter((task) => task.status === status)
                        .map((task) => (
                            <KanbanItemDraggable
                                key={task.id}
                                id={task.id}
                                task={task}
                                isDragging={activeId === task.id}
                            />
                        ))}
                </ScrollArea>
            </div>
        </div>
    );
}
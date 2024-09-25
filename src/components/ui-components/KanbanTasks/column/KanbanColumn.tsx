import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import KanbanItemDraggable from "../item/KanbanItemDraggable";
import { KanbanTasks, KanbanTasksStatus } from "../KanbanTasks.schema";
import { useKanbanColumnLogic } from "./KanbanColumn.logic";

interface KanbanColumnProps {
    tasks: KanbanTasks[];
    status: KanbanTasksStatus;
    activeId: string | null;
}

export default function KanbanColumn({ tasks, status, activeId }: KanbanColumnProps) {
    const logic = useKanbanColumnLogic({ status, tasks });
    return (
        <Card className="overflow-hidden bg-backgroundSecondary">
            <CardHeader>
                <h2 className="text-lg md:text-xl font-bold">
                    {logic.t(`status.${status}`)}
                </h2>
            </CardHeader>
            <CardContent>
                <ScrollArea ref={logic.setNodeRef} className="h-[70dvh]">
                    <SortableContext items={logic.filteredTasks} strategy={verticalListSortingStrategy}>
                        {logic.filteredTasks.map((task) => (
                            <KanbanItemDraggable key={task.id} id={task.id} task={task} isDragging={activeId === task.id} />
                        ))}
                    </SortableContext>
                </ScrollArea>
            </CardContent>
        </Card>
    );
}
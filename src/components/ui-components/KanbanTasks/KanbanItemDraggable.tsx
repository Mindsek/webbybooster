// components/DraggableItem.tsx
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDraggable } from "@dnd-kit/core";
import { MoreVertical } from "lucide-react";
import { CSSProperties, memo } from "react";
import { KanbanTasks } from "./KanbanTasks.schema";

interface DraggableProps {
    id: string;
    task: KanbanTasks;
    isDragging: boolean;
}

export default memo(function KanbanItemDraggable({
    id,
    task,
    isDragging,
}: DraggableProps) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: id,
    });

    const style: CSSProperties | undefined = transform
        ? {
            transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        }
        : undefined;

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
            className={`my-2 p-3 bg-white rounded-md shadow transition-all duration-200 cursor-move ${isDragging ? "opacity-0" : ""
                }`}
        >
            <div className="flex justify-between items-center">
                <span className="text-sm font-medium line-clamp-1">{task.title}</span>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreVertical className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                            {/* <TaskForm
                                moduleId={task.moduleId}
                                initialStatus={task.status}
                                initialTitle={task.title}
                                editingId={task.id}
                            /> */}
                            <Button>Edit</Button>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            {/* <DeleteTask id={task.id} /> */}
                            <Button>Delete</Button>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
});
/** 
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { KanbanTasks } from "./KanbanTasks.schema";

interface KanbanItemDraggableProps {
    task: KanbanTasks;
}

export const KanbanItemDraggable = ({ task }: KanbanItemDraggableProps) => {
    return (
        <Card key={task.id}>
            <CardHeader>
                <CardTitle>{task.title}</CardTitle>
                <CardDescription>{task.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Importance: {task.importance}</p>
            </CardContent>
            <CardFooter>
                <p>Créé le: {task.createdAt.toLocaleDateString()}</p>
                <p>Mis à jour le: {task.updatedAt.toLocaleDateString()}</p>
            </CardFooter>
        </Card>
    );
};
*/
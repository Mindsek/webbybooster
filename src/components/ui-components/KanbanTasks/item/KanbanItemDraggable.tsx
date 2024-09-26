"use client"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import { memo } from "react";
import { KanbanTasks } from "../KanbanTasks.schema";
import { useKanbanItemDraggableLogic } from "./KanbanItemDraggable.logic";

interface DraggableProps {
    id: string;
    task: KanbanTasks;
    isDragging: boolean;
}

export default memo(function KanbanItemDraggable({ id, task, isDragging }: DraggableProps) {
    const logic = useKanbanItemDraggableLogic({ id, task });
    const localeDateString = new Date(task.createdAt).toLocaleDateString(logic.locale, { day: 'numeric', month: 'long', year: 'numeric' })

    return (
        <Card
            ref={logic.setNodeRef}
            style={logic.style}
            className={`my-2 bg-background transition-all duration-200 ${isDragging ? "opacity-0" : ""}`}
        >
            <div {...logic.listeners} {...logic.attributes} className="cursor-move">
                <CardHeader className="flex flex-row justify-between items-center">
                    <span className="text-sm font-medium line-clamp-1">📌 {task.title}</span>
                </CardHeader>
                <CardContent>
                    <Badge variant={task.importance === 'low' ? 'low' : task.importance === 'medium' ? 'medium' : 'destructive'}>Importance: {task.importance}</Badge>
                </CardContent>
                <CardFooter>
                    <span>{localeDateString}</span>
                </CardFooter>
            </div>
            <div className="absolute top-6 right-4">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreVertical className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={logic.handleEdit}>
                            {logic.t("edit")}
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={logic.handleDelete}>
                            {logic.t("delete")}
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </Card>
    );
});
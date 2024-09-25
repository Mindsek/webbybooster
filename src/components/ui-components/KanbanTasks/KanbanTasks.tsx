// components/Taskboard
"use client";
import { Button } from "@/components/ui/button";
import {
    closestCorners,
    DndContext,
    DragEndEvent,
    DragOverlay,
    DragStartEvent,
    KeyboardSensor,
    MouseSensor,
    PointerSensor,
    TouchSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import {
    sortableKeyboardCoordinates
} from "@dnd-kit/sortable";
import { useState } from "react";
import KanbanColumn from "./KanbanColumn";
import KanbanItemDraggable from "./KanbanItemDraggable";
import { useKanbanTasks } from "./KanbanTasks.logic";

export default function KanbanTasks() {
    const logic = useKanbanTasks();
    const [activeId, setActiveId] = useState<string | null>(null);
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

    const handleDragEnd = async (event: DragEndEvent) => {
        const { active, over } = event;
        if (!over) return;
        if (over && active.id !== over.id) {
            console.log(active, over);
        }
        setActiveId(null);
    };

    const activeTask = activeId
        ? logic.tasks.find((task) => task.id === activeId)
        : null;

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCorners}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <div className="mb-6 flex items-center justify-between flex-wrap">
                <div className="">
                    {logic.tasks.length > 0 && (
                        <p>({logic.tasks.length} Tasks)</p>
                    )}

                    {/* <TaskForm
                        moduleId={activeModule.id}
                        initialStatus="TODO"
                        isDefault={true}
                    /> */}
                    <Button>Ajouter une tâche</Button>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {(["not_started", "in_progress", "completed"] as const).map((status) => (
                    <KanbanColumn
                        key={status}
                        tasks={logic.tasks}
                        status={status}
                        activeId={activeId}
                    />
                ))}
            </div>
            <DragOverlay>
                {activeId && activeTask ? (
                    <KanbanItemDraggable id={activeId} task={activeTask} isDragging={false} />
                ) : null}
            </DragOverlay>
        </DndContext>
    );
}
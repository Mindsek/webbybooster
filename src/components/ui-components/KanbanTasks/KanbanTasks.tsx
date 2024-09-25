"use client";
import {
    closestCorners,
    DndContext,
    DragOverlay
} from "@dnd-kit/core";
import { AddTasksDialog } from "./add/AddTasksDialog";
import KanbanColumn from "./column/KanbanColumn";
import KanbanItemDraggable from "./item/KanbanItemDraggable";
import { useKanbanTasks } from "./KanbanTasks.logic";

export default function KanbanTasks() {
    const logic = useKanbanTasks();
    return (
        <DndContext
            sensors={logic.sensors}
            collisionDetection={closestCorners}
            onDragStart={logic.handleDragStart}
            onDragOver={logic.onDragOver}
            onDragEnd={logic.handleDragEnd}
        >
            <div className="mb-6 flex items-center justify-between flex-wrap">
                <div className="flex gap-4 items-center">
                    <h2 className="text-3xl font-bold mb-2">{logic.t("title")}</h2>
                    {logic.tasks.length > 0 && (
                        <p>({logic.tasks.length} Tasks)</p>
                    )}
                </div>
                <AddTasksDialog />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {(["not_started", "in_progress", "completed"] as const).map((status) => (
                    <KanbanColumn
                        key={status}
                        tasks={logic.tasks}
                        status={status}
                        activeId={logic.activeId}
                    />
                ))}
            </div>
            <DragOverlay>
                {logic.activeId && logic.activeTask ? (
                    <KanbanItemDraggable id={logic.activeId} task={logic.activeTask} isDragging={false} />
                ) : null}
            </DragOverlay>
        </DndContext>
    );
}
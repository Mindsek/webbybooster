"use client";
import { useTaskStore } from "@/store/tasks.store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { KanbanTasksForm, KanbanTasksSchemaForm } from "../KanbanTasks.schema";

export const useAddTasksForm = () => {
    const { setOpenDialog, addTask } = useTaskStore();
    const t = useTranslations("tasks")
    const form = useForm<KanbanTasksForm>({
        resolver: zodResolver(KanbanTasksSchemaForm),
        defaultValues: {
            title: "",
            description: "",
            status: "not_started",
            importance: "low",
            expiryDate: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    })

    const onSubmit = (data: KanbanTasksForm) => {
        try {
            const newTask = {
                ...data,
                id: crypto.randomUUID(),
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            addTask(newTask);
            setOpenDialog(false);
        } catch (error) {
            console.log(error)
        }
    }
    return {
        form,
        onSubmit,
        t
    }
}


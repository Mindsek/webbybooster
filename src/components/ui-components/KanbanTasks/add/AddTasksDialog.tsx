import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { useTaskStore } from "@/store/tasks.store";
import { Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import { AddTasksForm } from "./AddTasksForm";

export function AddTasksDialog() {
    const { openDialog, setOpenDialog } = useTaskStore();
    const t = useTranslations("tasks");
    return (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger asChild>
                <Button className="text-white">
                    <Plus className="h-4 w-4 mr-2" />
                    {t("add")}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{t("add")}</DialogTitle>
                </DialogHeader>
                <AddTasksForm />
                <DialogFooter className="sm:justify-normal">
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

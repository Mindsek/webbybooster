import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { AddTasksForm } from "./AddTasksForm";
import { useTaskStore } from "@/store/tasks.store";

export function AddTasksDialog() {
    const { openDialog, setOpenDialog } = useTaskStore();
    return (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger asChild>
                <Button className="text-white">Add Task</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add task</DialogTitle>
                    <DialogDescription>
                        Add a new task to the board
                    </DialogDescription>
                </DialogHeader>
                <AddTasksForm />
                <DialogFooter className="sm:justify-normal">
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

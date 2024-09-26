import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { useAddAndEditDialog } from "./AddAndEditDialog.logic";
import { FormInterventions } from "./form/FormInterventions";

interface AddAndEditDialogProps {
    isDialogOpen: boolean;
    setIsDialogOpen: (isDialogOpen: boolean) => void;
}

export const AddAndEditDialog = ({ isDialogOpen, setIsDialogOpen }: AddAndEditDialogProps) => {
    const logic = useAddAndEditDialog();
    return (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
                <Button className="text-white"><Plus className="h-4 w-4 mr-2" /> {logic.t("addTitle")}</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{logic.t("addTitle")}</DialogTitle>
                </DialogHeader>
                <FormInterventions />
            </DialogContent>
        </Dialog >
    );
};
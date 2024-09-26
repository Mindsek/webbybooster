"use client";
import { useEventStore } from '@/store/event.store';
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { InterventionsForm, InterventionsSchemaForm } from "./FormInterventions.schema";

export const useFormInterventions = () => {
    const t = useTranslations('interventions');
    const { addEvent, setIsDialogOpen } = useEventStore();

    const form = useForm<InterventionsForm>({
        resolver: zodResolver(InterventionsSchemaForm),
        defaultValues: {
            title: "",
            description: "",
            location: "",
            date: new Date(),
        },
    });

    const onSubmit = (data: InterventionsForm) => {
        addEvent({
            ...data,
            date: new Date(data.date),
        });
        setIsDialogOpen(false);
        form.reset();
    };


    return {
        form,
        t,
        onSubmit,
    };
};
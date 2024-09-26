"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { StickyNoteForm, StickyNoteSchemaForm } from "./StickyNote.schema";
interface Idea {
    id: string
    content: string
}
export const useStickyNote = () => {
    const t = useTranslations('sticky_note')
    const form = useForm<StickyNoteForm>({
        resolver: zodResolver(StickyNoteSchemaForm),
        defaultValues: {
            title: "",
        },
    })

    const onSubmit = (data: StickyNoteForm) => {
        const idea: Idea = {
            id: crypto.randomUUID(),
            content: data.title.trim()
        }
        setIdeas([...ideas, idea])
        form.reset()
    }

    const [ideas, setIdeas] = useState<Idea[]>([])

    useEffect(() => {
        const storedIdeas = localStorage.getItem('ideas')
        if (storedIdeas) {
            setIdeas(JSON.parse(storedIdeas))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('ideas', JSON.stringify(ideas))
    }, [ideas])

    const deleteIdea = (id: string) => {
        setIdeas(ideas.filter(idea => idea.id !== id))
    }
    return {
        form,
        t,
        onSubmit,
        ideas,
        deleteIdea
    }
}


"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useStickyNote } from "./StickyNote.logic"

export default function StickyNote() {
    const logic = useStickyNote();

    return (
        <Card className="w-full mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">Idées & Pensées</CardTitle>
                <Form {...logic.form}>
                    <form onSubmit={logic.form.handleSubmit(logic.onSubmit)} className="flex items-start gap-2 ">
                        <FormField
                            control={logic.form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input placeholder={logic.t("placeholder")} className="" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="text-white">{logic.t("add")}</Button>
                    </form>
                </Form>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                    {logic.ideas.map((idea) => (
                        <div key={idea.id} className="flex justify-between items-center mb-2 p-2 rounded-md bg-secondary">
                            <span className="text-sm truncate">{idea.content}</span>
                            <Button variant="destructive" size="sm" onClick={() => logic.deleteIdea(idea.id)}>
                                {logic.t("delete")}
                            </Button>
                        </div>
                    ))}
                </ScrollArea>
            </CardContent>
        </Card>
    )
}
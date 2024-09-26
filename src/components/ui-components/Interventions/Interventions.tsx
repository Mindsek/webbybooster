"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { addWeeks, format, subWeeks } from 'date-fns'
import { fr } from 'date-fns/locale'
import { ChevronLeft, ChevronRight } from "lucide-react"
import { AddAndEditDialog } from "./dialog/AddAndEditDialog"
import { useInterventions } from "./Interventions.logic"

export default function Interventions() {
    const logic = useInterventions();
    return (
        <div className="mx-auto p-6 bg-background text-foreground rounded-md">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">INTERVENTIONS</h1>
                <div className="flex items-center space-x-4">
                    <Button onClick={() => logic.setCurrentWeek(subWeeks(logic.currentWeek, 1))}>
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <span>{format(logic.currentWeek, 'MMMM yyyy', { locale: fr })}</span>
                    <Button onClick={() => logic.setCurrentWeek(addWeeks(logic.currentWeek, 1))}>
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
                <AddAndEditDialog isDialogOpen={logic.isDialogOpen} setIsDialogOpen={logic.setIsDialogOpen} />
            </div>
            <div className="grid grid-cols-7 gap-2">
                {logic.weekDays.map((day) => (
                    <div key={day.toString()} className="border rounded p-2">
                        <div className="text-sm font-semibold mb-2">
                            {format(day, 'EEE', { locale: fr })}
                            <span className="ml-1">{format(day, 'd')}</span>
                        </div>
                        <ScrollArea className="h-40">
                            {logic.events
                                .filter((event) => format(event.date, 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd'))
                                .map((event) => (
                                    <div key={event.id} className="mb-2 p-2 bg-secondary rounded text-xs">
                                        <div className="font-semibold">{event.title}</div>
                                        <div>{event.location}</div>
                                        <div>{format(event.date, 'HH:mm')}</div>
                                    </div>
                                ))}
                        </ScrollArea>
                    </div>
                ))}
            </div>
        </div>
    )
}
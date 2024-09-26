import { startOfWeek } from 'date-fns';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Event {
    id: string;
    title: string;
    location: string;
    description?: string;
    date: Date;
}

interface EventState {
    events: Event[];
    currentWeek: Date;
    isDialogOpen: boolean;
    setEvents: (events: Event[]) => void;
    setCurrentWeek: (date: Date) => void;
    setIsDialogOpen: (open: boolean) => void;
    addEvent: (event: Omit<Event, 'id'>) => void;
    updateEvent: (event: Event) => void;
    deleteEvent: (id: string) => void;
}

export const useEventStore = create<EventState>()(
    persist(
        (set) => ({
            events: [],
            currentWeek: startOfWeek(new Date(), { weekStartsOn: 1 }),
            isDialogOpen: false,
            setEvents: (events) => set({ events }),
            setCurrentWeek: (date) => set({ currentWeek: date }),
            setIsDialogOpen: (open) => set({ isDialogOpen: open }),
            addEvent: (event) => set((state) => ({
                events: [...state.events, { ...event, id: crypto.randomUUID() }]
            })),

            updateEvent: (updatedEvent) => set((state) => ({
                events: state.events.map((event) =>
                    event.id === updatedEvent.id ? updatedEvent : event
                )
            })),
            deleteEvent: (id) => set((state) => ({
                events: state.events.filter((event) => event.id !== id)
            })),
        }),
        {
            name: 'event-storage',
            partialize: (state) => ({ events: state.events }),
        }
    )
);
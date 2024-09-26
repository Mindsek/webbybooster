import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useFormInterventions } from "./FormInterventions.logic";

export const FormInterventions = () => {
    const logic = useFormInterventions();
    return (
        <Form {...logic.form}>
            <form onSubmit={logic.form.handleSubmit(logic.onSubmit)} className="space-y-4">
                <FormField
                    control={logic.form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormLabel>{logic.t("title")}</FormLabel>
                            <FormControl>
                                <Input placeholder={logic.t("form.placeholder_title")} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={logic.form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormLabel>{logic.t("form.description")}</FormLabel>
                            <FormControl>
                                <Textarea placeholder={logic.t("form.placeholder_description")} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={logic.form.control}
                    name="location"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormLabel>{logic.t("form.location")}</FormLabel>
                            <FormControl>
                                <Textarea placeholder={logic.t("form.placeholder_location")} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={logic.form.control}
                    name="date"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>{logic.t("form.date")}</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-[240px] pl-3 text-left font-normal",
                                                !field.value && "text-muted-foreground"
                                            )}
                                        >
                                            {field.value ? (
                                                format(field.value, "PPP")
                                            ) : (
                                                <span>Pick a date</span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        disabled={(date) =>
                                            date < new Date("1900-01-01")
                                        }
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="text-white">{logic.t("add")}</Button>
            </form>
        </Form>
    );
};
'use client';
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Form } from "../ui/form";
import CustomFormField from '../CustomFormField/CustomFormField';
import SubmitButton from '../SubmitButton/SubmitButton';
import { SimpleFormValidation } from '@/lib/validation';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormFieldType } from "@/lib/utils";

const SimpleForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const form = useForm<z.infer<typeof SimpleFormValidation>>({
		resolver: zodResolver(SimpleFormValidation),
		defaultValues: {
            name: "",
			phone: ""
		},
	});
    async function onSubmit(values: z.infer<typeof SimpleFormValidation>) {
		setIsLoading(true)
		try {
		  const clientData = {
            name: values.name,
			phone: values.phone
		  }
		  console.log("Submitted data:", clientData);
		} catch (error) {
		  console.error("Error submitting form:", error)
		}
		console.log(values)
	  }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
                <CustomFormField
                    control={form.control}
                    fieldType={FormFieldType.INPUT}
                    name="name"
                    placeholder="Ваше имя"
                />
                <CustomFormField
                    control={form.control}
                    fieldType={FormFieldType.INPUT}
                    name="phone"
                    placeholder="+7 (999) 999-99-99"
                />
                <SubmitButton isLoading={isLoading}>Рассчитать стоимость</SubmitButton>
            </form>
        </Form>
    )
}

export default SimpleForm
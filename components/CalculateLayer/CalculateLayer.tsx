'use client';
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import PlusMinusButton from "../PlusMinusButton/PlusMinusButton";
import CustomFormField from "../CustomFormField/CustomFormField";
import { FormFieldType } from "@/lib/utils";
import { Form } from "../ui/form";
import { OrderFormValidation } from "@/lib/validation";
import SubmitButton from "../SubmitButton/SubmitButton";

const CalculateLayer = () => {
	const [isLoading, setIsLoading] = useState(false);
	const form = useForm<z.infer<typeof OrderFormValidation>>({
		resolver: zodResolver(OrderFormValidation),
		defaultValues: {
			roomCount: 1,
			wcCount: 1,
			phone: ""
		},
	});

	async function onSubmit(values: z.infer<typeof OrderFormValidation>) {
		setIsLoading(true)
		try {
		  const orderData = {
			roomCount: values.roomCount,
			wcCount: values.wcCount,
			phone: values.phone
		  }
		  console.log("Submitted data:", orderData);
		} catch (error) {
		  console.error("Error submitting form:", error)
		}
		console.log(values)
	  }
	return (
		<div className='bg-white shadow-md p-8 rounded-md mt-16'>
			<h2 className="text-2xl font-bold text-center">Рассчитайте стоимость уборки</h2>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
					<div className="flex mt-8 gap-4" >
						<PlusMinusButton caseType="rooms"/>
						<PlusMinusButton caseType="wc" />
						<CustomFormField
							control={form.control}
							fieldType={FormFieldType.INPUT}
							name="phone"
							placeholder="+7 (999) 999-99-99"
						/>
						<SubmitButton isLoading={isLoading}>Рассчитать стоимость</SubmitButton>
					</div>
				</form>
			</Form>
		</div>
	)
}

export default CalculateLayer
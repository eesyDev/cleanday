import { FormFieldType } from "@/lib/utils";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";

const RenderField = ({ field, props } : { field: any, props: RenderFieldProps }) => {
	switch (field.fieldType) {
		case FormFieldType.INPUT:
			return (
				<div className="flex rounded-md border border-dark-500 bg-dark-400">
					<FormControl>
						<Input
							placeholder={props.placeholder}
							{...field}
							className="shad-input border-0"
						/>
					</FormControl>
				</div>
			)
	}
}

const CustomFormField = (props: RenderFieldProps) => {
	const { control, name, fieldType, label, placeholder, iconSrc, iconAlt } = props;
  return (
    <FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className="flex-1">
					{fieldType !== FormFieldType.CHECKBOX && label && (
						<FormLabel>{label}</FormLabel>
					)}
					<RenderField
						field={field}
						props={props}
					/>
					<FormMessage className="shad-error" />
				</FormItem>
			)}
		/>
  )
}

export default CustomFormField
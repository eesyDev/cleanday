declare interface RenderFieldProps {
	control: Control<any>,
	name: string,
	fieldType: FormFieldType,
	label?: string,
	placeholder?: string,
	iconSrc?: string,
	iconAlt?: string,
	disabled?: boolean,
	dateFormat?: string,
	showTimeSelect?: boolean,
	children?: React.ReactNode,
	renderSkeleton?: (field: any) => React.ReactNode
}

declare interface SubmitButtonProps {
    isLoading: boolean,
    className?: string,
    children: React.ReactNode
}
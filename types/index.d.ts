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

declare interface IncludesListProps {
	title: string,
	subtitle?: string,
	itemsList: Array<IncludesListItem>,
}

declare interface IncludesListItemProps {
	title: string,
	description?: string,
	imageSrc?: string,
	imageAlt?: string,
	includes?: Array<IncludesItem>,
	excludes?: Array<IncludesItem>
}

declare interface IncludesItem {
	id: string,
	title: string,
	description?: string,
	price?: string,
}
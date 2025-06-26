import { cn } from "@/lib/utils"

const Divider = ({ classes } : { classes: string }) => {
  return (
    <div className={cn(`block ${classes}`)}></div>
  )
}

export default Divider
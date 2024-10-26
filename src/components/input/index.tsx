import { ComponentProps } from "react"

type InputProps = ComponentProps<'input'>

export function Input(props: InputProps) {
    return (
        <input
            {...props}
            className="w-[279px] h-11 border-0 bg-slate-200 text-slate-400 px-3 py-2 rounded-md"
        />
    )
}
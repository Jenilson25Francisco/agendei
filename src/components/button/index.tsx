import { ComponentProps } from "react"

type ButtonProps = ComponentProps<'button'> & {
    text: string
}

export function Button({ text, ...props }: ButtonProps) {
    return (
        <button
            {...props}
            className="px-3 py-2 w-[279px] h-11 bg-blue-600 text-slate-100 font-semibold flex items-center justify-center rounded"
        >
            {text}
        </button>
    )
}
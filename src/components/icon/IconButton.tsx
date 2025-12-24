import type {ReactNode} from "react";

interface IconButtonProps {
    onClick?: () => void
    className?: string
    icon: ReactNode
    title?: string
}

export default function IconButton({ onClick, className = '', icon, title }: IconButtonProps) {
    return (
        <button onClick={onClick} className={`cursor-pointer ${className}`} title={title}>
            {icon}
        </button>
    )
}

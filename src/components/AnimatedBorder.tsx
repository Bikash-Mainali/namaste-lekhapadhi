import React from 'react'
import '../styles/AnimatedBorder.css'

interface AnimatedBorderProps {
    children?: React.ReactNode
    className?: string
}

export const AnimatedBorder = ({ children, className = '' }: AnimatedBorderProps) => {
    return (
        <div className={`animate-parent-element ${className}`}>
            <div className="animate-children-element">{children}</div>
        </div>
    )
}


import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

function Button({
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full px-8 py-4 font-medium transition-colors duration-300'

  const variantStyles = {
    primary:
      'bg-[#3B2418] text-white hover:bg-[#60412E]',
    secondary:
      'border border-[#3B2418] bg-transparent text-[#3B2418] hover:bg-[#3B2418] hover:text-white',
  }

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

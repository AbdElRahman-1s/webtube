import { cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

const buttonStyles = cva(["hover:bg-secondary-hover","transition-colors"],{
  variants: {
    variant:{
      default: ["bg-secondary","hover:bg-secondary-hover"],
      ghost: ["hover:bg-gray-100"],
      dark: ["bg-secondary-dark","hover:bg-secondary-dark-hover","text-secondary"]
    },
    size:{
      default: ["rounded","p-2"],
      icon: ["rounded-full","w-10","h-10","flex","items-center","justify-center","p-2.5"],
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});



function Button({variant, size, children,className,...props}: {
  variant?: "default" | "ghost", 
  size?: "default" | "icon",
  children: React.ReactNode,
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={twMerge(buttonStyles({variant, size}),className)} {...props}>
      {children}
    </button>
  )
}

export default Button
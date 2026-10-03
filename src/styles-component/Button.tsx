import { cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

const buttonStyles = cva(["hover:bg-secondary-hover","transition-colors"],{
  variants: {
    variant:{
      default: ["bg-secondary","hover:bg-secondary-hover"],
      ghost: ["hover:bg-gray-100"],
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



function Button({variant, size, children,className}: {
  variant?: "default" | "ghost", 
  size?: "default" | "icon",
  children: React.ReactNode,
  className?: string
}) {
  return (
    <button className={twMerge(buttonStyles({variant, size}),className)}>
      {children}
    </button>
  )
}

export default Button
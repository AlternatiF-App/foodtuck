'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

type typeVariant = 'primary' | 'secondary' | 'disabled'
type typeSize = 'primary' | 'default' | 'auth' | 'icon'
type typeRounded = 'full' | '2XS' | 'XS' | 'S' | 'M' | 'L' | 'XL' | '2XL' | '3XL' | '4XL' | '5XL'

const getVariants = (variant: typeVariant) => {
  switch (variant) {
    case 'primary':
      return 'bg-brand-primary-3 text-black-2'
    case 'secondary':
      return 'bg-white text-neutral-700 border border-neutral-200 hover:border-neutral-700 focus:bg-neutral-50 focus:border-neutral-600'
    case 'disabled':
      return 'bg-neutral-200 text-white'
  }
}


const getSize = (size: typeSize) => {
  switch (size) {
    case 'primary':
      return 'px-4 py-2 w-full'
    case 'default':
      return 'px-14 py-4'
    case 'auth':
      return 'w-full lg:w-[240px] py-2'
    case 'icon':
      return 'h-[40px] w-[40px]'
  }
}

const getRounded = (rounded: typeRounded) => {
  switch (rounded) {
    case 'full':
      return 'rounded-full'
  }
}

export interface ButtonProps {
  className?: string
  variant?: typeVariant
  size?: typeSize
  rounded?: typeRounded
  asChild?: boolean
  disabled?: boolean
  children: JSX.Element
  onClick? :Function
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', rounded = 'full', asChild = false, disabled = false, children, onClick = () => {}, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    const classname = cn(
      getVariants(disabled ? 'disabled' : variant),
      getSize(size),
      getRounded(rounded),
      className,
      'relative'
    )

    return (
      <Comp
        id='btn-submit'
        className={classname}
        ref={ref}
        disabled={disabled}
        type='submit'
        onClick={() => onClick()}
        {...props}
      >
        { children }
      </Comp>
    )
  }
)
Button.displayName = 'Button'

export { Button }

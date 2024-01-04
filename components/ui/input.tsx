import * as React from 'react'
import { FiSearch } from 'react-icons/fi'
import { cn } from '@/lib/utils'

type textVariant = 'search'

interface InputOptions {
  variant: textVariant
  password?: string
}

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & InputOptions

const getVariant = (variant: textVariant) => {
  switch (variant) {
    case 'search':
      return 'min-w-[200px] rounded-full border border-brand-primary-3 bg-black-3 px-spacing-4 py-spacing-3'
  }
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const { variant = 'search' } = props

    return (
      <div className='relative'>
        {
          variant === 'search' && <FiSearch className='h-6 w-6 text-white absolute right-4 top-4'/>
        }
        <input
          type={type}
          className={cn(
            'pl-6 pr-12 py-4 w-full focus:outline-none text-base placeholder:text-white text-white',
            getVariant(variant),
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = 'Input'
Input.defaultProps = {
  variant: 'search',
  password: ''
}

export { Input }

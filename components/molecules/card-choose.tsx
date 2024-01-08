import Text from '@/components/ui/text'
import Image from 'next/image'

const CardChoose = ({
  icon,
  alt,
  title
}: {
  icon: string
  alt: string
  title: string
}) => {
  return (
    <div className='flex flex-col items-center space-y-2'>
      <div className='bg-brand-primary-3 p-6 rounded-md'>
        <Image
          src={icon}
          alt={alt}
          title={alt}
          height={56}
          width={56}
          className='w-14 h-14'
        />
      </div>
      <Text
        size='h4'
        variant='white'
      >
        { title }
      </Text>
    </div>
  )
}

export default CardChoose

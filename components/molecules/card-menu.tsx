import Text from '@/components/ui/text'
import Image from 'next/image'

const CardMenu = ({
  image,
  alt,
  title,
  subtitle,
  price
}: {
  image: string
  alt: string
  title: string
  subtitle: string
  price: string
}) => {
  return (
    <div className='flex items-center space-x-4'>
      <Image
        src={image}
        alt={alt}
        title={alt}
        height={80}
        width={80}
      />
      <div className='space-y-1.5'>
        <Text
          size='h3'
          variant='white'
          weight='600'
          className='block'
        >
          { title }
        </Text>
        <Text
          size='h4'
          variant='white'
          className='block'
        >
          { subtitle }
        </Text>
        <Text
          size='h3'
          variant='primary'
          weight='600'
          className='block'
        >
          { price }
        </Text>
      </div>
    </div>
  )
}

export default CardMenu

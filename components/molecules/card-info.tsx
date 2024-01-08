import Text from '@/components/ui/text'
import Image from 'next/image'

const CardInfo = ({
  icon,
  alt,
  title,
  subtitle
}: {
  icon: string
  alt: string
  title: string
  subtitle: string
}) => {
  return (
    <div className='flex flex-col items-center'>
      <div>
        <Image
          src={icon}
          alt={alt}
          title={alt}
          height={120}
          width={120}
        />
      </div>
      <Text
        size='h3'
        variant='white'
        className='mt-6'
      >
        { title }
      </Text>
      <Text
        size='h2'
        variant='white'
        weight='600'
        className='mt-6'
      >
        { subtitle }
      </Text>
    </div>
  )
}

export default CardInfo

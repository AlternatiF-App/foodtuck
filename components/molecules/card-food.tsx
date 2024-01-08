import Text from '@/components/ui/text'
import Image from 'next/image'

const CardFood = ({
  image,
  alt,
  discount,
  title,
}: {
  image: string,
  alt: string,
  discount: string,
  title: string
}) => {
  return (
    <div className='relative group'>
      <Image
        src={image}
        alt={alt}
        title={alt}
        height={326}
        width={305}
      />
      <div className='absolute top-32 flex flex-col space-y-4 group-hover:opacity-100 opacity-0 transition-all duration-300 ease-in-out'>
        <Text
          size='h4'
          className='bg-white text-brand-primary-3 w-fit ml-[70px] px-4 py-2 rounded-md'
        >
          Save { discount }
        </Text>
        <Text
          size='h4'
          className='bg-brand-primary-3 text-white px-8 py-2 rounded-md'
        >
          { title }
        </Text>
      </div>
    </div>
  )
}

export default CardFood

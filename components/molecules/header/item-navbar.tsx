import Text from '@/components/ui/text'

const ItemNavbar = ({
  title
}: {
  title: string
}) => {
  return (
    <li className='group flex flex-col items-center'>
      <Text
        size='h4'
        variant='white'
        weight='400'
        className='cursor-pointer'
      >
        { title }
      </Text>
      <div className='w-0 h-2 group-hover:w-2 bg-brand-primary-3 rounded-full transition-all duration-300 ease-linear' />
    </li>
  )
}

export default ItemNavbar

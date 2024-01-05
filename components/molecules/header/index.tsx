import Image from 'next/image'
import ItemNavbar from './item-navbar'
import { Input } from '@/components/ui/input'
import { PiHandbag } from 'react-icons/pi'

const Header = () => {
  return (
    <header className='pt-12 pb-4 bg-black-2'>
      <div className='container mx-auto flex justify-center items-center'>
        <Image
          src='images/logo.svg'
          alt='foodtuck'
          title='foodtuck'
          height={32}
          width={109}
        />
      </div>
      <nav className='container mx-auto py-2 flex justify-between'>
        <ul className='flex items-center space-x-8'>
          <ItemNavbar title='Home' />
          <ItemNavbar title='Menu' />
          <ItemNavbar title='Blog' />
          <ItemNavbar title='Pages' />
          <ItemNavbar title='About' />
          <ItemNavbar title='Shop' />
          <ItemNavbar title='Contact' />
        </ul>
        <div className='flex items-center space-x-2'>
          <Input
            variant='search'
            placeholder='Search ...'
          />
          <PiHandbag className='w-6 h-6 text-white' />
        </div>
      </nav>
    </header>
  )
}

export default Header

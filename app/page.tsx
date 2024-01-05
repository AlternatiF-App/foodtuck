import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Text from '@/components/ui/text'
import Image from 'next/image'

const Home = () => {
  return (
    <main className=''>
      {/* Hero */}
      <section id='hero' className='relative flex items-center w-11/12 mx-auto h-[84vh] pb-20 space-x-4'>
        <div className='w-2/5 flex items-center space-x-8'>
          <div className='w-1/12 flex flex-col items-center space-y-12'>
            <Separator orientation='vertical' />
            <div className='flex flex-col items-center space-y-6'>
              <Image
                src='images/hero/ic-facebook.svg'
                alt='ic-facebook'
                title='ic-facebook'
                height={12}
                width={12}
              />
              <Image
                src='images/hero/ic-twitter.svg'
                alt='ic-twitter'
                title='ic-twitter'
                height={12}
                width={12}
              />
              <Image
                src='images/hero/ic-pinterest.svg'
                alt='ic-pinterest'
                title='ic-pinterest'
                height={12}
                width={12}
              />
            </div>
            <Separator orientation='vertical' />
          </div>
          <div className='w-11/12 pt-28'>
            <Text
              size='h0'
              className='font-great-vibes block'
            >
              Its Quick & Amusing!
            </Text>
            <Text
              size='banner'
              weight='700'
              variant='white'
              className='mt-2 block'
            >
              <span className='text-brand-primary-3'>Th</span>e Art of speed food Quality
            </Text>
            <Text
              size='h4'
              variant='white'
              weight='300'
              className='mt-8 block w-3/4'
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
            </Text>
            <Button
              className='mt-8'
            >
              <>
                See Menu
              </>
            </Button>
          </div>
        </div>
        <div className='w-3/5 pt-8'>
          <Image
            src='images/hero/hero.svg'
            alt='vector-hero'
            title='vector-hero'
            height={670}
            width={877}
            className='h-[670px] w-[877px]'
          />
        </div>
      </section>
    </main>
  )
}

export default Home

import CardChoose from '@/components/molecules/card-choose'
import CardFood from '@/components/molecules/card-food'
import CardInfo from '@/components/molecules/card-info'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Text from '@/components/ui/text'
import Image from 'next/image'
import { FiCheck } from 'react-icons/fi'

const Home = () => {
  return (
    <main className=''>
      {/* Hero */}
      <section id='hero' className='relative flex items-center w-11/12 mx-auto h-[84vh] px-4 pb-20 space-x-4'>
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
              weight='600'
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
            className='h-[670px] w-[877px] m-auto'
          />
        </div>
      </section>

      {/* About Us */}
      <section id='about-us' className='flex items-center container mx-auto py-16 space-x-24'>
        <div className='w-1/2'>
          <Text
            size='h0'
            className='font-great-vibes block'
          >
            About Us
          </Text>
          <Text
            size='banner'
            weight='600'
            variant='white'
            className='mt-2 block'
          >
            <span className='text-brand-primary-3'>We</span> Create the best foody product
          </Text>
          <Text
            size='h4'
            variant='white'
            weight='300'
            className='mt-8 block text-justify'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
          </Text>
          <div>
            <Text
              size='h4'
              variant='white'
              weight='300'
              className='mt-6 flex items-center'
            >
              <FiCheck className='w-4 h-4 text-white mr-2' />
              Lacus nisi, et ac dapibus sit eu velit in consequat.
            </Text>
            <Text
              size='h4'
              variant='white'
              weight='300'
              className='mt-6 flex items-center'
            >
              <FiCheck className='w-4 h-4 text-white mr-2' />
              Quisque diam pellentesque bibendum non dui volutpat fringilla.
            </Text>
            <Text
              size='h4'
              variant='white'
              weight='300'
              className='mt-6 flex items-center'
            >
              <FiCheck className='w-4 h-4 text-white mr-2' />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </div>
          <Button
            className='mt-8'
          >
            <>
              Read More
            </>
          </Button>
        </div>
        <div className='w-1/2'>
          <Image
            src='images/about/about-1.svg'
            alt='about-1'
            title='about-1'
            height={330}
            width={660}
          />
          <div className='grid grid-cols-2 mt-4 gap-x-4'>
            <Image
              src='images/about/about-2.svg'
              alt='about-2'
              title='about-2'
              height={194}
              width={322}
            />
            <Image
              src='images/about/about-3.svg'
              alt='about-3'
              title='about-3'
              height={194}
              width={322}
            />
          </div>
        </div>
      </section>

      {/* Food Category */}
      <section id='food-category' className='flex flex-col items-center container mx-auto py-16'>
        <Text
          size='h0'
          className='font-great-vibes block'
        >
          Food Category
        </Text>
        <Text
          size='banner'
          weight='600'
          variant='white'
          className='mt-2 block'
        >
          <span className='text-brand-primary-3'>Ch</span>oose Food Item
        </Text>
        <div className='flex space-x-8 mt-14'>
          <CardFood
            image='images/food/food-1.svg'
            alt='food-1'
            discount='30%'
            title='Fast Food Dish'
          />
          <CardFood
            image='images/food/food-2.svg'
            alt='food-2'
            discount='30%'
            title='Fast Food Dish'
          />
          <CardFood
            image='images/food/food-3.svg'
            alt='food-3'
            discount='30%'
            title='Fast Food Dish'
          />
          <CardFood
            image='images/food/food-4.svg'
            alt='food-4'
            discount='30%'
            title='Fast Food Dish'
          />
        </div>
      </section>

      {/* Choose Us */}
      <section id='choose-us' className='flex container mx-auto py-16 space-x-4'>
        <div className='w-1/2 space-y-4'>
          <div className='grid grid-cols-2 gap-x-4 place-items-baseline'>
            <Image
              src='images/choose/choose-1.svg'
              alt='choose-1'
              title='choose-1'
              height={356}
              width={362}
            />
            <Image
              src='images/choose/choose-2.svg'
              alt='choose-2'
              title='choose-2'
              height={231}
              width={281}
            />
          </div>
          <div className='grid grid-cols-3 gap-x-4'>
            <Image
              src='images/choose/choose-3.svg'
              alt='choose-3'
              title='choose-3'
              height={306}
              width={244}
            />
            <Image
              src='images/choose/choose-4.svg'
              alt='choose-4'
              title='choose-4'
              height={226}
              width={221}
            />
            <div className='space-y-4'>
              <Image
                src='images/choose/choose-5.svg'
                alt='choose-5'
                title='choose-5'
                height={168}
                width={161}
              />
              <Image
                src='images/choose/choose-6.svg'
                alt='choose-6'
                title='choose-6'
                height={168}
                width={161}
              />
            </div>
          </div>
        </div>
        <div className='w-1/2'>
          <Text
            size='h0'
            className='font-great-vibes block'
          >
            Why Choose Us
          </Text>
          <Text
            size='banner'
            weight='600'
            variant='white'
            className='mt-2 block'
          >
            <span className='text-brand-primary-3'>Ex</span>ta ordinary taste And Experienced 
          </Text>
          <Text
            size='h4'
            variant='white'
            weight='300'
            className='mt-8 block text-justify'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
          </Text>
          <div className='flex items-center space-x-8 mt-8'>
            <CardChoose
              icon='images/choose/ic-fast-food.svg'
              alt='ic-fast-food'
              title='Fast Food'
            />
            <CardChoose
              icon='images/choose/ic-lunch.svg'
              alt='ic-lunch'
              title='Lunch'
            />
            <CardChoose
              icon='images/choose/ic-dinner.svg'
              alt='ic-dinner'
              title='Dinner'
            />
          </div>
          <div className='flex mt-8'>
            <div className='px-2 py-6 bg-brand-primary-3 rounded-l-md' />
            <div className='bg-white px-12 py-6 rounded-r-md flex items-center space-x-8'>
              <Text
                variant='primary'
                size='banner'
                weight='600'
              >
                30+
              </Text>
              <div>
                <Text
                  variant='black-2'
                  size='h2'
                  className='block'
                >
                  Years of
                </Text>
                <Text
                  variant='black-2'
                  size='h2'
                  weight='600'
                >
                  Experienced
                </Text>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Landing Page */}
      <section id='info' className={`relative bg-cover bg-center bg-no-repeat bg-[url('/images/vector-info.svg')]`}>
        <div className='bg-black-2 bg-opacity-75'>
          <div className='container mx-auto py-16 flex items-center justify-center z-50 space-x-40'>
            <CardInfo
              icon='images/ic-chef.svg'
              alt='ic-chef'
              title='Professional Chefs'
              subtitle='420'
            />
            <CardInfo
              icon='images/ic-items.svg'
              alt='ic-items'
              title='Items of Food'
              subtitle='320'
            />
            <CardInfo
              icon='images/ic-experiences.svg'
              alt='ic-experiences'
              title='Years of Experiences'
              subtitle='30+'
            />
            <CardInfo
              icon='images/ic-happy-customers.svg'
              alt='ic-happy-customers'
              title='Happy Customers'
              subtitle='220'
            />
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id='menu' className='container mx-auto py-16'>
        <div className='flex flex-col items-center'>
          <Text
            size='h0'
            className='font-great-vibes block'
          >
            Choose & Pick
          </Text>
          <Text
            size='banner'
            weight='600'
            variant='white'
            className='mt-2 block'
          >
            <span className='text-brand-primary-3'>Fr</span>om Our Menu
          </Text>
        </div>
        <div className='mt-14'>
          <nav className='flex space-x-28 items-center'>
            <Text
              size='h4'
              variant='nav'
            >
              Breakfast
            </Text>
            <Text
              size='h4'
              variant='nav'
            >
              Lunch
            </Text>
            <Text
              size='h4'
              variant='nav'
            >
              Dinner
            </Text>
            <Text
              size='h4'
              variant='nav'
            >
              Dessert
            </Text>
            <Text
              size='h4'
              variant='nav'
            >
              Drink
            </Text>
            <Text
              size='h4'
              variant='nav'
            >
              Snack
            </Text>
            <Text
              size='h4'
              variant='nav'
            >
              Suops
            </Text>
          </nav>
          <div className='grid grid-cols-3 mt-14'>
            <div className='relative flex flex-col items-center'>
              <Image
                src='images/menu/menu-vector-2.svg'
                alt='menu-vector-2'
                title='menu-vector-2'
                height={406}
                width={515}
                className=''
              />
              <Image
                src='images/menu/menu-vector-1.svg'
                alt='menu-vector-1'
                title='menu-vector-1'
                height={362}
                width={366}
                className='absolute top-0 p-4'
              />
            </div>
            <div>
              <div className='flex items-center space-x-4'>
                <Image
                  src='images/menu/menu-1.svg'
                  alt='menu-1'
                  title='menu-1'
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
                    Lettuce Leaf
                  </Text>
                  <Text
                    size='h4'
                    variant='white'
                    className='block'
                  >
                    Lacus nisi, et ac dapibus velit in consequat.
                  </Text>
                  <Text
                    size='h3'
                    variant='primary'
                    weight='600'
                    className='block'
                  >
                    12.5$
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home

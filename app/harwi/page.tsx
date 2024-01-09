import Image from 'next/image'
import Text from '@/components/ui/text'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { HiLocationMarker } from 'react-icons/hi'

const Harwi = () => {
  return (
    <main className='my-10'>
      {/* FAQ */}
      <section id='faq' className='container md:mx-auto'>
        <div className='flex flex-col items-center'>
          <Text
            size='h1'
            variant='black-2'
            weight='700'
            className='block'
          >
            FAQ
          </Text>
          <Text
            size='h5'
            variant='black-2'
            weight='300'
            className='block lg:w-[612px] text-center mt-1'
          >
            Temukan jawaban cepat untuk pertanyaan umum di halaman FAQ kami. Solusi instan untuk pengalaman berbelanja yang lebih lancar di Harwi Gadget
          </Text>
        </div>
        <div className='md:flex md:space-x-6 mt-16'>
          <div className='hidden md:block md:w-1/3 space-y-6'>
            <Image
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwjxTZZGv_gdVKe78ilg12l10zkNmZs5oHQQ&usqp=CAU'
              alt='alt'
              title='title'
              height={194}
              width={451}
              className='rounded-3xl h-[194px] w-[451px] object-cover'
            />
            <div className='flex space-x-6'>
              <Image
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwjxTZZGv_gdVKe78ilg12l10zkNmZs5oHQQ&usqp=CAU'
                alt='alt'
                title='title'
                height={166}
                width={166}
                className='rounded-3xl h-[166px] w-[166px] object-cover'
              />
              <Image
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwjxTZZGv_gdVKe78ilg12l10zkNmZs5oHQQ&usqp=CAU'
                alt='alt'
                title='title'
                height={166}
                width={245}
                className='rounded-3xl h-[166px] w-[245px] object-cover'
              />
            </div>
          </div>
          <div className='w-full md:w-2/3'>
            <Accordion type='single' collapsible className='w-full space-y-4'>
              <AccordionItem value='item-1'>
                <AccordionTrigger>
                  Apa saja produk unggulan yang ditawarkan oleh Harwi Gadget?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-2'>
                <AccordionTrigger>
                  Bagaimana cara melakukan pemesanan produk di Harwi Gadget?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-3'>
                <AccordionTrigger>
                  Apa kebijakan pengembalian barang di Harwi Gadget?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-4'>
                <AccordionTrigger>
                  Adakah program diskon atau penawaran spesial?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-5'>
                <AccordionTrigger>
                  Berapa lama garansi yang diberikan oleh Harwi Gadget?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section id='contact-us' className='mt-40 p-4 md:p-10 mx-8 md:container md:mx-auto border border-gray-200 bg-blue-50 rounded-2xl md:flex md:space-x-6'>
        <div className='w-full md:w-2/3'>
          <Text
            size='h1'
            weight='700'
            variant='black-2'
          >
            Hubungi Kami
          </Text>
          <Text
            size='h5'
            variant='black-2'
            weight='300'
            className='block lg:w-[612px] mt-1'
          >
            Senang bertemu dengan anda! Jika anda mempunyai pertanyaan tentang layanan kami, jangan sungkan untuk menghubungi kami.
          </Text>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-y-0 mt-[26px]'>
            <div className='flex space-x-2'>
              <div>
                <HiLocationMarker className='h-6 w-6 text-blue-500' />
              </div>
              <div>
                <Text
                  size='h5'
                  weight='700'
                  variant='black-2'
                  className='block'
                >
                  Alamat
                </Text>
                <Text
                  size='h5'
                  weight='300'
                  variant='black-2'
                  className='block'
                >
                  Jl. Melati No.9 Surabaya, Indonesia
                </Text>
              </div>
            </div>
            <div className='flex space-x-2'>
              <div>
                <HiLocationMarker className='h-6 w-6 text-blue-500' />
              </div>
              <div>
                <Text
                  size='h5'
                  weight='700'
                  variant='black-2'
                  className='block'
                >
                  Alamat
                </Text>
                <Text
                  size='h5'
                  weight='300'
                  variant='black-2'
                  className='block'
                >
                  Jl. Melati No.9 Surabaya, Indonesia
                </Text>
              </div>
            </div>
            <div className='flex space-x-2'>
              <div>
                <HiLocationMarker className='h-6 w-6 text-blue-500' />
              </div>
              <div>
                <Text
                  size='h5'
                  weight='700'
                  variant='black-2'
                  className='block'
                >
                  Alamat
                </Text>
                <Text
                  size='h5'
                  weight='300'
                  variant='black-2'
                  className='block'
                >
                  Jl. Melati No.9 Surabaya, Indonesia
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/3 mt-8 md:mt-0 flex flex-col items-center space-y-2 md:space-y-4'>
          <button
            className='bg-blue-500 rounded-lg px-6 py-3'
          >
            <div className='flex space-x-2 items-center'>
              <Image
                src='images/footer/ic-instagram.svg'
                alt='instagram'
                title='instagram'
                height={24}
                width={24}
              />
              <Text
                variant='white'
                size='h4'
                weight='700'
              >
                Hubungi Lewat Instagram
              </Text>
            </div>
          </button>
          <span className='block text-base font-light'>
            Atau
          </span>
          <button
            className='border-2 border-blue-500 rounded-lg px-6 py-3'
          >
            <div className='flex space-x-2 items-center'>
              <Image
                src='images/footer/ic-instagram.svg'
                alt='instagram'
                title='instagram'
                height={24}
                width={24}
              />
              <Text
                variant='blue'
                size='h4'
                weight='700'
              >
                Hubungi Lewat Instagram
              </Text>
            </div>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id='footer' className='mt-32 container md:mx-auto'>
        <Image
          src='next.svg'
          alt='logo'
          title='logo'
          height={21}
          width={130}
        />
        <div className='mt-6 md:mt-9 grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-y-0'>
          <div>
            <Text
              size='h4'
              variant='black-2'
              weight='700'
            >
              Information
            </Text>
            <ul className='mt-4 space-y-2 md:space-y-4'>
              <li>
                <Text
                  size='h4'
                  variant='black-2'
                  weight='300'
                  className='cursor-pointer'
                >
                  Home
                </Text>
              </li>
              <li>
                <Text
                  size='h4'
                  variant='black-2'
                  weight='300'
                  className='cursor-pointer'
                >
                  Produk
                </Text>
              </li>
              <li>
                <Text
                  size='h4'
                  variant='black-2'
                  weight='300'
                  className='cursor-pointer'
                >
                  FAQ
                </Text>
              </li>
              <li>
                <Text
                  size='h4'
                  variant='black-2'
                  weight='300'
                  className='cursor-pointer'
                >
                  Kebijakan Privasi
                </Text>
              </li>
            </ul>
          </div>
          <div>
            <Text
              size='h4'
              variant='black-2'
              weight='700'
            >
              Services
            </Text>
            <ul className='mt-4 space-y-2 md:space-y-4'>
              <li>
                <Text
                  size='h4'
                  variant='black-2'
                  weight='300'
                  className='cursor-pointer'
                >
                  Lokasi Toko
                </Text>
              </li>
              <li>
                <Text
                  size='h4'
                  variant='black-2'
                  weight='300'
                  className='cursor-pointer'
                >
                  Kebijakan Garansi
                </Text>
              </li>
              <li>
                <Text
                  size='h4'
                  variant='black-2'
                  weight='300'
                  className='cursor-pointer'
                >
                  Pembatalan Transaksi
                </Text>
              </li>
              <li>
                <Text
                  size='h4'
                  variant='black-2'
                  weight='300'
                  className='cursor-pointer'
                >
                  Hubungi Kami
                </Text>
              </li>
            </ul>
          </div>
          <div>
            <Text
              size='h4'
              variant='black-2'
              weight='700'
            >
              Bank Partner
            </Text>
            <div className='mt-4'>
              <div className='flex items-center space-x-4'>
                <Image
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png'
                  alt='bank-bca'
                  title='bank-bca'
                  height={24}
                  width={48}
                />
                <Image
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png'
                  alt='bank-bca'
                  title='bank-bca'
                  height={24}
                  width={48}
                />
                <Image
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png'
                  alt='bank-bca'
                  title='bank-bca'
                  height={24}
                  width={48}
                />
                <Image
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png'
                  alt='bank-bca'
                  title='bank-bca'
                  height={24}
                  width={48}
                />
                <Image
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png'
                  alt='bank-bca'
                  title='bank-bca'
                  height={24}
                  width={48}
                />
              </div>
              <Text
                variant='black-2'
                size='h5'
                weight='300'
                className='mt-2 block'
              >
                Terdaftar dan diawasi oleh Otoritas Jasa Keuangan dan merupakan peserta penjamin LPS
              </Text>
              <Text
                variant='black-2'
                size='h4'
                weight='700'
                className='mt-6 block'
              >
                Follow Us
              </Text>
              <div className='flex items-center space-x-2 mt-[6px]'>
                <Image
                  src='images/footer/ic-instagram.svg'
                  alt='instagram'
                  title='instagram'
                  height={24}
                  width={24}
                />
                <Image
                  src='images/footer/ic-instagram.svg'
                  alt='instagram'
                  title='instagram'
                  height={24}
                  width={24}
                />
                <Image
                  src='images/footer/ic-instagram.svg'
                  alt='instagram'
                  title='instagram'
                  height={24}
                  width={24}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-10 md:mt-16'>
          <Text
            variant='black-2'
            size='h4'
            weight='300'
            className='text-center'
          >
            Copyright 2023 Harwi Gadget. All rights reserved. Design by <span className='text-blue-500'>Cherry Pick</span>.
          </Text>
        </div>
      </footer>
    </main>
  )
}

export default Harwi

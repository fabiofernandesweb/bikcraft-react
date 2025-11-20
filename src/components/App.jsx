
import Header from './Header.jsx';
import Navigation from './Navigation.jsx';
import Link from './Link.jsx';
import List from './List.jsx';
import Item from './Item.jsx';
import Main from './Main.jsx';
import Section from './Section.jsx';
import Box from './Box.jsx';
import Heading from './Heading.jsx';
import Drawer from './Drawer.jsx';
import Paragraph from './Paragraph.jsx';
import Button from './Button.jsx';
import Image from './Image.jsx';
import Price from './Price.jsx';

const App = () => {
  return (
    <>
      <Header
        backgroundColor='bg-black'
        color='text-white'
        paddingX='px-50'
      >
        <Navigation
          display='flex'
          justify='justify-between'
          align='items-center'
          height='h-[6rem]'
        >
          <Link
            text='bikcraft'
            link='#'
            fontSize='text-5xl'
            fontWeight='font-black'
            fontCase='uppercase'
            letterSpace='tracking-[.5rem]'
          />
          <List
            display='flex'
            gap='gap-[2.5rem]'
          >
            <Item>
              <Link
                text='models'
                link='#'
                fontSize='text-lg'
                fontWeight='font-semibold'
                fontCase='uppercase'
                letterSpace='tracking-[.15rem]'
                hover='hover:text-yellow-500'
                transition='duration-[.25s]'
              />
            </Item>
            <Item>
              <Link
                text='contact'
                link='#'
                fontSize='text-lg'
                fontWeight='font-semibold'
                fontCase='uppercase'
                letterSpace='tracking-[.15rem]'
                hover='hover:text-yellow-500'
                transition='duration-[.25s]'
              />
            </Item>
            <Item>
              <Link
                text='about'
                link='#'
                fontSize='text-lg'
                fontWeight='font-semibold'
                fontCase='uppercase'
                letterSpace='tracking-[.15rem]'
                hover='hover:text-yellow-500'
                transition='duration-[.25s]'
              />
            </Item>
          </List>
        </Navigation>
      </Header>

      <Main>
        <Section
          display='flex'
          gap='gap-[2rem]'
          height='h-[37.5rem]'
          paddingX='px-50'
          backgroundColor='bg-black'
          color='text-white'
        >
          <Box
            display='flex'
            flexDirection='flex-col'
            justify='justify-center'
            gap='gap-[1.5rem]'
            width='w-[50%]'
          >
            <Heading
              fontSize='text-[3.5rem]'
              fontWeight='font-semibold'
            >
              Custom-made handcrafted bicycles<Drawer color='text-yellow-500'>.</Drawer>
            </Heading>
            <Paragraph
              text='High-precision, quality electric bicycles, custom-made for you. Explore the world at your own pace with Bikcraft.'
              fontSize='text-xl'
              color='text-gray-300'
            />
            <Button
              text='choose yours'
              width='w-fit'
              backgroundColor='bg-yellow-500'
              color='text-black'
              paddingX='px-[2rem]'
              paddingY='py-[1rem]'
              fontSize='text-lg'
              fontWeight='font-bold'
              fontCase='uppercase'
              borderRadius='rounded-sm'
              hover='hover:bg-yellow-600'
              transition='duration-[.26s]'
              cursor='cursor-pointer'
            />
          </Box>
          <Box
            width='w-[50%]'
          >
            <Image
              source='./bike.jpg'
              alternative='black bike'
              borderRadius='rounded-sm'
            />
          </Box>
        </Section>
      </Main>

      <Section
        display='block'
        paddingX='px-8'
        paddingT='pt-[3.75rem]'
        paddingB='pb-[7.5rem]'
        backgroundColor='bg-white'
        color='text-black'
      >
        <Heading
          fontSize='text-[3rem]'
          fontWeight='font-bold'
          margin='mb-[2.5rem]'
          paddingX='px-[2rem]'
          letterSpace='tracking-[.15rem]'
          paddingT='pt-[6rem]'
        >
          choose yours<Drawer color='text-yellow-500 text-6xl'>.</Drawer>
        </Heading>
        <List
          display='flex'
          gap='gap-[2.5rem]'
          borderRadius='rounded-sm'

        >

          {/* Magic Might */}
          <Item
            cursor='cursor-pointer'
            fontCase='capitalize'
          >
            <Image
              source='./magic-home.jpg'
              alternative='magic might'
              borderRadius='rounded-sm'
              margin='mb-[1rem]'
            />
            <Heading
              fontSize='text-[2rem]'
              fontWeight='font-semibold'
              marginB='mb-[2.5rem]'
              paddingX='px-[1rem]'
            >
              magic might
              <Price
                text='R$ 2499'
                fontSize='text-[1.125rem]'
                color='text-gray-500'
              />
            </Heading>
          </Item>

          {/* Nimbus Stark */}
          <Item
            cursor='cursor-pointer'
            fontCase='capitalize'
          >
            <Image
              source='./nimbus-home.jpg'
              alternative='nimbus stark'
              borderRadius='rounded-sm'
              margin='mb-[1rem]'
            />
            <Heading
              fontSize='text-[2rem]'
              fontWeight='font-semibold'
              marginB='mb-[2.5rem]'
              paddingX='px-[1rem]'
            >
              nimbus stark
              <Price
                text='R$ 4999'
                fontSize='text-[1.125rem]'
                fontWeight='font-semibold'
                color='text-gray-500'
              />
            </Heading>
          </Item>

          {/* Nebula Cosmic */}
          <Item
            cursor='cursor-pointer'
            fontCase='capitalize'
          >
            <Image
              source='./nebula-home.jpg'
              alternative='nebula cosmic'
              borderRadius='rounded-sm'
              margin='mb-[1rem]'
            />
            <Heading
              fontSize='text-[2.5rem]'
              fontWeight='font-semibold'
              marginB='mb-[2.5rem]'
              paddingX='px-[1rem]'
            >
              nebula cosmic
              <Price
                text='R$ 3999'
                fontSize='text-[1.125rem]'
                color='text-gray-500'

              />
            </Heading>
          </Item>
        </List>
      </Section>

      <Section
        display='flex'
        height='h-full'
        paddingX='px-20'
        gap='gap-[2.5rem]'
        backgroundColor='bg-black'
        color='text-white'
      >
        <Box
          display='flex'
          flexDirection='flex-col'
          justify='justify-center'
          width='w-[50%]'
        >
          <Heading
            fontSize='text-[1.5rem]'
            fontWeight='font-normal'
            fontCase='uppercase'
            color='text-gray-400'
            letterSpace='tracking-[0.15rem]'
            margin='mb-[1.25rem]'
          >
            Advanced Technology
          </Heading>
          <Heading
            fontSize='text-[3rem]'
            fontWeight='font-bold'
            fontCase='uppercase'
            color='text-white'
            letterSpace='tracking-[0.15rem]'
            margin='mb-[2rem]'
          >
            You choose your colors and components<Drawer color='text-yellow-500 text-6xl'>.</Drawer>
          </Heading>
          <Paragraph
            text='Each Bikcraft is unique and has its own identity. The measurements will be exact for your body and height, ensuring greater comfort and ergonomics while cycling. You can also completely customize its colors.'
            fontSize='text-xl'
            color='text-gray-300'
            marginB='mb-[1.25rem]'
          />
          <Link
            text='escolha um modelo'
            link='#'
            color='text-yellow-500'
            fontSize='text-[1.5rem]'
            fontWeight='font-semibold'
            fontCase='uppercase'
            letterSpace='tracking-[.15rem]'
            margin='mb-[5rem]'
            hover='hover:text-white'
            transition='duration-[.25s]'
            cursor='cursor-pointer'
            underline='underline underline-offset-8'
          />
          <Box
            display='flex'
            gap='gap-[2.5rem]'

          >
            <Item
              width='w-[50%]'
              list='list-none'
            >
              <Image
                source='./eletrica.svg'
                alternative='eletrica'
                width='w-[1.5rem]'
                margin='mb-[0.5rem]'
              />
              <Heading
                fontSize='text-[1.125rem]'
                fontWeight='font-semibold'
                fontCase='capitalize'
                margin='mb-[0.5rem]'

              >
                motor elétrico
              </Heading>
              <Paragraph
                text='Every Bikcraft is equipped with an electric motor that lasts up to 120 hours. The battery is recharged using the energy you expend while pedaling.'
                fontSize='text-[1rem]'
                color='text-gray-300'
                marginB='mb-[1.25rem]'
              />
            </Item>
            <Item
              width='w-[50%]'
              list='list-none'
            >
              <Image
                source='./rastreador.svg'
                alternative='rastreador'
                width='w-[1.5rem]'
                margin='mb-[0.5rem]'
              />
              <Heading
                fontSize='text-[1.125rem]'
                fontWeight='font-semibold'
                fontCase='capitalize'
                margin='mb-[0.5rem]'
              >
                rastreador
              </Heading>
              <Paragraph
                text='We know how precious your Bikcraft is, so weve added trackers and anti-theft systems to ensure your peace of mind.'
                fontSize='text-[1rem]'
                color='text-gray-300'
                marginB='mb-[1.25rem]'
              />
            </Item>
          </Box>
        </Box>
        <Box
          width='w-[50%]'
        >
          <Image
            source='./tecnologia.jpg'
            alternative='itens bike'
            borderRadius='rounded-sm'
          />
        </Box>
      </Section>

      <Section
        display='flex'
        paddingX='px-8'
        paddingT='pt-[3.75rem]'
        paddingB='pb-[7.5rem]'
        backgroundColor='bg-white'
        color='text-black'
      >
        <Heading
          fontSize='text-[3.5rem]'
          fontWeight='font-bold'
          margin='mb-[3.75rem]'
          paddingX='px-[2rem]'
          letterSpace='tracking-[.15rem]'
          paddingT='pt-[6rem]'
        >
          nossos parceiros<Drawer color='text-yellow-500 text-5xl'>.</Drawer>
        </Heading>
      </Section >
    </>
  );
}

export default App;

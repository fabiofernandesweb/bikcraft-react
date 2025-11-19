
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
            />
          </Box>
        </Section>
      </Main>

      <Section
        display='block'
        paddingX='px-20'
        paddingT='pt-[3.75rem]'
        paddingB='pb-[7.5rem]'
        backgroundColor='bg-white'
        color='text-black'
      >
        <Heading
          fontSize='text-[3rem]'
          fontWeight='font-bold'
          margin='mb-[2.5rem]'
        >
          choose yours<Drawer color='text-yellow-500'>.</Drawer>
        </Heading>
        <List
            display='flex'
            gap='gap-[2.5rem]'
            borderRadius='rounded-sm'
          >
            <Item>
              <Image
              source='./magic-home.jpg'
              alternative='magic might'
              cursor='cursor-pointer'
              borderRadius='rounded-sm'
            />
            </Item>
            <Item>
              <Image
              source='./nimbus-home.jpg'
              alternative='nimbus stark'
              cursor='cursor-pointer'
              borderRadius='rounded-sm'
            />
            </Item>
            <Item>
              <Image
              source='./nebula-home.jpg'
              alternative='nebula cosmic'
              cursor='cursor-pointer'
              borderRadius='rounded-sm'
            />
            </Item>
          </List>
      </Section>
    </>
  );
}

export default App;

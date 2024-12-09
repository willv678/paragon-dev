import Section from "@/components/Section";
import { Subheading, Text } from '@/components/Typography';
import Image from "next/image";
import Carousel from '@/components/Carousel';
import Footer, { FooterLink, FooterSection } from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import TopBar from '@/components/TopBar';
import {governments} from './constants';
import DynamicGrid from '@/components/DynamicGrid';
import GrayDivider from '@/components/GrayDivider';
import Testimonials from '@/components/Testimonials';
import TickText from '@/components/TickText';

const govLogos = Object.values(governments).map(government => government.logo);

export default function Home() {

  return (
    <>
      <TopBar />
      <div className="background-container">
        <DynamicGrid />
        <HeroSection />
      </div>
      <Section className='overflow-y-hidden'>
        <Text className='text-black text-4xl'>Paragon is a national organization that connects <span className="font-semibold">university students and new grads</span> opportunities to work on science and tech policy issues at <span className="font-semibold">state and local level.</span> </Text>
        <br/>
        <br/>
        <Text className='text-2xl text-black font-light max-w-[65%] ml-auto'>Paragon is supported by the <a href="https://pitcases.org/2024-network-challenge-grantee-reveal/" className="underline">2024 PIT-UN Network Challenge</a>, an annual grant program to seed projects within public interest technology, the <a href="https://www.rtyouthpower.org" className="underline">Responsible Tech Youth Power Fund</a>, and the <a href="https://fas.org" className="underline">Federation of American Scientists</a>, a policy research and advocacy organization, through fiscal sponsorship.</Text>
      </Section>
      <Section className='overflow-y-hidden'>
        <Subheading>Our Reach</Subheading>
        <GrayDivider />
        <div className="flex justify-between items-start w-full py-16">
          <div className="flex flex-col items-start">
            <TickText text={86} className="text-7xl font-bold text-black" />
            <p className="text-xl text-black">
              <span className="font-bold">fellows</span> placed on{" "}
              <span className="font-bold">13 projects</span> from{" "}
              <span className="font-bold">75+</span> colleges and universities nationally
            </p>
          </div>
          <div className="flex flex-col items-start px-60">
            <TickText text={60} suffix="%" className="text-7xl font-bold text-black text-align text-center" />
            <p className="text-xl text-black">
              identify as <span className="font-bold">underrepresented</span> in
              technology and policy
            </p>
          </div>
          <div className="flex flex-col items-start">
            <TickText text={15} className="text-7xl font-bold text-black" />
            <p className="text-xl text-black">
              established partnerships with state and local governments across{" "}
              <span className="font-bold">10 states</span>
            </p>
          </div>
        </div>
      </Section>
      <Section className='overflow-y-hidden'>
        <Subheading>Our Program</Subheading>
        <GrayDivider/>
        <Text>Paragon functions as a matchmaking program: we work with state and local governments to identify a pressing science/tech policy issue and recruit 5-8 undergraduate and graduate fellows from the same region to work with the partner government on this issue.</Text>
        <div className="flex justify-between items-start w-full py-16">
        <div className="flex flex-col items-start max-w-[30%]">
          <p className="text-xl font-semibold text-gray-500 mb-5">Talent Pipeline</p>
          <p className="text-lg font-light text-black">
            Fellows contribute 5-10 hours per week for ten weeks to the project; this
            provides a similar time commitment to a college course while building
            early-career policy experience that prepares them to join the public
            service workforce.
          </p>
        </div>
        <div className="flex flex-col items-start max-w-[30%] px-8">
          <p className="text-xl font-semibold text-gray-500 mb-5">Field Exposure</p>
          <p className="text-lg font-light text-black">
            Introduce fellows to a diverse cohort of leaders in the technology policy
            space from the public and private sectors and at all levels of
            government.
          </p>
        </div>
        <div className="flex flex-col items-start max-w-[30%]">
          <p className="text-xl font-semibold text-gray-500 mb-5">Hands-On Training</p>
          <p className="text-lg font-light text-black">
            We offer policy workshops and bootcamps instructed by experienced policy
            researchers, along with mentorship, professional development sessions,
            and career advice.
          </p>
        </div>
      </div>
      </Section>
      <Section className='overflow-y-hidden'>
        <Subheading>Testimonials</Subheading>
        <GrayDivider/>
        <Testimonials/>
      </Section>

      <Section className='overflow-y-hidden'>
        <Subheading>Our Partners</Subheading>
        <GrayDivider/>
        <Carousel className='mt-10' speed={0.5}>
          {
            govLogos.map((logo, index) => (
              <Image key={index} src={logo} alt="Logo" className='h-full md:mr-14 mr-10 md:w-32 w-24 object-contain' />
            ))
          }
        </Carousel>
      </Section>
      <Footer>
        <FooterSection title='Our Organization'>
          <FooterLink href='/team'>Team Directory</FooterLink>
          <FooterLink href='mailto:paragonfellowship@gmail.com'>Contact Us</FooterLink>
          <FooterLink href='/#faqs'>FAQs</FooterLink>
        </FooterSection>
      </Footer>
    </>
  );
}

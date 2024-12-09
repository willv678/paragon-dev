import Button from '@/components/Button';
import Footer, { FooterLink, FooterSection } from '@/components/Footer';
import Section from "@/components/Section";
import TopBar from '@/components/TopBar';
import {Subheading, Text } from '@/components/Typography';
import BgGrid from '@/components/BgGrid';
import { RiArrowDownLine } from 'react-icons/ri';
import GrayDivider from '@/components/GrayDivider';
import FAQuestion from '@/components/FAQuestion';
import Timeline from '@/components/Timeline';
import Navbar from '@/components/Navbar';
import {FA_APP_URL} from '@/app/constants';

const sections = [
  { id: "expectations", title: "01 PROJECT EXPECTATIONS" },
  { id: "eligibility", title: "02 ELIGIBILITY" },
  { id: "process", title: "03 APP PROCESS" },
  { id: "timeline", title: "04 TIMELINE" },
  { id: "dates", title: "05 IMPORTANT DATES" },
  { id: "faq", title: "06 FAQ" },
];

const events = [
  {
    date: "March 8–9",
    title: "Policy Bootcamp",
    description: "",
  },
  {
    date: "March 26 – April 8",
    title: "Check-ins & Midpoint Review with Paragon Team",
    description: "",
  },
  {
    date: "Week of April 15",
    title: "Midpoint Presentation",
    description: "",
  },
  {
    date: "Week of June 2",
    title: "Final Policy Brief Presentation",
    description: "",
  },
  {
    date: "June 8 or 9",
    title: "Final Cohort Presentation & Wrap-Up",
    description: "",
  },
  {
    date: "June 10",
    title: "Cohort End",
    description: "",
  },
];

export default function About() {
  return (
    <>
      <TopBar />
      <div className="background-container">
        <BgGrid/>
        <Text className='fade-in pt-[20%] pl-[12%] text-3xl max-w-[50%]'>Paragon offers semester-based tech policy projects (fall and spring) for <span className='font-semibold'>university students and new grads</span> to work at <span className='font-semibold'>state and local level.</span></Text>
        <Text className='fade-in text-right text-3xl ml-auto mr-20 max-w-[30%] mt-[5%] mb-5'>Applications for the Spring 2025 cohort are now open.</Text>
        <div className="flex justify-end pr-[6%]">
          <Button className="fade-in" style= "secondary" inNewTab url={FA_APP_URL}>apply now</Button>
        </div>
        
        <div className="animate-bounce absolute md:bottom-[8vh] bottom-[7svh] left-0 z-10 w-full flex justify-center text-4xl"><RiArrowDownLine /></div>
        <div className='absolute -bottom-1 left-0 w-full h-[20%] bg-gradient-to-b from-transparent to-dark' />
        <div className='absolute top-0 left-0 w-full h-full bg-[#050022] bg-opacity-65 -z-10' />
      </div>
      <Section>
        <Navbar sections={sections} />
      </Section>
      <Section id="expectations">
        <Subheading className='text-5xl'>01 Project Expectations</Subheading>
        <GrayDivider />
        <Text>The Paragon Policy Fellowship connects students and recent graduates with opportunities in the science and tech policy space. Fellows will spend around 5-10 hours a week researching and writing a policy brief on key issues for their state and local governments, with topics ranging from broadband infrastructure, renewable energy, to AI procurement. The fellowship is a hands-on, project-based experience, designed to introduce students to the tech policy landscape and grow their network and impact through local community engagement. </Text>
        <br></br>
        <Text className='font-semibold'>Fellows in good standing will be compensated with a $500 stipend.</Text>
      </Section>

      <Section id="eligibility">
        <Subheading className='text-5xl'>02 Eligibility</Subheading>
        <GrayDivider />  
        <Text>This fellowship is an entry-level opportunity geared towards undergraduate/graduate students and recent graduates based in the U.S. interested in entering the tech policy space. As such, we are not expecting applicants to have extensive experience in tech policy and will be evaluating applications based on demonstrated interest in the tech policy sphere (whether it be through relevant coursework, extracurricular activities, or other lived experiences). We enthusiastically welcome applications from those with underrepresented backgrounds and are open to accepting applicants with a wide range of educational backgrounds (ie., not restricted to any specific major).</Text>
        <Text className='text-gray font-normal text-3xl pt-10 pb-5'>Minimum Qualifications</Text>
        <ul className='list-disc list-inside text-xl'>
          <li>Currently enrolled students (including undergraduate and graduate students) or recent graduates (graduated from a degree program within the last year)</li>
          <li>Ability to consistently commit ~10 hours of honest, focused work per week</li>
          <li>Ability to consistently e-meet with teammates 1-2 times per week and complete work asynchronously</li>
          <li>Must reside in the United States during the fellowship</li>
          <li>Own a US-based bank account</li>
        </ul>
        <Text className='pt-10'>We currently offer two tracks – one for project leads and one for fellows. </Text>
        <Text className='text-gray font-normal text-3xl pt-10 pb-5'>Track 1- Project Leads</Text>
        <Text>We are seeking project leads with prior managerial or policy experience. Project leads serve as key liaisons between the project teams and government partners, facilitating communication and cooperation to ensure the alignment of project goals and government expectations. Leads will work closely with the government partners and the organizing team to provide support and direction to the team of fellows. Past candidates have shown a strong ability to steer the project&apos;s direction and navigate ambiguity. </Text>
        <Text className='text-gray font-normal text-3xl pt-10 pb-5'>Track 2 - Fellows</Text>
        <Text>For the initial application, the essays are the most important component. While previous experiences and education will help round out an application, we care the most about a potential fellow’s passion and interest in the tech policy/public service space.</Text>
      </Section>
      <Section id="process">
        <Subheading>03 APPLICATION PROCESS</Subheading>
        <GrayDivider/>
        <Text>Following the initial application round, we will select a group of finalists to interview in a group setting. At this stage, students will be organized into teams of 5-8 and tasked to complete a policy assignment over the course of one week. From there, we will select fellows based on their demonstrated effort, engagement with the rest of the team, and ability to collaborate asynchronously. We will select project leads based on their leadership qualities, problem-solving ability, and effectiveness in organizing and managing projects.</Text>
        <br></br>
        <Text>If you are only applying to a fellow position, we do NOT expect you to have any policy expertise and will not evaluate your fit based on the deliverable. Instead, we will focus on how you approach this assignment and work as a team. If you are applying to be a project lead, we will be particularly interested in how you navigate challenges and motivate team members to complete the project.</Text>
      </Section>
      <Section id="timeline">
        <Subheading>04 TIMELINE</Subheading>
        <GrayDivider/>
        <Text>Below is a timeline example from the spring 2024 cohort.</Text>
        <Timeline events={events} />
      </Section>
      <Section id="dates">
        <Subheading>05 Important Dates</Subheading>
        <GrayDivider/>
        <Text>
          We offer semester-based tech policy projects twice a year – once in the fall and once in the spring. The fall fellowship will be expected to run from late August to early December and the spring fellowship will be expected to run from late January to early May. Apps for each cohort will be expected to open 1-2 months in advance.
        </Text>
        <br></br>
        <Text>
          Apps are now open for the spring 2025 cohort. The spring 2025 fellowship will run from <span className="font-semibold underline">January 22 to May 1, 2025</span>.
        </Text>
        <br></br>
        <Text>
          Apps for the fall 2026 cohort will be expected to open at a later date. Join our <a href="mailto:paragonfellowship@gmail.com" className="underline">mailing list</a> to be notified when apps open.
        </Text>
      </Section>
      <Section id="faq">
        <Subheading>06 FAQ</Subheading>
        <GrayDivider/>
        <div>
        <FAQuestion
          question="What are the expectations for government partners?"
          answer="a. We ask that government partners be responsive over email and meet with the Paragon group once every two weeks. Government partners will also be asked to give feedback during a midpoint presentation and a final presentation. Partners are generally responsible for guiding the overall direction of the research."
        />
        <FAQuestion
          question="What can you expect to receive at the end?"
          answer="a. Governments can expect a research or policy brief at the end of the program."
        />
        <FAQuestion
          question="Will students be compensated for the project?"
          answer="a. Government partners will not need to compensate students. Students are supported by philanthropic grants via our sponsors at PIT UN and Responsible Youth Tech Power Fund."
        />
        <FAQuestion
          question="How are projects scoped?"
          answer="a. Project proposals are brought by government partners according to their specific needs and refined in conjunction with the partnerships team. Our partnerships team works with you over the course of a few virtual meetings to understand your needs."
        />
        <FAQuestion
          question="How long do the projects run?"
          answer="a. Projects run for about 3 months each. However, government partners with longer term needs can explore recurring projects over the course of multiple cohorts."
        />
        <FAQuestion
          question="How many fellows typically work on a project?"
          answer="a. Each project is supported by a dedicated team of 6-9 students from your area."
        />
        </div>
      </Section>
      <Section>
        <Subheading className='flex justify-center text-center'>Ready to see what Paragon<br />can do for you?</Subheading>
        <div className='flex justify-center'>
          <Button url={FA_APP_URL} className='mt-4 justify-center'>Apply Now</Button>
        </div>

      </Section>


      <Footer>
        <FooterSection title='Our Organization'>
          <FooterLink href={FA_APP_URL}>Apply Now</FooterLink>
          <FooterLink href='/team'>Team Directory</FooterLink>
          <FooterLink href='mailto:paragonfellowship@gmail.com'>Contact Us</FooterLink>
          <FooterLink href='/governments#faq'>FAQs</FooterLink>
        </FooterSection>
      </Footer>

    </>
  );
}

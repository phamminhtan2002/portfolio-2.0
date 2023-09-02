import { motion } from 'framer-motion'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { useSectionInView } from '../lib/hooks'
import { styles } from '../styles'
import { textVariant } from '../utils/motion'

type Props = {
  title: string
  date: string
  icon: string
  iconBg: string
  company_name: string
  points: string[]
}

const ExperienceCard = ({ experience }: { experience: Props }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[64%] h-[64%] object-contain'
          />
        </div>
      }>
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p className='text-secondary text-[16px] font-semibold !m-0'>
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point: string, index: number) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  const { ref } = useSectionInView('work', 0.25)
  return (
    <div ref={ref}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default SectionWrapper({ Component: Experience, idName: 'work' })

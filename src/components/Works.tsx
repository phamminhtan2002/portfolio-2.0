import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import { github } from '../assets'
import { projects } from '../constants'
import { SectionWrapper } from '../hoc'
import { useSectionInView } from '../lib/hooks'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'

type Props = {
  index: number
  name: string
  description: string
  tags: { name: string; color: string }[]
  image: string
  source_code_link: string
}

const style = {
  content__con: `mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]`,
  link__con: `absolute inset-0 flex justify-end m-3 card-img_hover`,
  link: `black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer active:scale-95 transition-transform ease-in`,
}

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}: Props) => {
  return (
    <motion.div
      variants={fadeIn({
        direction: 'up',
        type: 'spring',
        delay: index * 0.5, //comming up 1 by 1
        duration: 0.75,
      })}
    >
      <Tilt
        tiltMaxAngleX={34}
        tiltMaxAngleY={34}
        scale={1.04}
        transitionSpeed={450}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className={style.link__con}>
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className={style.link}
            >
              <img
                src={github}
                alt='github'
                className='w-full h-full object-contain opacity-40 hover:opacity-100 animate-pulse'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px] h-[84px] overflow-y-auto overflow-x-hidden'>
            {description}
          </p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  const { ref } = useSectionInView('projects', 0.25)
  return (
      <div ref={ref}>
          <motion.div variants={textVariant()}>
              <p className={styles.sectionSubText}>My work</p>
              <h2 className={styles.sectionHeadText}>Projects.</h2>
          </motion.div>
          <div className='w-full flex'>
              <motion.p
                  variants={fadeIn({
                      direction: '',
                      type: '',
                      delay: 0.1,
                      duration: 1,
                  })}
                  className={style.content__con}
              >
                  These projects showcase my skills and experiences through
                  real-world examples of my work. Each project is briefly
                  described with a link to the code repository and live demos in
                  it. It reflects my ability to solve complex problems, work
                  with different technologies, and manage projects efficiently.
              </motion.p>
          </div>
          <div className='mt-20 flex flex-wrap gap-7'>
              {projects.map((project, index) => (
                  <ProjectCard
                      key={`project-${index}`}
                      index={index}
                      {...project}
                  />
              ))}
          </div>
      </div>
  )
}

export default SectionWrapper({ Component: Works, idName: 'projects' })

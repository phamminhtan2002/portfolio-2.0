import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { useSectionInView } from '../lib/hooks';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

type ServiceCardProps = {
  index: number
  title: string
  icon: string
}

const style = {
  bio: `mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]`,
  card__border: `w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card`,
  card__con: `bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col`,
}

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <Tilt
      scale={1.064}
      tiltMaxAngleX={34}
      tiltMaxAngleY={34}
      transitionSpeed={450}
      className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn({
          direction: 'right',
          type: 'spring',
          delay: 0.5 * index,
          duration: 0.75,
        })}
        className={style.card__border}>
        <div className={style.card__con}>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  const { ref } = useSectionInView('about')

  return (
      <div ref={ref}>
          <motion.div variants={textVariant()}>
              <p className={styles.sectionSubText}>Introduction</p>
              <h2 className={styles.sectionHeadText}>Overview.</h2>
          </motion.div>

          <motion.p
              variants={fadeIn({
                  direction: '',
                  type: '',
                  delay: 0.1,
                  duration: 1,
              })}
              className={style.bio}
          >
              Hi, I&apos;m Tan Minh Pham, a Full Stack Developer with a passion
              for building beautiful and user-friendly websites. I have a solid
              grasp of both front-end and back-end development, along with
              experience in application deployment and scaling. I&apos;m excited
              to bring my skills to a professional setting. I&apos;m a quick
              learner and a team player, and I believe I can be a valuable
              addition to any web development team.
          </motion.p>

          <div className='mt-20 flex flex-wrap gap-10'>
              {services.map((service, index) => (
                  <ServiceCard key={service.title} index={index} {...service} />
              ))}
          </div>
      </div>
  )
}

export default SectionWrapper({ Component: About, idName: 'about' });

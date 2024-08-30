import { motion } from 'framer-motion'
import { testimonials } from '../constants'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'

type Props = {
    index: number
    testimonials: string[]
    name: string
    date: string
    image: string
}

const style = {
    content: `${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7 hover:scale-[1.01] active:scale-95 lg:active:scale-100 transition-transform ease-linear group`,
}

const CertificateCard = ({ index, testimonials, name, date, image }: Props) => {
    const handleClick = () => {
        window.open(
            'https://www.coursera.org/account/accomplishments/professional-cert/HMFSCW2N5YUM',
            '_blank'
        )
    }

    return (
        <motion.div
            variants={fadeIn({
                direction: '',
                type: 'spring',
                delay: index * 0.5,
                duration: 0.75,
            })}
            onClick={handleClick}
            className='bg-black-200 p-10 rounded-3xl cursor-pointer border border-transparent group-hover:border-white transition-colors ease-linear'
        >
            <p className='text-white group-hover:text-blue-600 transition-colors font-black text-[34px]'>
                Meta Database Engineer Professional Certificate
            </p>
            <div className='mt-1'>
                <ul className='text-white tracking-wider text-[16px] list-disc mt-5 ml-5 space-y-2'>
                    {testimonials.map((testimonial: string, index: number) => (
                        <li key={index}>{testimonial}</li>
                    ))}
                </ul>
                <div className='mt-7 flex justify-between items-center gap-1'>
                    <div className='flex-1 flex flex-col'>
                        <p className='text-white font-medium text-[16px]'>
                            <span className='blue-text-gradient'>@</span> {name}
                        </p>
                        <p className='mt-1 text-secondary text-[12px]'>
                            {date}
                        </p>
                    </div>

                    <img
                        src={image}
                        alt={`Certificate ${name}`}
                        className='w-10 h-10 rounded-full object-cover'
                    />
                </div>
            </div>
        </motion.div>
    )
}

const Certificates = () => {
    return (
        <div className='mt-12 bg-black-100 rounded-[20px]'>
            <div
                className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
            >
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>My Achievement</p>
                    <h2 className={styles.sectionHeadText}>Certificate.</h2>
                </motion.div>
            </div>

            <div className={style.content}>
                {testimonials.map((testimonial, index) => (
                    <CertificateCard
                        key={testimonial.name}
                        index={index}
                        {...testimonial}
                    />
                ))}
            </div>
        </div>
    )
}

const wrapper = SectionWrapper({ Component: Certificates, idName: '' })

export default wrapper

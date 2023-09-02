import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react'
import { SectionWrapper } from '../hoc'
import { useSectionInView } from '../lib/hooks'
import { styles } from '../styles'
import { slideIn } from '../utils/motion'
import { EarthCanvas } from './canvas'

const style = {
  wrapper: `xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden`,
  input: `bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium`,
  btn: `bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl`,
}

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [form, setForm] = useState({ name: '', subject: '', message: '' })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    window.open(
      `mailto:tanphamminh2002@gmail.com?subject=${form.subject} - From ${form.name}&body=${form.message}`,
      '_blank'
    )
  }

  const { ref } = useSectionInView('contact')

  return (
    <div className={style.wrapper} ref={ref}>
      <motion.div
        variants={slideIn({
          direction: 'left',
          type: 'tween',
          delay: 0.2,
          duration: 1,
        })}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className={style.input}
              autoComplete='off'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Subject</span>
            <input
              type='text'
              name='subject'
              value={form.subject}
              onChange={handleChange}
              placeholder='Title of your message'
              className={style.input}
              autoComplete='off'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What do you want to say?'
              className={style.input}
              autoComplete='off'
            />
          </label>

          <button type='submit' className={style.btn}>
            Send
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn({
          direction: 'right',
          type: 'tween',
          delay: 0.2,
          duration: 1,
        })}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper({ Component: Contact, idName: 'contact' });

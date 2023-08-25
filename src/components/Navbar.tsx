import { useState } from 'react';
import { ImGithub } from 'react-icons/im'
import { IoDocumentText } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'
import { styles } from '../styles'

const style = {
  wrapper: `${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`,
  content: `w-full flex justify-between items-center max-w-7xl mx-auto`,
  logo: `w-9 h-9 object-contain`,
  name: `text-white text-[18px] font-bold cursor-pointer`,
  list: `list-none hidden lg:flex flex-row gap-10`,
  list__content: `hover:text-white text-[18px] font-medium cursor-pointer`,
  mobile: `sm:hidden flex flex-1 justify-end items-center`,
  mobile__con: `p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`,
  mobile__list: `list-none flex justify-end items-start flex-col gap-4`,
  mobile__list__content: `font-poppins font-medium cursor-pointer text-[16px]`,
  icon: `text-[24px] text-secondary cursor-pointer hover:text-white`,
}

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <nav className={style.wrapper}>
      <div className={style.content}>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}>
          <img src={logo} alt='logo' className={style.logo} />
          <p className={style.name}>
            Garen Pham{' '}
            <span className='sm:inline-block hidden'>| Portfolio</span>
          </p>
        </Link>

        <ul className={style.list}>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-white' : 'text-secondary'
              } ${style.list__content}`}
              onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='hidden lg:flex items-center gap-10'>
          <Link
            to='https://github.com/garenpham/'
            target='_blank'
            className={style.icon}>
            <ImGithub />
          </Link>
          <Link
            to='https://drive.google.com/file/d/1SaJNu99xH6RjqwC-NfP7_Qrj-5_fXZtP/view?usp=sharing'
            target='_blank'
            className={style.icon}>
            <IoDocumentText />
          </Link>
        </div>

        <div className={style.mobile}>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${toggle ? 'flex' : 'hidden'} ${style.mobile__con}`}>
            <ul className={`${style.mobile__list} flex`}>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? 'text-white' : 'text-secondary'
                  } ${style.mobile__list__content}`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(nav.title)
                  }}>
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li className='flex items-center gap-[10px]'>
                <Link
                  to='https://github.com/garenpham/'
                  target='_blank'
                  className={style.icon}>
                  <ImGithub />
                </Link>
                <Link
                  to='https://drive.google.com/file/d/1SaJNu99xH6RjqwC-NfP7_Qrj-5_fXZtP/view?usp=sharing'
                  target='_blank'
                  className={style.icon}>
                  <IoDocumentText />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;

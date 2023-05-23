import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const style = {
	wrapper: `${styles.paddingX} xl:px-0 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`,
	wrapper2: `flex flex-col justify-center items-center mt-5`,
	dot: `w-5 h-5 rounded-full bg-[#915eff]`,
	line: `w-1 sm:h-80 h-40 violet-gradient`,
	scroll: `absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center`,
	scroll__icon: `w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2`,
};

const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto">
			<div className={style.wrapper}>
				<div className={style.wrapper2}>
					<div className={style.dot} />
					<div className={style.line} />
				</div>

				<div>
					<h1 className={`${styles.heroHeadText} text-white`}>
						Hi, I'm <span className="text-[#915eff]">Garen</span>
					</h1>
					<p className={`${styles.heroSubText} mt-2 text-white-100`}>
						I develop web applications
						<br className="sm:block hidden" />
						and cloud infrastructure
					</p>
				</div>
			</div>
			<ComputersCanvas />

			<div className={style.scroll}>
				<a href="#about">
					<div className={style.scroll__icon}>
						<motion.div
							animate={{ y: [0, 24, 0] }}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: 'loop',
							}}
							className="w-3 h-3 rounded-full bg-secondary mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;

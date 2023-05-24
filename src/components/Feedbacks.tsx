import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';

type Props = {
	index: number;
	testimonials: string[];
	name: string;
	date: string;
	image: string;
};

const style = {
	content: `${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`,
};

const FeedbackCard = ({ index, testimonials, name, date, image }: Props) => {
	const handleClick = () => {
		window.open(
			'https://www.coursera.org/account/accomplishments/professional-cert/HMFSCW2N5YUM',
			'_blank',
		);
	};

	return (
		<motion.div
			variants={fadeIn({
				direction: '',
				type: 'spring',
				delay: index * 0.5,
				duration: 0.75,
			})}
			onClick={handleClick}
			className="bg-black-200 p-10 rounded-3xl cursor-pointer">
			<p className="text-white font-black text-[34px]">
				Meta Database Engineer Professional Certificate
			</p>
			<div className="mt-1">
				<ul className="text-white tracking-wider text-[16px] list-disc mt-5 ml-5 space-y-2">
					{testimonials.map((testimonial: string, index: number) => (
						<li key={index}>{testimonial}</li>
					))}
				</ul>
				<div className="mt-7 flex justify-between items-center gap-1">
					<div className="flex-1 flex flex-col">
						<p className="text-white font-medium text-[16px]">
							<span className="blue-text-gradient">@</span> {name}
						</p>
						<p className="mt-1 text-secondary text-[12px]">{date}</p>
					</div>

					<img
						src={image}
						alt={`feedback by ${name}`}
						className="w-10 h-10 rounded-full object-cover"
					/>
				</div>
			</div>
		</motion.div>
	);
};

const Feedbacks = () => {
	return (
		<div className="mt-12 bg-black-100 rounded-[20px]">
			<div
				className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
				<motion.div variants={textVariant()}>
					<p className={styles.sectionSubText}>My Achievement</p>
					<h2 className={styles.sectionHeadText}>Certification.</h2>
				</motion.div>
			</div>

			<div className={style.content}>
				{testimonials.map((testimonial, index) => (
					<FeedbackCard
						key={testimonial.name}
						index={index}
						{...testimonial}
					/>
				))}
			</div>
		</div>
	);
};

export default SectionWrapper({ Component: Feedbacks, idName: '' });

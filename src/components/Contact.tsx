import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

type Props = {};

const Contact = (props: Props) => {
	const formRef = useRef();
	const [form, setForm] = useState({ name: '', email: '', message: '' });
	const [loading, setLoading] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};

	return <div>Contact</div>;
};

export default SectionWrapper({ Component: Contact, idName: 'contact' });

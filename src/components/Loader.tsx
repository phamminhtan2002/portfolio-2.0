import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
	const { progress } = useProgress();

	return (
		<Html>
			<span className="canvas-load">
				<p className="text-[14px] sm:text-[20px] text-[#f1f1f1] font-[800] mt-40">
					{progress.toFixed(2)}%
				</p>
			</span>
		</Html>
	);
};

export default Loader;

// import packages below
import { default as NextHead } from 'next/head';

interface Props {
	title: string;
}

const Head = (props: Props) => {
	// destructure props
	const { title } = props;

	return (
		<NextHead>
			<title>{title}</title>
		</NextHead>
	);
};

export default Head;

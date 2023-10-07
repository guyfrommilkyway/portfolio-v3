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
			<meta charSet='utf-8' />
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<meta name='author' content='Almer Tampus' />
			<meta
				name='description'
				content="Hi, I'm Almer Tampus. A highly proactive agile software developer with a strong track record of over a year focusing on front-end development. Proficient in crafting user-facing features by leveraging a diverse array of frameworks and libraries. Passionate about channeling my skills towards creating engaging and interactive web solutions. Committed to continuous development, I actively pursue various avenues of learning to continually expand my expertise and adapt to the ever-evolving landscape of the IT industry."
			/>
			<meta
				name='keywords'
				content='Almer Tampus, Almer Flores Tampus, Agile Developer, Agile Software Developer, Frontend developer, Front End Developer, Front-end developer, JavaScript developer, React developer, personal site, portfolio site'
			/>
			<title>{title}</title>
		</NextHead>
	);
};

export default Head;

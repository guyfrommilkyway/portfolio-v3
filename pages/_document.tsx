import { Html, Head, Main, NextScript } from 'next/document';
import { Analytics } from '@vercel/analytics/react';

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, intitial-scale=1.0' />
				<meta name='author' content='Almer Tampus' />
				<meta
					name='description'
					content="Hi, I'm Almer Tampus. Experienced front-end developer with a track record of over a year, adept at crafting engaging user-facing features utilizing React, Next.js, Redux, Chakra UI and Tailwind. Proficient in applying cutting-edge industry practices, optimization strategies, design patterns and clean code principles. Enthusiastic about harnessing my proficiency to create interactive web solutions that resonate with discerning businesses. Looking ahead, my goal is to evolve into a full stack developer, expanding my proficiency across the entire web development stack."
				/>
				<meta
					name='keywords'
					content='Almer Tampus, Almer Flores Tampus, Frontend developer, Front End Developer, Front-end developer, JavaScript developer, React developer, personal site, portfolio site'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
				<Analytics />
			</body>
		</Html>
	);
}

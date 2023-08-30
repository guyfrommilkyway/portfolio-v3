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
      <meta name='viewport' content='width=device-width, intitial-scale=1.0' />
      <meta name="author" content="Almer Tampus" />
      <meta name="description" content="Hi, I'm Almer Tampus. Experienced front-end developer with a track record of over a year, adept at crafting engaging user-facing features utilizing React, Next.js, Redux, Chakra UI and Tailwind. Proficient in applying cutting-edge industry practices, optimization strategies, design patterns and clean code principles. Enthusiastic about harnessing my proficiency to create interactive web solutions that resonate with discerning businesses. Looking ahead, my goal is to evolve into a full stack developer, expanding my proficiency across the entire web development stack." />
      <meta name="keywords" content="Almer Tampus, Almer Flores Tampus, Frontend developer, Front End Developer, Front-end developer, JavaScript developer, React developer, personal site, portfolio site" />
      <title>{title}</title>
    </NextHead>
  )
}

export default Head;
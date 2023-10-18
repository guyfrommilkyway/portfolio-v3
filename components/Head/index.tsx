// packages
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

      {/* Open Graph Meta Tags */}
      <meta property='og:title' content='Almer Tampus' />
      <meta
        property='og:description'
        content="I'm an agile software developer with over a year of professional experience, specializing in front-end web development. My expertise lies in building web applications using a versatile tech stack. I'm proficient in JavaScript and TypeScript, and excels in harnessing the power of modern frameworks and libraries, such as React, Next.js, Redux, Zustand, and CSS frameworks like Tailwind and Chakra UI. In my most recent role, I had the privilege of working at Seaplane Group, a Hong Kong-based startup. Here, I assumed full ownership of the maintenance and development of two crucial company projects, further honing my skills and expertise in front-end web development. This experience allowed me to drive projects from conception to successful completion, and I consistently strives to exceed project goals and expectations. Before my tenure at Seaplane Group, I had the pleasure of being part of the Highly Succeed Inc. team, a Philippine-based company specializing in a wide range of IT services. During my time with Highly Succeed, I actively participated in the co-development of a total of eight web applications, catering to both private and government clients. This exposure to diverse projects allowed me to gain invaluable insights into various industries and client needs while developing a strong collaborative spirit. These experiences have not only enriched my technical skills but have also honed my ability to adapt to different work environments and the distinct needs of clients across different regions. My dedication to delivering innovative and top-tier web solutions remains a constant driving force in my career."
      />
      <meta
        property='og:image'
        content={`${process.env.NEXT_PUBLIC_URL}_next/image?url=%2Fimages%2Fme.jpg&w=1920&q=75`}
      />
      <meta property='og:image:alt' content='Almer Tampus' />
      <meta property='og:url' content={process.env.NEXT_PUBLIC_URL} />
      <meta property='og:type' content='website' />
      <meta property='og:site_name' content='Almer Tampus' />
      <meta property='og:locale' content='en_US' />

      {/* Open Graph Meta Tags for Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@guyfrommilkyway' />
      <meta name='twitter:creator' content='@guyfrommilkyway' />
      <meta name='twitter:title' content='Almer Tampus' />
      <meta
        name='twitter:description'
        content="I'm an agile software developer with over a year of professional experience, specializing in front-end web development. My expertise lies in building web applications using a versatile tech stack. I'm proficient in JavaScript and TypeScript, and excels in harnessing the power of modern frameworks and libraries, such as React, Next.js, Redux, Zustand, and CSS frameworks like Tailwind and Chakra UI. In my most recent role, I had the privilege of working at Seaplane Group, a Hong Kong-based startup. Here, I assumed full ownership of the maintenance and development of two crucial company projects, further honing my skills and expertise in front-end web development. This experience allowed me to drive projects from conception to successful completion, and I consistently strives to exceed project goals and expectations. Before my tenure at Seaplane Group, I had the pleasure of being part of the Highly Succeed Inc. team, a Philippine-based company specializing in a wide range of IT services. During my time with Highly Succeed, I actively participated in the co-development of a total of eight web applications, catering to both private and government clients. This exposure to diverse projects allowed me to gain invaluable insights into various industries and client needs while developing a strong collaborative spirit. These experiences have not only enriched my technical skills but have also honed my ability to adapt to different work environments and the distinct needs of clients across different regions. My dedication to delivering innovative and top-tier web solutions remains a constant driving force in my career."
      />
      <meta
        name='twitter:image'
        content={`${process.env.NEXT_PUBLIC_URL}_next/image?url=%2Fimages%2Fme.jpg&w=1920&q=75`}
      />
      <meta property='og:image:alt' content='Almer Tampus' />
      <meta name='twitter:url' content={process.env.NEXT_PUBLIC_URL} />

      {/* Other Meta Tags */}
      <meta name='author' content='Almer Tampus' />
      <meta
        name='description'
        content="I'm an agile software developer with over a year of professional experience, specializing in front-end web development. My expertise lies in building web applications using a versatile tech stack. I'm proficient in JavaScript and TypeScript, and excels in harnessing the power of modern frameworks and libraries, such as React, Next.js, Redux, Zustand, and CSS frameworks like Tailwind and Chakra UI. In my most recent role, I had the privilege of working at Seaplane Group, a Hong Kong-based startup. Here, I assumed full ownership of the maintenance and development of two crucial company projects, further honing my skills and expertise in front-end web development. This experience allowed me to drive projects from conception to successful completion, and I consistently strives to exceed project goals and expectations. Before my tenure at Seaplane Group, I had the pleasure of being part of the Highly Succeed Inc. team, a Philippine-based company specializing in a wide range of IT services. During my time with Highly Succeed, I actively participated in the co-development of a total of eight web applications, catering to both private and government clients. This exposure to diverse projects allowed me to gain invaluable insights into various industries and client needs while developing a strong collaborative spirit. These experiences have not only enriched my technical skills but have also honed my ability to adapt to different work environments and the distinct needs of clients across different regions. My dedication to delivering innovative and top-tier web solutions remains a constant driving force in my career."
      />
      <meta
        name='keywords'
        content='Almer Tampus, Almer Flores Tampus, Almer, Tampus, almertampus.xyz, almertampus.xyz/, www.almertampus.xyz, www.almertampus.xyz/, https://almertampus.xyz, https://almertampus.xyz/, Agile Developer, Agile Software Developer, Frontend developer, Front End Developer, Front-End Developer, JavaScript Developer, React Developer, Next.js Developer, JavaScript, TypeScript, React, Next.js, Redux, Zustand, Tailwind CSS, Tailwind, Chakra UI, HTML, HTML5, CSS, Cascading Style Sheets (CSS), SASS, Syntactically Awesome Stylesheets, Software Development, Web Development, Web Application Development, Front-End Development, Front End Development, User Interface Design, UI, UI Design, User Experience, User Experience Design, UX, UX Design, Seaplane Group, Highly Succeed, Mile High Roller Club, Operator Portal, Personal Website, Portfolio Website'
      />

      <title>{title}</title>
    </NextHead>
  );
};

export default Head;

const DESCRIPTION =
  'Frontend Software Engineer with 2.5 years of professional experience specializing in front-end web development. Skilled in building high-performance web applications using modern technologies. Proficient in TypeScript and JavaScript, with expertise in frameworks like React and Next.js. Adept at crafting responsive and visually appealing UIs with CSS frameworks such as MUI, Ant Design, Tailwind CSS, Chakra UI, and Bootstrap.';

const META = {
  // open graph meta tags
  ogTitle: 'Almer Tampus',
  ogDescription: DESCRIPTION,
  ogImage: `${process.env.NEXT_PUBLIC_URL}_next/image?url=%2Fimages%2Falmer-tampus-1.jpg&w=1920&q=75`,
  ogImageAlt: 'Almer Tampus',
  ogUrl: process.env.NEXT_PUBLIC_URL,
  ogType: 'website',
  ogSiteName: 'Almer Tampus',
  ogLocale: 'en_US',

  // open graph meta tags for twitter
  twitterCard: 'summary_large_image',
  twitterSite: '@guyfrommilkyway',
  twitterCreator: '@guyfrommilkyway',
  twitterTitle: 'Almer Tampus',
  twitterDescription: DESCRIPTION,
  twitterImage: `${process.env.NEXT_PUBLIC_URL}_next/image?url=%2Fimages%2Falmer-tampus-1.jpg&w=1920&q=75`,
  twitterUrl: process.env.NEXT_PUBLIC_URL,

  // other meta tags
  author: 'Almer Tampus',
  description: DESCRIPTION,
  keywords:
    'almer tampus, almer flores tampus, almertampus, almertampus.space, www.almertampus.space, https://almertampus.space, software engineer, agile developer, software developer, web developer, front-end developer, frontend developer, front end developer, javascript developer, typescript developer, react developer, next.js developer, javascript, typescript, react, next.js, redux, zustand, tailwind css, chakra ui, html, html5, css, cascading style sheets, sass, syntactically awesome stylesheets, software development, web development, web application development, front-end development, front end development, user interface design, ui design, user experience, ux design, personal website, portfolio website',
} as const;

export default META;

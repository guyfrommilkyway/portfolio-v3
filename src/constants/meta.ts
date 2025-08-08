const DESCRIPTION =
  "Hello, I'm Almer Tampus. A Frontend Software Engineer specializing in clean, scalable code with React, Next.js, TypeScript, and modern UI frameworks.";

const META = {
  // open graph meta tags
  ogTitle: 'Almer Tampus | Frontend Software Engineer',
  ogDescription: DESCRIPTION,
  ogImage: `https://almertampus.space/_next/image?url=%2Fimages%2Fprofile-photo-bw.jpg&w=1920&q=75`,
  ogImageAlt: 'Almer Tampus',
  ogUrl: 'https://almertampus.space',
  ogType: 'website',
  ogSiteName: 'Almer Tampus',
  ogLocale: 'en_US',

  // open graph meta tags for twitter
  twitterCard: 'summary_large_image',
  twitterSite: '@guyfrommilkyway',
  twitterCreator: '@guyfrommilkyway',
  twitterTitle: 'Almer Tampus | Frontend Software Engineer',
  twitterDescription: DESCRIPTION,
  twitterImage: `https://almertampus.space/_next/image?url=%2Fimages%2Fprofile-photo-bw.jpg&w=1920&q=75`,
  twitterUrl: 'https://almertampus.space',

  // other meta tags
  author: 'Almer Tampus',
  description: DESCRIPTION,
  keywords:
    'almer tampus, almer flores tampus, almertampus, frontend developer, frontend engineer, software engineer, web developer, typescript developer, react developer, next.js developer, javascript, typescript, react, next.js, redux, zustand, tailwind css, chakra ui, html, css, sass, software development, web development, web application, front end development, user interface design, ui design, user experience, ux design, personal website, portfolio',
} as const;

export default META;

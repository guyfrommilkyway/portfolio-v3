const DESCRIPTION =
    'A software engineer with ~2 years of professional experience, specializing in front-end web development. Expertise lies in building web applications using a versatile tech stack. Proficient in TypeScript and JavaScript, and excels in harnessing the power of modern frameworks and libraries such as React and Next.js, and CSS frameworks like MUI, Ant Design, Tailwind, Chakra UI and Bootstrap.';

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
        'Almer Tampus, Almer Flores Tampus, Almer, Tampus, almer, tampus, almertampus, almertampus.space, almertampus.space/, www.almertampus.space, www.almertampus.space/, https://almertampus.space, https://almertampus.space/, Software Engineer, Agile Developer, Agile Software Developer, Softwware Developer, Web Developer, Front-End Web Developer, Frontend Web Developer, Front End Web Developer, Frontend developer, Front End Developer, Front-End Developer, JavaScript Developer, TypeScript Developer, React Developer, Next.js Developer, JavaScript, TypeScript, React, Next.js, Redux, Zustand, Tailwind CSS, Tailwind, Chakra UI, HTML, HTML5, CSS, Cascading Style Sheets (CSS), SASS, Syntactically Awesome Stylesheets, Software Development, Web Development, Web Application Development, Front-End Development, Front End Development, User Interface Design, UI, UI Design, User Experience, User Experience Design, UX, UX Design, Personal Website, Portfolio Website',
} as const;

export default META;

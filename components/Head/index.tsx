// packages
import { default as NextHead } from 'next/head';

// data
import META from '@/data/meta';

interface IHead {
  title: string;
}

const Head = (props: IHead) => {
  const { title } = props;

  return (
    <NextHead>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <title>{title}</title>
      {/* Open Graph Meta Tags */}
      <meta property='og:title' content={META.ogTitle} />
      <meta property='og:description' content={META.ogDescription} />
      <meta property='og:image' content={META.ogImage} />
      <meta property='og:image:alt' content={META.ogImageAlt} />
      <meta property='og:url' content={META.ogUrl} />
      <meta property='og:type' content={META.ogType} />
      <meta property='og:site_name' content={META.ogSiteName} />
      <meta property='og:locale' content={META.ogLocale} />
      {/* Open Graph Meta Tags for Twitter */}
      <meta name='twitter:card' content={META.twitterCard} />
      <meta name='twitter:site' content={META.twitterSite} />
      <meta name='twitter:creator' content={META.twitterCreator} />
      <meta name='twitter:title' content={META.twitterTitle} />
      <meta name='twitter:description' content={META.twitterDescription} />
      <meta name='twitter:image' content={META.twitterImage} />
      <meta name='twitter:url' content={META.twitterUrl} />
      {/* Other Meta Tags */}
      <meta name='author' content={META.author} />
      <meta name='description' content={META.description} />
      <meta name='keywords' content={META.keywords} />
    </NextHead>
  );
};

export default Head;

import { Helmet } from 'react-helmet-async';

export default function SEOHead({ title, description, path = '' }) {
  const siteName = 'United Values Cables';
  const baseUrl  = 'https://www.unitedvaluescables.in';
  const fullTitle = title
    ? `${title} | ${siteName}`
    : `${siteName} | Industrial Cable Manufacturer Delhi NCR`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || 'United Values Cables — B2B industrial cable manufacturer in Delhi NCR since 1986. PVC, XLPE, Silicone, EPR, Solar & EV cables.'} />
      <link rel="canonical" href={`${baseUrl}${path}`} />
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={description || ''} />
      <meta property="og:url"         content={`${baseUrl}${path}`} />
      <meta property="og:type"        content="website" />
      <meta property="og:site_name"   content={siteName} />
    </Helmet>
  );
}

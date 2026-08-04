import { Helmet } from "react-helmet-async";

export default function SEOHead({ title, description, path = "" }) {
  const siteName = "UV Cables";
  const baseUrl = "https://uvcables.com";
  const fullTitle = title
    ? `${title} | ${siteName}`
    : `${siteName} | B2B Industrial Cable Supplier`;

  const defaultDescription =
    "UV Cables — B2B Industrial cable supplier since 1986. Standard & custom PVC, XLPE, Silicone, EPR/PCP, Solar, EV, PTFE (Teflon) cables & Silicone profiles.";

  const metaDescription = description || defaultDescription;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={`${baseUrl}${path}`} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={`${baseUrl}${path}`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
    </Helmet>
  );
}

import { Helmet } from "react-helmet-async";

export default function SEOHead({ title, description, path = "" }) {
  const siteName = "UV Cables";
  const baseUrl = "https://uvcables.com";
  const fullTitle = title
    ? `${title} | ${siteName}`
    : `${siteName} | Industrial Cable Manufacturer Delhi NCR`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta
        name="description"
        content={
          description ||
          "UV Cables — B2B industrial cable manufacturer in Delhi NCR since 1986. PVC, XLPE, Silicone, EPR/PCP, Solar, EV, PTFE(Teflon) Cables & Silicone Tubes."
        }
      />
      <link rel="canonical" href={`${baseUrl}${path}`} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || ""} />
      <meta property="og:url" content={`${baseUrl}${path}`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
    </Helmet>
  );
}

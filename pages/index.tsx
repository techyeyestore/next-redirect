import { useRouter } from 'next/router';
const IndexPage = () => {
  const router = useRouter();
  // Define the base URL for your website
  const baseUrl = 'https://abc.com';
  // Extract the slug from the URL
  const { slug } = router.query;
  // Generate the URL for abc.com using the slug
  const abcUrl = `${baseUrl}/${slug}`;
  // Redirect to the abc.com URL
  if (slug) {
    window.location.href = abcUrl;
  }
  return <div>Redirecting to abc.com...</div>;
};
export default IndexPage;
import TrustMe from "../components/trustme";
import Experience from "../components/experience";
import ProfileHero from "../components/profile";
import Recommendation from "../components/recomendations";
import PopularPosts from "../components/popularposts";
import FAQ from "../components/faq"
import Layout from "../components/layout";


export default function IndexPage() {
    return (
     <Layout>
        <ProfileHero />
        <TrustMe />
        <Recommendation />
        <PopularPosts />
        <Experience />
        <FAQ />
     </Layout>
    )
  }

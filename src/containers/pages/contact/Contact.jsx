import Features from "components/about/FeaturesAbout"
import HeaderAbout from "components/about/HeaderAbout"
import Contact from "components/contact/ContactHeader";
import FullWidthLayout from "hocs/layouts/FullWidthLayout"

import { Helmet } from 'react-helmet-async';

function About(){
    return(
        <FullWidthLayout>
            <Helmet>
                <title>Sendero | Nosotros</title>
                <meta name="description" content="Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones." />
                <meta name="keywords" content='agencia de software, agencia de marketing, creacion de pagina web' />
                <meta name="robots" content='all' />
                <link rel="canonical" href="https://www.murkiva.com/" />
                <meta name="author" content='Murkiva' />
                <meta name="publisher" content='Murkiva' />

                {/* Social Media Tags */}
                <meta property="og:title" content='Murkiva | Software Agency' />
                <meta property="og:description" content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.' />
                <meta property="og:url" content="https://www.murkiva.com/" />
                <meta property="og:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />

                <meta name="twitter:title" content='Murkiva | Software Agency' />
                <meta
                    name="twitter:description"
                    content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.'
                />
                <meta name="twitter:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>            
            
                <div className="pt-28">
                    
                    <Contact/>
                </div>
            
        </FullWidthLayout>
    )
}

export default About
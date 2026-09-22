import About from "../Component/landingPage/About";
import Footer from "../Component/landingPage/Footer";
import Navbar from "../Component/landingPage/Navbar";
import Services from "../Component/landingPage/Services";

import TextSection from "../Component/landingPage/textSection";



function LandingPage() {
    return (
        <>


            <Navbar />
            <TextSection />
            <About />
            <Services />
            <Footer />

        </>

    );
}
export default LandingPage;
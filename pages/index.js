import React, { Fragment } from 'react';
import Header2 from '../components/Header2/Header2';
import Hero2 from '../components/hero2/hero2';
import FeaturePartners from '../components/software-company-components/FeaturePartners';
import ServiceSection from '../components/software-company-components/ServiceSection/ServiceSection';
import About from '../components/software-company-components/about/about';
import ProcessTechnology from '../components/software-company-components/ProcessTechnology/ProcessTechnology';
import FaqSection from '../components/software-company-components/FaqSection/FaqSection';
import BlogSection from '../components/software-company-components/BlogSection/BlogSection';
import ContactSection from '../components/software-company-components/ContactSection';
import Scrollbar from '../components/scrollbar/scrollbar';
import Footer from '../components/software-company-components/Footer/Footer';
import CtaSection from '../components/CtaSection/CtaSection';

const HomePage = () => {
    return (
        <Fragment>
            <div>
                <Header2 />
                <main className="page_content">
                    <Hero2 />
                    <FeaturePartners />
                    <ServiceSection />
                    <About />
                    <ProcessTechnology />
                    <FaqSection />
                    <BlogSection />
                    <ContactSection />
                    <CtaSection />
                </main>
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default HomePage;
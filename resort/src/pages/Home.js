import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Services from "../components/Services";

import Banner from "../components/Banner";
const home = () => {
    return (
        <>
            <Hero>
                <Banner
                    title="Beach Resort Hotel"
                    subtitle="deluxe rooms starting at 80 Dt"
                >
                    <Link to="/rooms" className="btn-primary">
                        our rooms
          </Link>
                </Banner>
            </Hero>
            <Services />

        </>
    );
};

export default home;
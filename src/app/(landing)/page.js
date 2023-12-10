import dynamic from "next/dynamic";
const LandingContent = dynamic(() => import("./_components/landing-content"));
const LandingHero = dynamic(() => import("./_components/landing-hero"));
const LandingNavbar = dynamic(() => import("./_components/landing-navbar"));

const LandingPage = () => {
    return (
        <div className="h-full">
            <LandingNavbar />
            <LandingHero />
            <LandingContent />
        </div>
    );
};

export default LandingPage;

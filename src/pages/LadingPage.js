import React, { useState } from "react";
import NavbarComponent from "../components/NavbarComponent";
import HeroComponent from "../components/HeroComponent";
import PresentationVideoComponent from "../components/PresentationVideoComponent";
import FeatureComponent from "../components/FeatureComponent";
import AdvantageComponent from "../components/AdvantageComponent";
import PresentationComponent from "../components/PresentationComponent";
import FeatureObledComponent from "../components/FeatureObledComponent";
import AdvantageObledComponent from "../components/AdvantageObledComponent";
import FormulaComponent from "../components/FormulaComponent";
import FooterComponent from "../components/FooterComponent";
import SmallNavBarComponent from "../components/SmallNavBarComponent";
import LoadingComponent from "../components/loadingComponent";
import AlertMessageComponent from "../components/alertMessageComponent";

const LadingPage = () => {
    const [seeNavMenu, setSeeNavMenu] = useState();
    const [result, setResult] = useState({});
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [activeMessageBox, setActiveMessageBox] = useState(false);

    if (loading) {
        return <LoadingComponent />;
    }
    return (
        <div className="relative w-screen h-screen flex justify-center overflow-x-hidden">
            <div className="w-full max-w-screen-2xl flex flex-col gap-10">
                {/* Hero */}
                <div className="flex flex-col h-screen min-h-screen">
                    <NavbarComponent setSeeNavMenu={setSeeNavMenu} />
                    <HeroComponent />
                </div>

                {/* Video presentation */}
                <PresentationVideoComponent />

                {/* Principals features */}
                <FeatureComponent />

                {/* Advantages */}
                <AdvantageComponent />

                {/* Presentation */}
                <PresentationComponent />

                {/* Obled Features */}
                <FeatureObledComponent />

                {/* Advantage Obled */}
                <AdvantageObledComponent />

                {/* Formula */}
                <FormulaComponent setActiveMessageBox={setActiveMessageBox} setIsError={setIsError} setLoading={setLoading} setResult={setResult} />

                <FooterComponent />
            </div>
            <SmallNavBarComponent
                seeNavMenu={seeNavMenu}
                setSeeNavMenu={setSeeNavMenu}
            />

            <AlertMessageComponent
                isActive={activeMessageBox}
                title={isError ? "Error" : "Success"}
                message={result["message"]}
                setIsActive={setActiveMessageBox}
                isError={isError}
            />
        </div>
    );
};

export default LadingPage;

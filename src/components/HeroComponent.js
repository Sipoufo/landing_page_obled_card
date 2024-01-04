import React from "react";
import ButtonWidget from "../widgets/ButtonWidget";

const HeroComponent = () => {
    return (
        <div className="flex flex-grow justify-center bg-secondary bg-opacity-10">
            <div className="flex flew-row w-full max-w-screen-lg items-center px-8">
                {/* Left part */}
                <div className="flex flex-col w-full md:w-1/2 gap-4">
                    <h1 className="text-2xl md:text-4xl font-extrabold">
                        Connecter les Familles à Travers l'Atlantique
                    </h1>
                    <p className="text-xs md:text-base">
                        Bienvenue chez Obled Money, la solution financière
                        révolutionnaire conçue pour renforcer les liens
                        financiers entre les membres de la diaspora africaine
                        aux États-Unis et leurs proches en Afrique. Notre carte
                        prépayée offre une multitude d'avantages pour faciliter
                        les transferts d'argent et garantir la sécurité
                        financière des familles, où qu'elles se trouvent.
                    </p>
                    <div>
                        <ButtonWidget name={"Acheter une carte obled money"} />
                    </div>
                </div>
                {/* Right part */}
                <div className="hidden md:flex flex-col w-1/2 gap-4">
                    <img
                        src={process.env.PUBLIC_URL + "/assets/images/hero.png"}
                        className="w-full h-full object-contain"
                        alt="hero"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroComponent;

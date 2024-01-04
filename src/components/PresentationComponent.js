import React from "react";

const PresentationComponent = () => {
    return (
        <div className="flex flex-grow justify-center bg-secondary bg-opacity-10 py-10">
            <div className="flex flex-col w-full max-w-screen-lg px-8 gap-8">
                <h1 className="text-xl md:text-2xl font-extrabold w-full">
                    Présentation
                </h1>
                <p className="text-center">
                    <span className="text-4xl font-bold">"</span> Chers membres de la diaspora africaine,<br />
                    Nous sommes ravis de
                    vous présenter la Carte Obled Money, une solution innovante
                    de transfert financier conçue spécialement pour vous et vos
                    proches en Afrique. Chez Obled Money, nous comprenons
                    l'importance des liens familiaux et de la contribution
                    financière à vos proches restés au pays. C'est pourquoi nous
                    avons développé une carte prépayée qui simplifie et sécurise
                    vos transferts d'argent vers l'Afrique. <span className="text-4xl font-bold">"</span>
                </p>
            </div>
        </div>
    );
};

export default PresentationComponent;

import React from "react";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import FeatureItemComponent from "../widgets/FeatureItemWidget";
import { MdOutlineSecurity } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";

const FeatureComponent = () => {
    return (
        <div className="flex flex-grow justify-center bg-secondary bg-opacity-10 py-10">
            <div className="flex flex-col w-full max-w-screen-lg px-8 gap-8">
                <h1 className="text-xl md:text-2xl font-extrabold">
                    Caractéristiques Principales
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FeatureItemComponent icon={<FaMoneyBillTransfer className="text-4xl text-primary" />} title={"Transferts Instantanés 24h/24 et 7j/7"} description={"Avec la carte Obled Money, les membres de la diaspora peuvent transférer de l'argent à leurs proches en Afrique à tout moment, jour et nuit, grâce à notre plateforme en ligne conviviale."} />
                    <FeatureItemComponent icon={<BsCashCoin className="text-4xl text-primary" />} title={"Retraits Faciles"} description={"Les détenteurs de la carte peuvent retirer de l'argent auprès de nos banques partenaires, offrant ainsi une accessibilité maximale et éliminant les contraintes liées à l'accès aux fonds."} />
                    <FeatureItemComponent icon={<MdOutlineSecurity className="text-4xl text-primary" />} title={"Sécurité Maximale"} description={"La Carte Obled Money garantit la sécurité de chaque transaction, offrant une tranquillité d'esprit totale tant aux expéditeurs qu'aux bénéficiaires. Les protocoles de sécurité avancés garantissent la confidentialité et l'intégrité des données financières."} />
                </div>
            </div>
        </div>
    );
};

export default FeatureComponent;

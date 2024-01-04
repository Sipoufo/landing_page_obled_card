import React from "react";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import FeatureItemComponent from "../widgets/FeatureItemWidget";
import { MdOutlineSecurity } from "react-icons/md";
import { BsBank2, BsCashCoin } from "react-icons/bs";

const FeatureObledComponent = () => {
    return (
        <div className="flex flex-grow justify-center py-10">
            <div className="flex flex-col w-full max-w-screen-lg px-8 gap-8">
                <h1 className="text-xl md:text-2xl font-extrabold">
                    Caractéristiques clés de la Carte Obled Money
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FeatureItemComponent
                        icon={
                            <FaMoneyBillTransfer className="text-4xl text-primary" />
                        }
                        title={"Transferts Instantanés 24h/24 et 7j/7"}
                        description={
                            "Avec la Carte Obled Money, vous avez la flexibilité de transférer de l'argent à tout moment, directement depuis notre plateforme en ligne conviviale. Plus de contraintes horaires, vous avez le contrôle total de vos transactions."
                        }
                    />
                    <FeatureItemComponent
                        icon={<BsCashCoin className="text-4xl text-primary" />}
                        title={"Retraits dans les Guichets de nos Banques Partenaires"}
                        description={
                            "Vos proches en Afrique peuvent retirer facilement les fonds aux guichets de nos banques partenaires, offrant ainsi un accès pratique à l'argent dont ils ont besoin, quand ils en ont besoin."
                        }
                    />
                    <FeatureItemComponent
                        icon={
                            <MdOutlineSecurity className="text-4xl text-primary" />
                        }
                        title={"Sécurité et Fiabilité"}
                        description={
                            "La Carte Obled Money est sécurisée avec les dernières technologies de cryptage pour garantir la sécurité de chaque transaction. Vous pouvez avoir confiance en notre engagement envers la confidentialité de vos informations financières."
                        }
                    />
                    <FeatureItemComponent
                        icon={
                            <BsBank2 className="text-4xl text-primary" />
                        }
                        title={"Aucun Besoin de Compte Bancaire:"}
                        description={
                            "Cette carte prépayée élimine la nécessité d'un compte bancaire pour vos proches en Afrique. C'est une solution accessible et pratique pour tous, indépendamment de leur situation financière."
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default FeatureObledComponent;

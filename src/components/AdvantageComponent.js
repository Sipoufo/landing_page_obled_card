import React from "react";

const AdvantageComponent = () => {
    return (
        <div className="flex flex-grow justify-center py-10">
            <div className="flex flex-row w-full max-w-screen-lg px-8 gap-8 items-center">
                {/* Right part */}
                <div className="hidden md:flex flex-col w-1/2 gap-4">
                    <img
                        src={process.env.PUBLIC_URL + "/assets/images/cart.png"}
                        className="w-full object-contain"
                        alt="hero"
                    />
                </div>

                {/* Left part */}
                <div className="flex flex-col w-full md:w-1/2 gap-6">
                    <h1 className="text-xl md:text-2xl font-extrabold w-full">
                        Avantages
                    </h1>
                    <div className="flex flex-row gap-2">
                        <div className="flex flex-col gap-2 w-1/2">
                            <h1 className="text-lg font-extrabold w-full">
                                Rapide et Efficace:
                            </h1>
                            <p>
                                Les transferts d'argent sont instantanés,
                                permettant aux familles de répondre rapidement à
                                des besoins urgents, que ce soit pour
                                l'éducation, la santé ou d'autres dépenses
                                importantes.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 w-1/2">
                            <h1 className="text-lg font-extrabold w-full">
                                Réduction des Frais:
                            </h1>
                            <p>
                                En utilisant la carte Obled Money, les membres
                                de la diaspora bénéficient de tarifs de
                                transfert compétitifs, réduisant ainsi les coûts
                                associés aux envois d'argent traditionnels.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <div className="flex flex-col gap-2 w-1/2">
                            <h1 className="text-lg font-extrabold w-full">
                                Connectivité Familiale:
                            </h1>
                            <p>
                                Obled Money va au-delà des transactions
                                financières en renforçant les liens familiaux.
                                Les membres de la diaspora peuvent contribuer
                                activement au bien-être de leurs proches, même à
                                distance.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 w-1/2">
                            <h1 className="text-lg font-extrabold w-full">
                                Soutien Communautaire:
                            </h1>
                            <p>
                                En choisissant Obled Money, les membres de la
                                diaspora soutiennent une solution qui comprend
                                les besoins uniques de leur communauté. Nous
                                sommes déterminés à favoriser le développement
                                économique et financier de nos utilisateurs. La
                                Carte Obled Money représente bien plus qu'une
                                simple carte prépayée ; elle incarne une
                                passerelle financière entre les continents,
                                favorisant le soutien familial et la croissance
                                économique. Rejoignez-nous dans cette aventure
                                qui vise à simplifier et à améliorer les
                                transferts d'argent au sein de la diaspora
                                africaine.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvantageComponent;

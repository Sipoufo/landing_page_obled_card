import React from "react";

const AdvantageObledComponent = () => {
    return (
        <div className="flex flex-grow justify-center bg-secondary bg-opacity-10 py-10">
            <div className="flex flex-row-reverse w-full max-w-screen-lg px-8 gap-8 items-center">
                {/* Right part */}
                <div className="hidden md:flex flex-col w-1/2 gap-4">
                    <img
                        src={
                            process.env.PUBLIC_URL + "/assets/images/robust.png"
                        }
                        className="w-full object-contain"
                        alt="hero"
                    />
                </div>

                {/* Left part */}
                <div className="flex flex-col w-full md:w-1/2 gap-6">
                    <h1 className="text-xl md:text-2xl font-extrabold w-full">
                        Avantages de la Carte Obled Money
                    </h1>
                    <div className="flex flex-row gap-2">
                        <div className="flex flex-col gap-2 w-1/2">
                            <h1 className="text-lg font-extrabold w-full">
                                Rapidité:
                            </h1>
                            <p>
                                Vos transferts d'argent atteignent
                                instantanément vos proches, éliminant les délais
                                associés aux méthodes traditionnelles.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 w-1/2">
                            <h1 className="text-lg font-extrabold w-full">
                                Économie de Coûts:
                            </h1>
                            <p>
                                Évitez les frais élevés associés aux transferts
                                d'argent traditionnels en optant pour la Carte
                                Obled Money, offrant des tarifs compétitifs et
                                transparents.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <div className="flex flex-col gap-2 w-1/2">
                            <h1 className="text-lg font-extrabold w-full">
                                Contrôle Total:
                            </h1>
                            <p>
                                Grâce à notre plateforme en ligne intuitive,
                                vous pouvez suivre et gérer vos transactions en
                                temps réel, offrant un contrôle total sur vos
                                finances.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 w-1/2">
                            <h1 className="text-lg font-extrabold w-full">
                                Soutien Client Dédié:
                            </h1>
                            <p>
                                Notre équipe de support client est disponible
                                pour répondre à toutes vos questions et vous
                                assister à chaque étape du processus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvantageObledComponent;

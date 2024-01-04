import React, { useState } from "react";
import ButtonWidget from "../widgets/ButtonWidget";
import { CreateCommandService } from "../services/commandService";

const FormulaComponent = ({ setLoading, setActiveMessageBox, setResult, setIsError }) => {
    const [userFirstName, setUserFirstName] = useState();
    const [userLastName, setUserLastName] = useState();
    const [birthday, setBirthday] = useState();
    const [address, setAddress] = useState();
    const [postCode, setPostalCode] = useState();
    const [phone, setPhone] = useState();
    const [userEmail, setUserEmail] = useState();
    const [ville, setVille] = useState();

    const onSubmit = async (e) => {
        e.preventDefault();

        const data = {
            userFirstName,
            userLastName,
            address,
            postCode,
            phone,
            userEmail,
            ville
        }

        const res = await CreateCommandService(data);
        setActiveMessageBox(true);
        setResult(res);
        setIsError(res.isError);
        setLoading(false);
    }

    return (
        
        <div className="flex flex-grow justify-center py-10">
            <div className="flex flex-row w-full max-w-screen-lg px-8 gap-8 items-center">
                {/* Right part */}
                <div className="hidden md:flex flex-col w-1/2 gap-4">
                    <img
                        src={process.env.PUBLIC_URL + "/assets/images/cart2.jpeg"}
                        className="w-full object-contain"
                        alt="cart2"
                    />
                </div>

                {/* Left part */}
                <div className="flex flex-col w-full md:w-1/2 gap-6">
                    <h1 className="text-xl md:text-2xl font-extrabold w-full">
                    Page formulaire
                    </h1>
                    <p>Le client s'inscrit avec son email + téléphone</p>
                    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                        <div className="flex flex-row justify-between gap-2">
                            {/* First name */}
                            <div className="flex flex-col gap-1 w-1/2">
                                <label>Noms</label>
                                <input type="text" className="px-2 py-1 border border-black rounded-md" value={userFirstName} onChange={(e) => setUserFirstName(e.target.value)} />
                            </div>
                            {/* Last name */}
                            <div className="flex flex-col gap-1 w-1/2">
                                <label>Prenoms</label>
                                <input type="text" className="px-2 py-1 border border-black rounded-md" value={userLastName} onChange={(e) => setUserLastName(e.target.value)} />
                            </div>
                        </div>
                        <div className="flex flex-row justify-between gap-2">
                            {/* Birthday */}
                            <div className="flex flex-col gap-1 w-1/2">
                                <label>Date de naissance</label>
                                <input type="date" className="px-2 py-1 border border-black rounded-md w-full"/>
                            </div>
                            {/* Last name */}
                            <div className="flex flex-col gap-1 w-1/2">
                                <label>Adresse</label>
                                <input type="text" className="px-2 py-1 border border-black rounded-md" value={address} onChange={(e) => setAddress(e.target.value)} />
                            </div>
                        </div>
                        <div className="flex flex-row justify-between gap-2">
                            {/* Birthday */}
                            <div className="flex flex-col gap-1 w-1/2">
                                <label>Post code</label>
                                <input type="text" className="px-2 py-1 border border-black rounded-md" value={postCode} onChange={(e) => setPostalCode(e.target.value)} />
                            </div>
                            {/* Last name */}
                            <div className="flex flex-col gap-1 w-1/2">
                                <label>Téléphone</label>
                                <input type="text" className="px-2 py-1 border border-black rounded-md" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                        </div>
                        <div className="flex flex-row justify-between gap-2">
                            {/* Email adresse */}
                            <div className="flex flex-col gap-1 w-1/2">
                                <label>Email adresse</label>
                                <input type="email" className="px-2 py-1 border border-black rounded-md" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                            </div>
                            {/* Ville */}
                            <div className="flex flex-col gap-1 w-1/2">
                                <label>Ville</label>
                                <input type="text" className="px-2 py-1 border border-black rounded-md" value={ville} onChange={(e) => setVille(e.target.value)} />
                            </div>
                        </div>
                        <ButtonWidget name={"Send"} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormulaComponent;
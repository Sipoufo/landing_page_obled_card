import React, { useState } from "react";
import InputWidget from "../../widgets/inputWidget";
import { Link } from "react-router-dom";
import ButtonWidget from "../../widgets/ButtonWidget";
import { SignInService } from "../../services/authenticationService";
import LoadingComponent from "../../components/loadingComponent";
import AlertMessageComponent from "../../components/alertMessageComponent";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [activeMessageBox, setActiveMessageBox] = useState(false);
    const [data, setData] = useState(false);

    const SignIn = async (e) => {
        e.preventDefault();
        setLoading(true);
        const data = {
            username: email,
            password,
        };
        const response = await SignInService(data);
        if (response.isError) {
            setActiveMessageBox(true);
            setData(response);
        } else {
            window.location.replace("/");
        }
        setLoading(false);
    };

    if (loading) {
        <LoadingComponent />;
    }
    return (
        <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-3/12 flex flex-col items-center justify-center gap-10">
            {/* <h1 className="font-extrabold text-3xl text-primary">MyTicket</h1> */}
            <img
                src={process.env.PUBLIC_URL + "/assets/logos/Obled_Money.png"}
                className="w-full object-contain"
                alt="logo"
            />
            <form className="flex flex-col gap-4 w-full" onSubmit={SignIn}>
                {/* Email */}
                <InputWidget
                    label={"Email Address"}
                    type={"email"}
                    name={"email"}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder={"xxx@xxx.com"}
                />
                {/* Password */}
                <InputWidget
                    label={"Password"}
                    type={"password"}
                    name={"email"}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder={"password"}
                />
                {/* Submit Button */}
                <ButtonWidget name={"Login"} />
            </form>
            <AlertMessageComponent
                isActive={activeMessageBox}
                title={"Error"}
                message={data["message"]}
                setIsActive={setActiveMessageBox}
                isError={true}
            />
        </div>
    );
};

export default SignIn;

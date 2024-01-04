import React, { useState } from "react";
import InputWidget from "../widgets/inputWidget";
import ButtonWidget from "../widgets/ButtonWidget";
import { IoMdClose } from "react-icons/io";
import { CreateAdminService } from "../services/adminService";
import LoadingComponent from "./loadingComponent";
import AlertMessageComponent from "./alertMessageComponent";
import { CreateCartService } from "../services/cartService";

const AddCart = ({ active, setActive }) => {
    const [result, setResult] = useState({});
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [activeMessageBox, setActiveMessageBox] = useState(false);
    const [file, setFile] = useState(null);
    const [name, setName] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(file);
        const data = {
            file,
            name,
        }

        const res = await CreateCartService(data);
        // setActiveMessageBox(true);
        // setResult(res);
        // setIsError(res.isError);
        // setLoading(false);
    }

    if (loading) {
        return <LoadingComponent />;
    }
    return (
        <div className={`${!active && "hidden"} z-10 absolute w-screen h-screen flex justify-center items-center bg-black bg-opacity-60 top-0 left-0`}>
            {/* Infos */}
            <form className="relative flex flex-col gap-6 w-full md:w-6/12 bg-white px-6 py-6 rounded-lg" onSubmit={onSubmit}>
                <button className="absolute right-4 top-4"
                    onClick={() => setActive(false)}
                >
                    <IoMdClose className="text-2xl" />
                </button>
                <h1 className="font-extrabold text-xl text-primary">
                    Add Admin
                </h1>

                <InputWidget
                    label={"Picture"}
                    type={"file"}
                    name={"picture"}
                    onChange={(e) => {
                        // console.log(e.target.files);
                        setFile(e.target.files);
                    }}
                    disable={false}
                    isRequired={true}
                />
                <InputWidget
                    label={"Name"}
                    type={"text"}
                    name={"name"}
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    disable={false}
                    isRequired={true}
                />
                <div className="flex flex-col md:flex-row gap-4 bg">
                    <ButtonWidget name={"Add"} color={"bg-primary"} />
                </div>
            </form>
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

export default AddCart;

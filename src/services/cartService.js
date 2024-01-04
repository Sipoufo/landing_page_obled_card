import { CreateAdminEndPoint, CreateCartEndPoint } from "../constants/adminEndpoint";
import axios from "axios";
import { GetToken, RemoveItems } from "./tokenService";
import { VerifyToken } from "./tokenVerification";

const headers = { Authorization: "Bearer " + GetToken() };

export const CreateCartService = async (data) => {
    if (!VerifyToken()) {
        window.location.replace("/");
    }
    return axios
        .post(CreateCartEndPoint(), data, {
            headers,
        })
        .then((response) => {
            console.log(response);
            window.location.replace("/");
            return {
                data: null,
                isError: false,
                code: response.status,
                message: "Cart created !",
            };
        })
        .catch((e) => {
            console.log(e);
            // if (!e.response) {
            //     RemoveItems();
            //     window.location.replace("/error");
            // }
            // else if (e.response["status"] !== 400) {
            //     RemoveItems();
            //     window.location.replace("/error");
            // } else {
            //     return {
            //         data: null,
            //         isError: true,
            //         code: e.response.status,
            //         message: e.response.data["message"],
            //     };
            // }
        });
};

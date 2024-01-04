import axios from "axios";
import {
    SignInEndpoint,
} from "../constants/endpoint";
import { SetToken, SetUserId, SetUserName, SetUserRole } from "./tokenService";
import { SetCookies } from "./cookieService";

export const SignInService = async (data) => {
    return axios
        .post(SignInEndpoint(), data)
        .then((response) => {
            console.log(response)
            SetToken(response.data["token"]);
            SetUserName(response.data["firstName"]);
            SetUserId(response.data["user"]["userId"].toString());
            SetCookies("refreshToken", response.data["refreshToken"]);
            return {
                isError: false,
                message: null,
                data: null,
                code: 200,
            };
        })
        .catch((e) => {
            console.log(e)
            if (!e.response) {
                window.location.replace("/error");
            }
            if (e.response["status"] !== 400) {
                window.location.replace("/error");
            } else {
                return {
                    data: null,
                    isError: true,
                    code: e.response.status,
                    message: e.response.data["message"],
                };
            }
        });
};

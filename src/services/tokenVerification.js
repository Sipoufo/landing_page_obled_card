import Cookies from "universal-cookie";
import { GetToken, RemoveItems, SetToken } from "./tokenService";
import axios from "axios";

const cookies = new Cookies(null, { path: "/" });
const headers = { Authorization: "Bearer " + GetToken() };

export const VerifyToken = async () => {
    return axios
        .post(
            `http://localhost:8080/api/auth/verifyAccessToken`,
            undefined,
            {
                headers,
            }
        )
        .then( (resultVerifyAccessToken) => {
            if (!resultVerifyAccessToken["data"]["valid"]) {
                axios
                    .post(
                        `http://localhost:8080/api/auth/verifyRefreshToken`,
                        {
                            refreshToken: cookies.get("refreshToken"),
                        }
                    )
                    .then( (resultVerifyRefreshToken) => {
                        if (resultVerifyRefreshToken["data"]["valid"]) {
                            axios
                                .post(
                                    `http://localhost:8080/api/auth/refresh`,
                                    {
                                        refreshToken:
                                            cookies.get("refreshToken"),
                                    }
                                )
                                .then((response) => {
                                    SetToken(response.data["token"]);
                                    return true;
                                })
                                .catch((e) => {
                                    RemoveItems();
                                    return false;
                                });
                        } else {
                            RemoveItems();
                            return false;
                        }
                    })
                    .catch((e) => {
                        RemoveItems();
                        return false;
                    });
            } else {
                return true;
            }
        })
        .catch((e) => {
            RemoveItems();
            return false;
        });
};
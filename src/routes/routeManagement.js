import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import IndexAuth from "../pages/authentication";
import SignIn from "../pages/authentication/signIn";
import IndexOther from "../pages/other";
import Users from "../pages/other/users";
import Overview from "../pages/other/overview";
import UserDetail from "../pages/other/userDetail";
import AccountUserComponent from "../components/users/accountUserComponent";
import EventsUserComponent from "../components/users/eventsUserComponent";
import UserComponent from "../components/users/userComponent";
import TicketsUserComponent from "../components/users/ticketsUserComponent";
import Setting from "../pages/other/setting";
import AccountSettingComponent from "../components/setting/accountSettingComponent";
import PasswordSettingComponent from "../components/setting/passwordSettingComponent";
import Notification from "../pages/other/notification";
import Administration from "../pages/other/admin";
import { GetToken } from "../services/tokenService";
import Error from "../pages/error";
import LadingPage from "../pages/LadingPage";

const RouteManagement = () => {
    if (GetToken() == null) {
        return (
            <Routes>
                <Route index element={<LadingPage />} />
                <Route path="/auth/" element={<IndexAuth />}>
                    <Route index element={<SignIn />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
                <Route path="/error" element={<Error />} />
            </Routes>
        );
    }
    return (
        <Routes>
            <Route path="/" element={<IndexOther />}>
                <Route index element={<Administration />} />
                <Route path="/users/" element={<Users />}>
                    <Route index element={<UserComponent />} />
                    <Route path=":idUser/" element={<UserDetail />}>
                        <Route index element={<AccountUserComponent />} />
                        <Route
                            path="events"
                            element={<EventsUserComponent />}
                        />
                        <Route
                            path="tickets"
                            element={<TicketsUserComponent />}
                        />
                    </Route>
                </Route>
                <Route path="setting/" element={<Setting />}>
                    <Route
                        path="account"
                        element={<AccountSettingComponent />}
                    />
                    <Route
                        path="password"
                        element={<PasswordSettingComponent />}
                    />
                </Route>
                <Route path="notification" element={<Notification />} />
                <Route path="admin" element={<Administration />} />
            </Route>
        </Routes>
    );
};

export default RouteManagement;

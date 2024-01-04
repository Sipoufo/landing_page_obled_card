import React from "react";
import { BrowserRouter } from "react-router-dom";
import RouteManagement from "./routes/routeManagement";

function App() {
    return (
        <BrowserRouter forceRefresh={true}>
            <RouteManagement />
        </BrowserRouter>
    );
}

export default App;

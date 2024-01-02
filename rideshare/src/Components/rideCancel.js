import React from 'react';
import '../grid.css';
import { Redirect, useLocation } from "react-router-dom";

function Message() {
    alert("Ride Cancelled")
}

function RideCancel(props) {
    const location = useLocation();
    return (
        <div>
            <Message />
            <Redirect to={{ pathname: "/UserHome", state: { from: location } }} />
        </div>
    )

}

export default RideCancel;
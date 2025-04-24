import React from "react";
import "../styles/ownerdashboard.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function OwnerDashboard() {
    return (
        <div className="owner-dashboard">
            <h2>Owner Dashboard</h2>
            <div className="dashboard-main">
                {/* Left box */}
                <div className="left-box">
                    <h3>My Properties</h3>
                    <ul className="property-list">
                        <li>Property 1</li>
                        <li>Property 2</li>
                        <li>Property 3</li>
                    </ul>
                </div>

                {/* Vertical line */}
                <div className="divider"></div>

                {/* Right box */}
                <div className="right-box">
                    <Button variant="contained" fullWidth>
                        Add Property
                    </Button>

                    <Button variant="contained" fullWidth>
                        Add Tenant
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default OwnerDashboard;

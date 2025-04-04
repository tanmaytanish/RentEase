import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/selector.css"; // Adjust the path as necessary

function RegisterSelector() {
  const navigate = useNavigate();

  return (
    <div className="selector-container">
      <h1>Register as</h1>
      <div className="options-container">
        <div className="option-card" onClick={() => navigate("/register/owner")}>
          <h2>Property Owner</h2>
          <p>Manage your properties, leases, and tenants efficiently.</p>
        </div>
        <div className="option-card" onClick={() => navigate("/register/tenant")}>
          <h2>Tenant</h2>
          <p>Find properties, manage your lease, and pay rent online.</p>
        </div>
      </div>
    </div>
  );
}

export default RegisterSelector;

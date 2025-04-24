import React from "react";
import { useNavigate } from "react-router-dom";

const TenantDashboard = () => {
  const navigate = useNavigate();

  const actions = [
    { label: "View My Profile", route: "/profile" },
    { label: "View My Flat Details", route: "/my-flat" },
    { label: "View Rent History", route: "/rent-history" },
    { label: "Raise Issue/Complaint", route: "/raise-issue" },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Tenant Dashboard</h1>
      {actions.map((action, index) => (
        <div key={index} style={styles.card}>
          <span>{action.label}</span>
          <button style={styles.button} onClick={() => navigate(action.route)}>
            Go
          </button>
        </div>
      ))}
      <button style={styles.logoutButton} onClick={() => navigate("/logout")}>
        Logout
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    maxWidth: "600px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  title: {
    fontSize: "1.8rem",
    textAlign: "center",
    marginBottom: "1rem",
  },
  card: {
    padding: "1rem",
    border: "1px solid #ccc",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    padding: "0.5rem 1rem",
    backgroundColor: "#4f46e5",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  logoutButton: {
    padding: "0.5rem 1rem",
    backgroundColor: "#dc2626",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "1rem",
  },
};

export default TenantDashboard;

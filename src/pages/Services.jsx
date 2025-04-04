import React from "react";
import "../styles/services.css"; // Adjust the path as necessary

function Services() {
  const services = [
    {
      title: "Property Management",
      description: "Efficiently manage multiple properties, track availability, and organize listings in one platform."
    },
    {
      title: "Lease Agreement Management",
      description: "Generate, manage, and store digital lease agreements securely with easy access for landlords and tenants."
    },
    {
      title: "Tenant Management",
      description: "Keep detailed tenant records, track communication history, and manage tenant profiles seamlessly."
    },
    {
      title: "Monthly Payment Tracking",
      description: "Monitor rent payments, send reminders, and maintain a history of all transactions automatically."
    },
    {
      title: "Maintenance Requests",
      description: "Allow tenants to raise maintenance issues and track request status until resolution."
    },
    {
      title: "Reporting & Analytics",
      description: "Get real-time insights into payments, occupancy, and tenant behavior through interactive dashboards."
    }
  ];

  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <p className="intro-text">
        We offer a complete suite of tools to simplify and streamline property rental and management operations.
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;

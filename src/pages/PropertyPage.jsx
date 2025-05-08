import React from 'react';
import '../styles/property.css';

const PropertyPage = () => {
  // Sample property data
  const property = {
    name: "Luxury Apartment in Mumbai",
    details: "3 beds, 2 baths, 1200 sq ft, located in Bandra West, Mumbai.",
    numberOfFlats: 24,
    images: [
      "/images/apartment1.jpg",
      "/images/apartment2.jpg",
    ],
    tenants: [
      { id: 1, name: "John Doe", phone: "9876543210" },
      { id: 2, name: "Jane Smith", phone: "9123456780" },
      { id: 3, name: "Alice Johnson", phone: "9988776655" }
    ]
  };

  return (
    <div className="property-page-container">
      <div className="property-content-left">
        <h2 className="property-page-heading">{property.name}</h2>
        <p className="property-page-description">
          {property.details}
        </p>
        <ul className="property-bullets">
          <li>Number of flats: {property.numberOfFlats}</li>
        </ul>

        <div className="tenants-header-wrapper">
          <div className="tenants-header">
            <h3 className="tenants-heading">Tenants</h3>
            <button className="add-tenant-button">+ Add Tenant</button>
          </div>
        </div>
        <table className="tenants-table">
          <thead>
            <tr>
              <th>Tenant ID</th>
              <th>Name</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {property.tenants.map(tenant => (
              <tr key={tenant.id}>
                <td>{tenant.id}</td>
                <td>{tenant.name}</td>
                <td>{tenant.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="property-content-right">
        {property.images.map((imgSrc, index) => (
          <img key={index} src={imgSrc} alt={`Property image ${index + 1}`} className="property-image" />
        ))}
      </div>
    </div>
  );
};

export default PropertyPage;
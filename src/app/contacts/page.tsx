import CalendlyWidget from "@/components/Calendly";
import ContactForm from "@/components/forms/ContactForm";
import GoogleMapComponent from "@/components/map/GoogleMap";
import PageHeader from "@/components/pageheaders/PageHeader";
import TwoLineTitle from "@/components/titles/TwoLineTitle";
import React from "react";

const ContactsPage: React.FC = () => {
  return (
    <div>
      <PageHeader title="Contact Us" />
      <div className="contact-page">
        <div className="contact-section">
          <ContactForm />
        </div>
        <div className="contact-section">
          <TwoLineTitle
            main="Book an Appointment"
            des="Book an appointment with us to discuss your trip"
          />
          <CalendlyWidget />
        </div>
        <div className="map-container">
          <GoogleMapComponent />
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;

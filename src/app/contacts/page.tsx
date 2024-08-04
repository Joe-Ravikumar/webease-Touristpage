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
      <div className="">
        <div className="m-10 p-10 ">
          <ContactForm />
        </div>
        <div className="">
          <TwoLineTitle
            main="Book an Appointment"
            des="Book an appointment with us to discuss your trip"
          />
          <CalendlyWidget />
        </div>
        <div className="">
          <GoogleMapComponent />
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;

import React from "react";

const PageHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <header
      className="page-header bg-cover bg-center h-64 flex items-center justify-center"
      style={{ backgroundImage: "url(/images/header-bg.jpg)" }}
    >
      <h1 className="text-white text-5xl font-bold">{title}</h1>
    </header>
  );
};

export default PageHeader;

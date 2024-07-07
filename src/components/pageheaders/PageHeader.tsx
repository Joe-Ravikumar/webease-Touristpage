import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string; // Optional subtitle
  backgroundImage?: string; // Optional custom background image
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  backgroundImage,
}) => {
  return (
    <header
      className="page-header bg-cover bg-center h-64 flex flex-col items-center justify-center text-center p-4"
      style={{
        backgroundImage: `url(${backgroundImage || "/images/header-bg.jpg"})`,
      }}
    >
      <h1 className="text-white text-5xl font-bold mb-2">{title}</h1>
      {subtitle && <p className="text-white text-lg">{subtitle}</p>}
    </header>
  );
};

export default PageHeader;

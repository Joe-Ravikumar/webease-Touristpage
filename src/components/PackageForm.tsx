import React, { useState } from "react";

interface PackageDetails {
  name: string;
  description: string;
  price: string;
}

const PackageForm: React.FC = () => {
  const [packageDetails, setPackageDetails] = useState<PackageDetails>({
    name: "",
    description: "",
    price: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPackageDetails({ ...packageDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(packageDetails); // handle this with an API
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Package Name"
        onChange={handleChange}
        className="block w-full p-2 border"
      />
      <textarea
        name="description"
        placeholder="Package Description"
        onChange={handleChange}
        className="block w-full p-2 border"
      ></textarea>
      <input
        type="text"
        name="price"
        placeholder="Price"
        onChange={handleChange}
        className="block w-full p-2 border"
      />
      <button
        type="submit"
        className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Create Package
      </button>
    </form>
  );
};

export default PackageForm;

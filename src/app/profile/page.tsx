"use client";

import { useEffect, useState } from "react";
import { useAppSelector } from "@/hooks/reduxHooks";
import Loading from "../loading";
import ProfileCard from "@/components/cards/ProfileCard";
import SettingsForm from "@/components/forms/SettingsForm";
import PasswordForm from "@/components/forms/PasswordForm";
import Login from "../login/page";

const Profile: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!user) {
    return <Login />;
  }
  if (!isClient) {
    return <Loading />;
  }
  return (
    <div className="xl:ml-[287px]">
      <div className="px-8 min-h-screen">
        <div className="bg-slate-100  flex flex-col items-center">
          <div className="sm:[400px] md:w-[600px] lg:w-[900px]">
            {/* profile  */}
            <ProfileCard user={user} />
            {/* Settings */}
            <SettingsForm user={user} />
            {/* Settings */}
            <PasswordForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

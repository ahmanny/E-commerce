import PageTitle from "@/components/auth/PageTitle";
import ForgottenpasswForm from "@/components/auth/ForgottenpasswForm";
import React from "react";

export default function page() {
  return (
    <div>
      <PageTitle title="Forgotten Password" />
      <ForgottenpasswForm />
    </div>
  );
}

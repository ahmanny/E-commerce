import PageTitle from "@/components/auth/PageTitle";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center">
      <PageTitle title="Reset password" />
      <ResetPasswordForm />
    </div>
  );
}

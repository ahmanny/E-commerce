import PageTitle from "@/components/AdminPageTitle";
import SignUpForm from "@/components/auth/SignUpForm";

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center">
      <SignUpForm />
    </div>
  );
}

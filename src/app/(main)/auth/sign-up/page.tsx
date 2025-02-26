import PageTitle from "@/components/app/PageTitle";
import SignUpForm from "@/components/auth/SignUpForm";

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center">
      <SignUpForm />
    </div>
  );
}

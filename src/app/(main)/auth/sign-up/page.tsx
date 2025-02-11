import PageTitle from "@/components/auth/PageTitle";
import SignUpForm from "@/components/auth/SignUpForm";

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center">
      <PageTitle title="Sign up" />
      <SignUpForm />
    </div>
  );
}

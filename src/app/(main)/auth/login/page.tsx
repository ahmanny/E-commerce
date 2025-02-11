import PageTitle from "@/components/auth/PageTitle";
import LoginForm from "@/components/auth/LoginForm";

export default function loginPage() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <PageTitle title="Login" />
      <LoginForm />
    </div>
  );
}

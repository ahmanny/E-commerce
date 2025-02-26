import PageTitle from "@/components/app/PageTitle";
import LoginForm from "@/components/auth/LoginForm";

export default function loginPage() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <LoginForm />
    </div>
  );
}

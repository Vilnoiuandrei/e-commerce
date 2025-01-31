import SignIn from "../_components/SignIn";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
      <p>Please log in to view your account.</p>
      <SignIn />
    </div>
  );
}

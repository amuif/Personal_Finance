import { createFileRoute, Link } from '@tanstack/react-router';
import { LoginForm } from '@/components/login-form';
import { MoveLeftIcon } from 'lucide-react';
import { useState } from 'react';
import SignUpForm from '@/components/signup-form';
import LoadingComponent from '@/components/loading-component';

export const Route = createFileRoute('/login')({
  component: LoginPage,
  pendingComponent: LoadingComponent,
});

export default function LoginPage() {
  const [showLogIn, setShowLogIn] = useState(true);
  return (
    <div className="grid bg-gradient-to-br from-gray-50 via-white to-gray-50 min-h-svh lg:grid-cols-2">
      <div className="flex relative flex-col gap-4 p-3 items-center justify-center ">
        <div className="flex absolute gap-2 w-full top-5 left-5">
          <Link to="/" className="flex items-center gap-2 font-medium">
            <div className=" text-gray-500 dark:text-white/80 flex">
              <MoveLeftIcon
                width={20}
                className="font-extrabold flex items-center  justify-center"
              />
            </div>
            Home
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full max-w-xs transition-all duration-1000">
            {showLogIn ? (
              <LoginForm setShowLogIn={setShowLogIn} />
            ) : (
              <SignUpForm setShowLogIn={setShowLogIn} />
            )}
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src={`/images/login_dark.jpg`}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.9] "
        />
      </div>
    </div>
  );
}

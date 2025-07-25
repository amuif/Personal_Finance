import { createFileRoute } from '@tanstack/react-router';
import { LoginForm } from '@/components/signup/login-form';
import { useState } from 'react';
import SignUpForm from '@/components/signup/signup-form';
import LoadingComponent from '@/components/loading-component';

export const Route = createFileRoute('/login')({
  component: LoginPage,
  pendingComponent: LoadingComponent,
});

export default function LoginPage() {
  const [showLogIn, setShowLogIn] = useState(true);
  return (
    <div className="grid   min-h-svh lg:grid-cols-2">
      <div className="flex relative flex-col gap-4 p-3 items-center justify-center ">
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

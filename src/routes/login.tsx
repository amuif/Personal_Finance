import { createFileRoute, Link } from '@tanstack/react-router';
import { LoginForm } from '@/components/login-form';
import { MoveLeftIcon } from 'lucide-react';

export const Route = createFileRoute('/login')({
  component: LoginPage,
});

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex  gap-2 justify-start">
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
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/images/login.png"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}

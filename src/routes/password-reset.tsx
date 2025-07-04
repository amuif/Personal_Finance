import { createFileRoute, useNavigate } from '@tanstack/react-router';

export const Route = createFileRoute('/password-reset')({
  component: PasswordReset,
});

import { ArrowLeft, Shield, Key } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useForm, type AnyFieldApi } from '@tanstack/react-form';
import { Input } from '@/components/ui/input';
import { supabase } from '@/supabase/supabase-client';
import { toast } from 'sonner';

export default function PasswordReset() {
  const navigate = useNavigate();
  const floatingElements = [
    { icon: '🔐', top: '15%', left: '10%', delay: '0s', size: 'text-2xl' },
    { icon: '🛡️', top: '25%', right: '15%', delay: '1s', size: 'text-xl' },
    { icon: '🔑', bottom: '30%', left: '8%', delay: '2s', size: 'text-lg' },
    { icon: '✉️', top: '60%', right: '12%', delay: '0.5s', size: 'text-xl' },
    {
      icon: '🔒',
      bottom: '20%',
      right: '20%',
      delay: '1.5s',
      size: 'text-2xl',
    },
  ];

  function FieldInfo({ field }: { field: AnyFieldApi }) {
    return (
      <>
        {field.state.meta.isTouched && !field.state.meta.isValid ? (
          <small className="text-destructive">
            {field.state.meta.errors.join(',')}
          </small>
        ) : null}
      </>
    );
  }

  const form = useForm({
    defaultValues: {
      email: '',
    },
    onSubmit: async ({ value }) => {
      console.log(value);
      const { error } = await supabase.auth.resetPasswordForEmail(value.email, {
        redirectTo: `${import.meta.env.VITE_SITE_URL}/update-password`,
      });
      if (error) toast.error('Error sending password reset link');
      toast.success('Successfully sent password reset link');
    },
  });

  function handleGoingBack() {
    navigate({ to: '/login' });
  }

  return (
    <div className="min-h-screen  relative overflow-hidden">
      {floatingElements.map((element, index) => (
        <div
          key={index}
          className="absolute hidden lg:block pointer-events-none"
          style={{
            top: element.top,
            bottom: element.bottom,
            left: element.left,
            right: element.right,
            animationDelay: element.delay,
          }}
        >
          <div
            className={`${element.size} opacity-20 animate-bounce`}
            style={{
              animationDelay: element.delay,
              animationDuration: '4s',
            }}
          >
            {element.icon}
          </div>
        </div>
      ))}

      <div className="absolute top-20 left-20 w-4 h-4 bg-[#194e3e] rounded-full opacity-30 animate-bounce hidden lg:block" />
      <div
        className="absolute top-40 right-32 w-3 h-3 bg-[#4a9d7a] rounded-full opacity-40 animate-bounce hidden lg:block"
        style={{ animationDelay: '0.5s' }}
      />
      <div
        className="absolute bottom-32 left-32 w-5 h-5 bg-[#67c095] rounded-full opacity-25 animate-bounce hidden lg:block"
        style={{ animationDelay: '1s' }}
      />

      <div className="container mx-auto px-4 md:px-6 max-w-2xl min-h-screen flex items-center justify-center">
        <div className="w-full">
          <div className="text-center space-y-6 mb-8">
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#194e3e] to-[#2d7a5f] flex items-center justify-center text-white shadow-2xl">
                  <Key className="w-12 h-12" />
                </div>

                <div className="absolute inset-0 rounded-full border-2 border-[#194e3e] opacity-20 animate-ping" />
                <div
                  className="absolute inset-0 rounded-full border border-[#4a9d7a] opacity-30 animate-pulse"
                  style={{ animationDelay: '0.5s' }}
                />

                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#4a9d7a] to-[#67c095] rounded-full flex items-center justify-center text-white shadow-lg animate-bounce">
                  <Shield className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="absolute top-5 left-5">
              <div className="mt-8 text-center">
                <Button
                  variant="ghost"
                  onClick={() => handleGoingBack()}
                  className="text-gray-900 dark:text-gray-400 hover:text-[#194e3e] hover:bg-[#194e3e]/10 rounded-full font-medium group"
                >
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Back to Login
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-400">
                Reset Your
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#194e3e] to-[#4a9d7a]">
                  Password
                </span>
              </h1>

              <p className="text-lg text-gray-900 dark:text-gray-400 leading-relaxed">
                Enter your email address and we'll send you a secure link to
                reset your password.
              </p>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900 dark:text-gray-400 mb-2"
              >
                Email Address
              </label>
              <div className="flex flex-col gap-3">
                <form.Field
                  name="email"
                  validators={{
                    onChange: ({ value }) =>
                      !value
                        ? 'Email is required'
                        : !value.includes('@')
                          ? 'email must include @'
                          : undefined,
                    onChangeAsyncDebounceMs: 500,
                    onChangeAsync: async ({ value }) => {
                      await new Promise((resolve) => setTimeout(resolve, 1000));
                      return (
                        value.includes('error') &&
                        'No "error" allowed in first name'
                      );
                    },
                  }}
                  children={(field) => {
                    return (
                      <>
                        <Input
                          id={field.name}
                          name={field.name}
                          placeholder="example@example.com"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                        <FieldInfo field={field} />
                      </>
                    );
                  }}
                />
                <form.Subscribe
                  children={() => (
                    <>
                      <Button className="w-full" type="submit">
                        Send reset link
                      </Button>
                    </>
                  )}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

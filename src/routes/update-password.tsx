import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { Lock, Key, ArrowLeft } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { type AnyFieldApi, useForm } from '@tanstack/react-form';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { supabase } from '@/supabase/supabase-client';
import { toast } from 'sonner';
import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';

export const Route = createFileRoute('/update-password')({
  component: PasswordRecovery,
});

export default function PasswordRecovery() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const floatingElements = [
    { icon: '🔐', top: '15%', left: '10%', delay: '0s', size: 'text-2xl' },
    { icon: '🛡️', top: '25%', right: '15%', delay: '1s', size: 'text-xl' },
    { icon: '🔑', bottom: '30%', left: '8%', delay: '2s', size: 'text-lg' },
    { icon: '✅', top: '60%', right: '12%', delay: '0.5s', size: 'text-xl' },
    {
      icon: '🔒',
      bottom: '20%',
      right: '20%',
      delay: '1.5s',
      size: 'text-2xl',
    },
  ];
  function handleGoingBack() {
    navigate({ to: '/login' });
  }

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
      password: '',
      matchingPassword: '',
    },
    onSubmit: async ({ value }) => {
      const { error } = await supabase.auth.updateUser({
        password: value.password,
      });
      if (error)
        toast.error(<p className="absolute">Error creating new password</p>);
      toast(<p className="absoulte">Password updated successfully</p>);
      navigate({ to: '/' });
    },
  });
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
          <div className=" rounded-3xl p-8 md:p-12 ">
            <div className="text-center space-y-6 mb-8">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#194e3e] to-[#2d7a5f] flex items-center justify-center text-white shadow-2xl">
                    <Lock className="w-12 h-12" />
                  </div>

                  <div className="absolute inset-0 rounded-full border-2 border-[#194e3e] opacity-20 animate-ping" />
                  <div
                    className="absolute inset-0 rounded-full border border-[#4a9d7a] opacity-30 animate-pulse"
                    style={{ animationDelay: '0.5s' }}
                  />

                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#4a9d7a] to-[#67c095] rounded-full flex items-center justify-center text-white shadow-lg animate-bounce">
                    <Key className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="absolute top-5 left-0">
                <div className="mt-8 text-center">
                  <Button
                    variant="ghost"
                    onClick={() => handleGoingBack()}
                    className="text-gray-900 dark:text-gray-400 hover:text-[#194e3e] hover:bg-[#194e3e]/10 rounded-full font-medium group"
                  >
                    <ArrowLeft className="w-4 h-4  mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Login
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-400">
                  Create Your
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#194e3e] to-[#4a9d7a]">
                    New Password
                  </span>
                </h1>

                <p className="text-sm lg:text-base text-gray-900 dark:text-gray-400 leading-relaxed">
                  Choose a strong password to secure your account. Make sure
                  it's something you'll remember.
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
              <form.Field
                name="password"
                validators={{
                  onChange: ({ value }) =>
                    !value
                      ? 'Password is required'
                      : value.length < 6
                        ? 'Password must be at least 6 characters'
                        : undefined,
                  onChangeAsyncDebounceMs: 500,
                  onChangeAsync: async ({ value }) => {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    return (
                      value.includes('error') &&
                      'No "error" allowed in password'
                    );
                  },
                }}
                children={(field) => {
                  return (
                    <div className="flex flex-col gap-2">
                      <Label htmlFor={field.name}>New password:</Label>
                      <Input
                        id={field.name}
                        type={`${showPassword ? 'text' : 'password'}`}
                        name={field.name}
                        placeholder="new password"
                        value={field.state.value}
                        autoComplete="off"
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                      <FieldInfo field={field} />
                    </div>
                  );
                }}
              />
              <form.Field
                name="matchingPassword"
                validators={{
                  onChangeListenTo: ['password'],
                  onChange: ({ value, fieldApi }) => {
                    if (value !== fieldApi.form.getFieldValue('password')) {
                      return 'Passwords do not match';
                    }
                    return undefined;
                  },
                  onChangeAsyncDebounceMs: 500,
                  onChangeAsync: async ({ value }) => {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    return (
                      value.includes('error') &&
                      'No "error" allowed in password'
                    );
                  },
                }}
                children={(field) => {
                  return (
                    <div className="flex flex-col gap-2">
                      <Label htmlFor={field.name}>Re-type the password:</Label>
                      <Input
                        id={field.name}
                        name={field.name}
                        type={`${showPassword ? 'text' : 'password'}`}
                        value={field.state.value}
                        autoComplete="off"
                        onBlur={field.handleBlur}
                        placeholder="re-type same password"
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                      <FieldInfo field={field} />
                    </div>
                  );
                }}
              />
              <div className="flex gap-2 items-center">
                <Checkbox onClick={() => setShowPassword(!showPassword)} />{' '}
                <Label>Show password</Label>
              </div>

              <form.Subscribe
                children={() => (
                  <Button className="w-full">Change password</Button>
                )}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

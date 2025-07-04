import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from '@tanstack/react-form';
import { supabase } from '@/supabase/supabase-client';
import { toast } from 'sonner';
import { useState, type SetStateAction } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { Checkbox } from '@/components/ui/checkbox';
export function LoginForm({
  className,
  setShowLogIn,
  ...props
}: {
  setShowLogIn: React.Dispatch<SetStateAction<boolean>>;
} & React.ComponentProps<'form'>) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showErorr, setShowError] = useState('');

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },

    onSubmit: async () => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: form.getFieldValue('email'),
        password: form.getFieldValue('password'),
      });
      if (error) {
        if (error.message === 'Invalid login credentials') {
          setShowError('Wrong email or password');
        } else {
          console.error('Login error:', error.message);
        }
        return;
      }
      setShowError('');
      toast.message(`Welcome back, ${data.session.user.email}`);
      navigate({ to: '/' });
      form.reset();
    },
  });
  async function handleOAuth() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    if (error) return toast.error('Error signing user');
    console.log('google.sign in', data);
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className={cn('flex flex-col gap-6', className)}
        {...props}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold uppercase">Welcome back</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email below to login to your account
          </p>
        </div>
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <form.Field
            name="email"
            validators={{
              onChange: ({ value }) =>
                !value ? 'An email is required' : undefined,
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: async ({ value }) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                return value.includes('error') && 'No "error" allowed in email';
              },
            }}
            children={(field) => {
              return (
                <div className="flex flex-col gap-1.5">
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@example.com "
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="autofill:bg-input/30"
                  />
                  {!field.state.meta.isValid && (
                    <small className="text-destructive">
                      {field.state.meta.errors.join(',')}
                    </small>
                  )}
                </div>
              );
            }}
          />{' '}
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link
              to="/password-reset"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
          <form.Field
            name="password"
            validators={{
              onChange: ({ value }) =>
                !value
                  ? 'Password is required'
                  : value.length < 6
                    ? 'Password must be greater than 6 characters'
                    : undefined,
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: async ({ value }) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                return (
                  value.includes('error') && 'No "error" allowed in password'
                );
              },
            }}
            children={(field) => {
              return (
                <div className="flex flex-col gap-3">
                  <Input
                    id="password"
                    type={`${showPassword ? 'text' : 'password'}`}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="Enter your password here"
                    autoComplete="off"
                  />
                  <div className="flex gap-2 items-center">
                    <Checkbox onClick={() => setShowPassword(!showPassword)} />{' '}
                    <Label>Show password</Label>
                  </div>
                  {showErorr && (
                    <small className="py-0 text-destructive">{showErorr}</small>
                  )}

                  {!field.state.meta.isValid && field.state.meta.isTouched && (
                    <small className="text-destructive">
                      {field.state.meta.errors.join(',')}
                    </small>
                  )}
                </div>
              );
            }}
          />
        </div>
        <form.Subscribe
          children={() => (
            <Button type="submit" className="w-full">
              Login
            </Button>
          )}
        />
      </form>
      <div className="grid gap-6 py-2">
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-black dark:text-muted-foreground relative z-10 px-2">
            Or continue with
          </span>
        </div>
        <Button
          variant="outline"
          onClick={handleOAuth}
          className="w-full cursor-pointer"
        >
          <svg
            viewBox="-0.5 0 48 48"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <title>Google-color</title> <desc>Created with Sketch.</desc>{' '}
              <defs> </defs>{' '}
              <g
                id="Icons"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                {' '}
                <g id="Color-" transform="translate(-401.000000, -860.000000)">
                  {' '}
                  <g id="Google" transform="translate(401.000000, 860.000000)">
                    {' '}
                    <path
                      d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                      id="Fill-1"
                      fill="#FBBC05"
                    >
                      {' '}
                    </path>{' '}
                    <path
                      d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                      id="Fill-2"
                      fill="#EB4335"
                    >
                      {' '}
                    </path>{' '}
                    <path
                      d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                      id="Fill-3"
                      fill="#34A853"
                    >
                      {' '}
                    </path>{' '}
                    <path
                      d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                      id="Fill-4"
                      fill="#4285F4"
                    >
                      {' '}
                    </path>{' '}
                  </g>{' '}
                </g>{' '}
              </g>{' '}
            </g>
          </svg>
          Google{' '}
        </Button>
      </div>
      <div className="text-center flex gap-2 mx-auto items-center justify-center text-sm">
        Don&apos;t have an account?{' '}
        <p
          onClick={() => setShowLogIn(false)}
          className="underline underline-offset-4 cursor-pointer"
        >
          Sign up
        </p>
      </div>
    </div>
  );
}

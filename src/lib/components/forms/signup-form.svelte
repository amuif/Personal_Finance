<script lang="ts">
	import { cn } from "$lib/utils.js";
	import { Button } from "$lib/components/ui/button/index.js";
	import * as Card from "$lib/components/ui/card/index.js";
	import * as Field from "$lib/components/ui/field/index.js";
	import { Input } from "$lib/components/ui/input/index.js";
	import type { HTMLAttributes } from "svelte/elements";
    import { authClient } from "../../../auth-client";
    import { toast } from "svelte-sonner";
    import { goto } from "$app/navigation";

	let { class: className, ...restProps }: HTMLAttributes<HTMLDivElement> = $props();
  let fullName = $state('');
	let email = $state('');
	let password = $state('');
	let confirmPassword = $state('');

  async function handleSubmit() {
		try {
			const { data, error } = await authClient.signUp.email({
				name: fullName,
				email: email,
				password: password
			});
			if (data?.user) {
				toast.success(`Hello, ${data.user.name} to Alem Guzo`);
				goto('/dashboard');
			}
			if (error) {
				toast.error(`Error, ${error.message}`);
			}
		} catch (error) {
			console.log('Error at Signing up user,', error);
		}
    }

  async function handleGoogleSignup() {
		try {
			await authClient.signIn.social({ provider: 'google', callbackURL: '/dashboard' });
		} catch (error) {
			console.log('Errror occured when signing up with google, ', error);
		}
}

    </script>

<div class={cn("flex flex-col gap-6", className)} {...restProps}>
	<Card.Root class='bg-transparent border-none'>
		<Card.Header class="text-center">
			<Card.Title class="text-xl">Create your account</Card.Title>
			<Card.Description>Enter your email below to create your account</Card.Description>
		</Card.Header>
		<Card.Content>
			<form>
				<Field.Group>
					<Field.Field>
						<Field.Label for="name">Full Name</Field.Label>
						<Input id="name" type="text" placeholder="John Doe" required bind:value={fullName} />
					</Field.Field>
					<Field.Field>
						<Field.Label for="email">Email</Field.Label>
						<Input id="email" type="email" placeholder="m@example.com" required bind:value={email} />
					</Field.Field>
					<Field.Field>
						<Field.Field class="grid grid-cols-2 gap-4">
							<Field.Field>
								<Field.Label for="password">Password</Field.Label>
								<Input id="password" type="password" required bind:value={password} />
							</Field.Field>
							<Field.Field>
								<Field.Label for="confirm-password">Confirm Password</Field.Label>
								<Input id="confirm-password" type="password" required bind:value={confirmPassword}/>
							</Field.Field>
						</Field.Field>
						<Field.Description>Must be at least 8 characters long.</Field.Description>
					</Field.Field>
					<Field.Field>
						<Button type="submit" onclick={handleSubmit}>Create Account</Button>
			<Field.FieldSeparator class='py-4'>Or</Field.FieldSeparator>
			<Field.Field class="grid gap-4 pt-4">
				<Button variant="outline" type="button" onclick={handleGoogleSignup}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path
							d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
							fill="currentColor"
						/>
					</svg>
					Continue with Google
				</Button>
			</Field.Field>
						<Field.Description class="text-center">
							Already have an account? <a href="/login">Sign in</a>
						</Field.Description>
					</Field.Field>
				</Field.Group>
			</form>
		</Card.Content>
	</Card.Root>
	<Field.Description class="px-6 text-center">
		By clicking continue, you agree to our <a href="#/">Terms of Service</a>
		and <a href="#/">Privacy Policy</a>.
	</Field.Description>
</div>

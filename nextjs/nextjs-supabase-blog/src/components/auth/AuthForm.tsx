
"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import styles from "./AuthForm.module.css";

interface AuthFormProps {
  mode: "login" | "signup";
}

export default function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isLogin = mode === "login";

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");
    setIsSubmitting(true);

    try {
      const supabase = createClient();
    
      // if user login, do login operation instead
      if (isLogin) {
        // do password sign-in, http request to supabase server vai supabase browser-client
        // if login not successful, it will return this object { error: AuthError, data : null }
        const { error } =
          await supabase.auth.signInWithPassword({
            email,
            password,
          });

        if (error) {
          throw error;
        }

        // if successful, supabase will response back with set-cookie header, for browser to store
        // and redirect user to appropriate page by override the current page in browser history, leaving no history
        router.replace("/create");
        router.refresh();

        return;
      }

      // else, do the sign-up operation
      // do sign-up, http request to supabase server vai supabase browser-client
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback?next=/create`,
        },
      });

      if (error) {
        throw error;
      }

      // checking for session in data
      if (data.session) {
        router.replace("/create");
        router.refresh();

        return;
      }

      setSuccessMessage(
        "Registration successful! Please check your email to confirm your account."
      );
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          {isLogin ? "Welcome Back" : "Create Your Account"}
        </h1>

        <p className={styles.description}>
          {isLogin
            ? "Log in to manage your blog."
            : "Join us and start publishing your ideas."}
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="email">Email Address</label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="password">Password</label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              autoComplete={
                isLogin ? "current-password" : "new-password"
              }
              minLength={8}
              required
            />

            {!isLogin && (
              <small>Use at least 8 characters.</small>
            )}
          </div>

          {errorMessage && (
            <p className={styles.error} role="alert">
              {errorMessage}
            </p>
          )}

          {successMessage && (
            <p className={styles.success} role="status">
              {successMessage}
            </p>
          )}

          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "Please wait..."
              : isLogin
                ? "Log In"
                : "Create Account"}
          </button>
        </form>

        <p className={styles.footer}>
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}

          {" "}

          <Link href={isLogin ? "/signup" : "/login"}>
            {isLogin ? "Sign Up" : "Log In"}
          </Link>
        </p>
      </div>
    </div>
  );
}

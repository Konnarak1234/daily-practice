
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LogoutButton() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLogout() {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const supabase = createClient();

      const { error } = await supabase.auth.signOut();

      if (error) {
        throw error;
      }

      router.replace("/");
      router.refresh();
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Unable to log out.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleLogout}
        disabled={isLoading}
        style={{
          padding: "11px 20px",
          border: "none",
          borderRadius: "7px",
          backgroundColor: "#dc2626",
          color: "#ffffff",
          fontWeight: 600,
          cursor: isLoading ? "not-allowed" : "pointer",
        }}
      >
        {isLoading ? "Logging out..." : "Log Out"}
      </button>

      {errorMessage && (
        <p
          role="alert"
          style={{
            marginTop: "10px",
            color: "#dc2626",
          }}
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
}

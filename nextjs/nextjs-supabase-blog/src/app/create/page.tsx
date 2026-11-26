
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import LogoutButton from "@/components/auth/LogoutButton";

export default async function CreatePage() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  // Never trust an unverified session.
  if (error || !user) {
    redirect("/login");
  }

  return (
    <main className="container">
      <section style={{ paddingTop: "70px" }}>
        <h1 className="page-heading">
          Welcome to your dashboard
        </h1>

        <p className="muted">
          You are successfully authenticated.
        </p>

        <div style={{ marginTop: "24px" }}>
          <p>
            <strong>Email:</strong> {user.email}
          </p>

          <p>
            <strong>User ID:</strong> {user.id}
          </p>
        </div>

        <div style={{ marginTop: "28px" }}>
          <LogoutButton />
        </div>
      </section>
    </main>
  );
}

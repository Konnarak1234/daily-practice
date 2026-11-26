
import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);

  const code = requestUrl.searchParams.get("code");
  const requestedNext = requestUrl.searchParams.get("next");

  // Prevent open redirects to external websites.
  const nextPath =
    requestedNext &&
    requestedNext.startsWith("/") &&
    !requestedNext.startsWith("//")
      ? requestedNext
      : "/create";

  if (code) {
    const supabase = await createClient();

    // this where api call for OTP exchange for session
    const { error } =
      await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      return NextResponse.redirect(
        new URL(nextPath, requestUrl.origin)
      );
    }
  }

  return NextResponse.redirect(
    new URL("/login?error=auth_callback", requestUrl.origin)
  );
}

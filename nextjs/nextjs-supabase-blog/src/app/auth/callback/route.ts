
import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  // create a js URL() object from valid url, that provide operations to work with url string
  const requestUrl = new URL(request.url);

  // get the query param's value
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

    // this where api call for PKCE code exchange for session
    // supabase client will provide essentail information in cookies, to the supabase PKCE code exchange endpoint
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


// only service-side component can import it, avoid import it in client size component
import "server-only";

import { createClient } from "@/lib/supabase/server";
import type { Post, PostSummary } from "@/lib/types/database";

// Retrieve all posts, newest first.
export async function getPosts(): Promise<PostSummary[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("posts")
    .select("id, title, slug, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to retrieve posts:", error);
    throw new Error("Unable to load blog posts.");
  }

  return data;
}

// Retrieve one post using its unique slug.
export async function getPostBySlug(
  slug: string
): Promise<Post | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    console.error("Failed to retrieve post:", error);
    throw new Error("Unable to load this blog post.");
  }

  return data;
}

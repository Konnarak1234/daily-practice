
export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  created_at: string;
  user_id: string;
}

export type CreatePostInput = {
  title: string;
  slug: string;
  content: string;
};

export type PostSummary = Pick<
  Post,
  "id" | "title" | "slug" | "created_at"
>;

export type Database = {
  public: {
    Tables: {
      posts: {
        Row: Post;

        Insert: {
          id?: string;
          title: string;
          slug: string;
          content: string;
          created_at?: string;
          user_id: string;
        };

        Update: {
          id?: string;
          title?: string;
          slug?: string;
          content?: string;
          created_at?: string;
          user_id?: string;
          // alternative to [key in keyof Post]? : Post[key]
        };

        Relationships: [];
      };
    };

    Views: {
      [_ in never]: never;
    };

    Functions: {
      [_ in never]: never;
    };

    Enums: {
      [_ in never]: never;
    };

    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

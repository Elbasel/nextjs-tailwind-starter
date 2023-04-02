import { createClient } from "@supabase/supabase-js";

interface Client {
  url?: string;
  key?: string;
}

const client: Client = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL,
  key: process.env.SUPABASE_ANON_KEY,
};

if (!client.url || !client.key) {
  throw new Error("Missing Supabase credentials");
}

export const superbaseClient = createClient(client.url!, client.key!);

export const getLinks = async (url: string) => {
  const { data, error } = await superbaseClient
    .from("links")
    .select()
    .eq("url", url);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const deleteLinks = async (url: string) => {
  const { data, error } = await superbaseClient
    .from("links")
    .delete()
    .eq("url", url);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

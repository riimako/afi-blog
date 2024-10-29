import { createClient } from "../_utils/supabase/server";

export default async function Notes() {
  const supabase = await createClient();
  const { data: infants } = await supabase.from("infants").select();

  return <pre>{JSON.stringify(infants, null, 2)}</pre>;
}

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/auth/login");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-12 items-center">
      <div className="w-full max-w-4xl">
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-sm p-4 rounded-lg">
          <h2 className="font-bold text-xl mb-4 text-green-800 dark:text-green-200">
            Welcome to Public Distribution System
          </h2>
          <p className="text-green-700 dark:text-green-300">
            You are successfully logged in as <strong>{user.email}</strong>
          </p>
        </div>
      </div>

      <div className="w-full max-w-4xl">
        <h3 className="font-bold text-2xl mb-4">Dashboard</h3>
        <div className="grid gap-4">
          <div className="p-6 border rounded-lg bg-card">
            <h4 className="font-semibold text-lg mb-2">User Information</h4>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-medium">Email:</span> {user.email}
              </p>
              <p>
                <span className="font-medium">User ID:</span> {user.id}
              </p>
              <p>
                <span className="font-medium">Created:</span>{" "}
                {new Date(user.created_at).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

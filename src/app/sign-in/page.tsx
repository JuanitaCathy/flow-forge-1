"use client";

import { useUser } from "@/components/auth-provider";
import { GithubIcon } from "lucide-react";
import { useState } from "react";

export default function FlowForge() {
  const user = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const handleSignIn = async () => {
    setIsLoading(true);
    try {
      await user.loginWithGithub();
    } catch (error: any) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="bg-zinc-800 shadow-md rounded-lg p-8">
          <div>
            <button
              type="button"
              onClick={handleSignIn}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              <span className="mr-3">
                <GithubIcon className="h-6 w-6" />
              </span>
              {isLoading ? "Loading..." : "Continue with GitHub"}
            </button>
          </div>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-500"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-zinc-800 text-gray-400 font-semibold">
                  Secure GitHub Authentication
                </span>
              </div>
            </div>

            <div className="mt-6 text-center text-sm text-gray-400">
              {error && <p className="text-red-500">{error.message}</p>}
              <p>
                Flow Forge requires GitHub authentication to manage your
                workflows securely.
              </p>
              <p className="mt-2">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/integrations"
                  className="font-medium text-purple-400 hover:text-purple-300"
                >
                  Learn more about our GitHub integration
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

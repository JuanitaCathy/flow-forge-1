"use client";

import { useUser } from "@/components/auth-provider";
import { useState } from "react";

function Settings() {
  const user = useUser();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground text-sm mt-2">
          Customize your preferences and manage your account settings.
        </p>
      </header>

      <main>
        {/* GitHub Auth Token */}
        <section id="github-token" className="mb-8">
          <h2 className="text-2xl font-bold">GitHub Authentication</h2>
          <div className="mt-4 bg-card p-6 rounded-lg shadow border border-border">
            <p className="text-sm text-muted-foreground mb-4">
              Enter your GitHub personal access token to enable repository
              integrations.
            </p>
            <div className="flex flex-col gap-4">
              <label className="text-sm font-medium" htmlFor="github-token">
                GitHub Token
              </label>
              <div className="flex items-center gap-2">
                <input
                  id="github-token"
                  type="password"
                  placeholder="Enter your GitHub token"
                  className="px-4 w-full py-2 border border-border rounded-lg bg-input text-input-foreground focus:outline-none focus:ring focus:ring-primary/50"
                />
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90">
                  Save
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Discord Webhook URL */}
        <section id="discord-webhook" className="mb-8">
          <h2 className="text-2xl font-bold">Discord Notifications</h2>
          <div className="mt-4 bg-card p-6 rounded-lg shadow border border-border">
            <p className="text-sm text-muted-foreground mb-4">
              Configure your Discord webhook URL to receive notifications.
            </p>
            <div className="flex flex-col gap-4">
              <label className="text-sm font-medium" htmlFor="discord-webhook">
                Discord Webhook URL
              </label>
              <div className="flex items-center gap-2">
                <input
                  id="discord-webhook"
                  type="url"
                  placeholder="Enter your Discord webhook URL"
                  className="px-4 w-full py-2 border border-border rounded-lg bg-input text-input-foreground focus:outline-none focus:ring focus:ring-primary/50"
                />
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90">
                  Save
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Logout Section */}
        <section id="logout" className="mb-8">
          <h2 className="text-2xl font-bold">Logout</h2>
          <div className="mt-4 bg-card p-6 rounded-lg shadow border border-border">
            <p className="text-sm text-muted-foreground mb-4">
              Logout from your account securely.
            </p>
            <button
              disabled={isLoading}
              onClick={() => {
                setIsLoading(true);
                user.logout();
              }}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              {isLoading ? "Logging out..." : "Logout"}
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Settings;

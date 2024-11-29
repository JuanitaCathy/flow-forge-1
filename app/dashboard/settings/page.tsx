function Settings() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground text-sm mt-2">
          Customize your preferences and manage your account settings.
        </p>
      </header>

      <main>
        {/* General Section */}
        <section id="general" className="mb-8">
          <h2 className="text-2xl font-bold">General Settings</h2>
          <div className="mt-4 bg-card p-6 rounded-lg shadow border border-border">
            <p className="text-sm text-muted-foreground">
              Manage basic settings such as your display name, theme, and
              preferences.
            </p>
            {/* Add general settings form/components here */}
          </div>
        </section>

        {/* Account Section */}
        <section id="account" className="mb-8">
          <h2 className="text-2xl font-bold">Account Settings</h2>
          <div className="mt-4 bg-card p-6 rounded-lg shadow border border-border">
            <p className="text-sm text-muted-foreground">
              Update your account information and manage linked accounts.
            </p>
            {/* Add account settings form/components here */}
          </div>
        </section>

        {/* Notifications Section */}
        <section id="notifications" className="mb-8">
          <h2 className="text-2xl font-bold">Notifications</h2>
          <div className="mt-4 bg-card p-6 rounded-lg shadow border border-border">
            <p className="text-sm text-muted-foreground">
              Configure your notification preferences for emails, Discord, and
              in-app alerts.
            </p>
            {/* Add notification settings form/components here */}
          </div>
        </section>

        {/* Integrations Section */}
        <section id="integrations" className="mb-8">
          <h2 className="text-2xl font-bold">Integrations</h2>
          <div className="mt-4 bg-card p-6 rounded-lg shadow border border-border">
            <p className="text-sm text-muted-foreground">
              Manage integrations with GitHub, Discord, and other third-party
              services.
            </p>
            {/* Add integrations settings form/components here */}
          </div>
        </section>

        {/* Security Section */}
        <section id="security" className="mb-8">
          <h2 className="text-2xl font-bold">Security Settings</h2>
          <div className="mt-4 bg-card p-6 rounded-lg shadow border border-border">
            <p className="text-sm text-muted-foreground">
              Update your password, enable 2FA, and manage other security
              settings.
            </p>
            {/* Add security settings form/components here */}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Settings;

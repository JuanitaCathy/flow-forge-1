function Repository() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Repository Name</h1>
        <p className="text-muted-foreground text-sm mt-2">
          A brief description of the repository. Includes key features, purpose,
          or any other relevant information.
        </p>
      </header>

      {/* Repository Overview */}
      <section className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Stars */}
        <div className="bg-card p-6 rounded-lg shadow border border-border">
          <h2 className="text-sm font-medium text-muted-foreground">Stars</h2>
          <p className="text-2xl font-bold mt-2">234</p>
        </div>

        {/* Forks */}
        <div className="bg-card p-6 rounded-lg shadow border border-border">
          <h2 className="text-sm font-medium text-muted-foreground">Forks</h2>
          <p className="text-2xl font-bold mt-2">56</p>
        </div>

        {/* Issues */}
        <div className="bg-card p-6 rounded-lg shadow border border-border">
          <h2 className="text-sm font-medium text-muted-foreground">
            Open Issues
          </h2>
          <p className="text-2xl font-bold mt-2">12</p>
        </div>
      </section>

      {/* Repository Actions */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Actions</h2>
        <div className="flex flex-row gap-4">
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90">
            Create Issue
          </button>
          <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90">
            Pull Request
          </button>
          <button className="px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90">
            View Code
          </button>
        </div>
      </section>

      {/* Recent Activity */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
        <div className="bg-card p-6 rounded-lg shadow border border-border">
          <p className="text-sm text-muted-foreground">
            No recent activity yet. Recent commits, issues, and pull requests
            will appear here.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Repository;

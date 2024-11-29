const WorkflowPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Workflow Manager</h1>
        <p className="text-muted-foreground text-sm mt-2">
          Manage and track your workflows. Automate tasks, monitor progress, and
          review logs.
        </p>
      </header>

      {/* Workflow Overview */}
      <section className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Workflow 1 */}
        <div className="bg-card p-6 rounded-lg shadow border border-border">
          <h2 className="text-lg font-medium">Build Workflow</h2>
          <p className="text-sm text-muted-foreground mt-2">
            Last run: 10 minutes ago • Status:{" "}
            <span className="text-green-500">Success</span>
          </p>
          <button className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90">
            View Details
          </button>
        </div>

        {/* Workflow 2 */}
        <div className="bg-card p-6 rounded-lg shadow border border-border">
          <h2 className="text-lg font-medium">Deploy Workflow</h2>
          <p className="text-sm text-muted-foreground mt-2">
            Last run: 2 hours ago • Status:{" "}
            <span className="text-red-500">Failed</span>
          </p>
          <button className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90">
            Retry
          </button>
        </div>

        {/* Workflow 3 */}
        <div className="bg-card p-6 rounded-lg shadow border border-border">
          <h2 className="text-lg font-medium">Test Workflow</h2>
          <p className="text-sm text-muted-foreground mt-2">
            Last run: 1 day ago • Status:{" "}
            <span className="text-yellow-500">In Progress</span>
          </p>
          <button className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90">
            View Logs
          </button>
        </div>
      </section>

      {/* Workflow Logs/Activity */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Workflow Activity</h2>
        <div className="bg-card p-6 rounded-lg shadow border border-border">
          <p className="text-sm text-muted-foreground">
            Select a workflow to view its logs and recent activity. Logs for the
            last runs will appear here.
          </p>
        </div>
      </section>
    </div>
  );
};

export default WorkflowPage;

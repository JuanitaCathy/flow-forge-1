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
          <ul className="space-y-4">
            <li className="text-sm text-muted-foreground">
              <span className="text-green-500 font-bold">[Success]</span> Build
              Workflow completed at 10:15 AM.
            </li>
            <li className="text-sm text-muted-foreground">
              <span className="text-red-500 font-bold">[Failed]</span> Deploy
              Workflow failed at 8:45 AM. Error: "Invalid configuration file."
            </li>
            <li className="text-sm text-muted-foreground">
              <span className="text-yellow-500 font-bold">[In Progress]</span>{" "}
              Test Workflow is currently running since 7:30 AM.
            </li>
            <li className="text-sm text-muted-foreground">
              <span className="text-green-500 font-bold">[Success]</span> Build
              Workflow completed yesterday at 4:00 PM.
            </li>
            <li className="text-sm text-muted-foreground">
              <span className="text-red-500 font-bold">[Failed]</span> Deploy
              Workflow failed yesterday at 1:30 PM. Error: "Network timeout."
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default WorkflowPage;

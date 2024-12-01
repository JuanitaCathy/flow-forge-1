const vscode = require('vscode');
const express = require('express');

// Hardcoded GitHub token (should be secured in .env in production)
const token = ''; // Replace with your GitHub token

let fetch; // Initialize fetch variable
(async () => {
    fetch = (await import('node-fetch')).default; // Dynamically import node-fetch for ES module compatibility
})();

function activate(context) {
    const app = express();
    app.use(express.json());

    // Output Channel for Logs
    const logOutputChannel = vscode.window.createOutputChannel('Kestra Logs');
    logOutputChannel.show(true);

    if (!token) {
        vscode.window.showErrorMessage('GitHub token is required. Please define it in the code or use a secure method.');
        console.error('GitHub token is missing.');
        return;
    }

    // Command: Fetch GitHub Workflows for Any Repo
    const fetchWorkflowsCommand = vscode.commands.registerCommand('kestra-notifier.fetchWorkflows', async () => {
        const repo = await vscode.window.showInputBox({ prompt: 'Enter the GitHub repository (e.g., owner/repo):' });

        if (!repo) {
            vscode.window.showErrorMessage('Repository name is required.');
            return;
        }

        try {
            const response = await fetch(`https://api.github.com/repos/${repo}/actions/runs`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                vscode.window.showErrorMessage(`Failed to fetch workflows for ${repo}. HTTP ${response.status}`);
                console.error('Response Status:', response.status);
                return;
            }

            const data = await response.json();
            const workflows = data.workflow_runs || [];

            if (workflows.length === 0) {
                vscode.window.showInformationMessage(`No workflows found for ${repo}.`);
                return;
            }

            workflows.forEach((workflow) => {
                logOutputChannel.appendLine(`Workflow: ${workflow.name} | Status: ${workflow.status}`);
            });

            vscode.window.showInformationMessage(
                `Fetched ${workflows.length} workflows for ${repo}. Check the "Kestra Logs" channel for details.`
            );
        } catch (error) {
            vscode.window.showErrorMessage(`Error fetching workflows for ${repo}: ${error.message}`);
            console.error('Error:', error);
        }
    });

    context.subscriptions.push(fetchWorkflowsCommand);

    // Command: Create GitHub Issue for Any Repo
    const createIssueCommand = vscode.commands.registerCommand('kestra-notifier.createGitHubIssue', async () => {
        const repo = await vscode.window.showInputBox({ prompt: 'Enter the GitHub repository (e.g., owner/repo):' });

        if (!repo) {
            vscode.window.showErrorMessage('Repository name is required.');
            return;
        }

        const title = await vscode.window.showInputBox({ prompt: 'Enter issue title:' });
        const body = await vscode.window.showInputBox({ prompt: 'Enter issue description:' });

        if (!title || !body) {
            vscode.window.showErrorMessage('Title and description are required to create an issue.');
            return;
        }

        try {
            const response = await fetch(`https://api.github.com/repos/${repo}/issues`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, body }),
            });

            if (response.ok) {
                vscode.window.showInformationMessage(`GitHub issue created successfully in ${repo}!`);
            } else {
                vscode.window.showErrorMessage(`Failed to create GitHub issue in ${repo}. HTTP ${response.status}`);
                console.error('Response Status:', response.status);
            }
        } catch (error) {
            vscode.window.showErrorMessage(`Error creating GitHub issue for ${repo}: ${error.message}`);
            console.error('Error:', error);
        }
    });

    context.subscriptions.push(createIssueCommand);

    // Define the root endpoint
    app.get('/', (req, res) => {
        res.send('Kestra Notifier Server is running!');
    });

    // Start the Express server
    const port = 3000;
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
        vscode.window.showInformationMessage(`Server started on http://localhost:${port}`);
    });

    // Command: Hello World
    const helloWorldCommand = vscode.commands.registerCommand('kestra-notifier.helloWorld', () => {
        vscode.window.showInformationMessage('Hello World from Kestra Notifier!');
    });

    context.subscriptions.push(helloWorldCommand);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate,
};

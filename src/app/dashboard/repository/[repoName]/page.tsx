"use client";

import { useUser } from "@/components/auth-provider";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    Accept: "application/vnd.github.v3+json",
  },
});

interface RepositoryDetails {
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  html_url: string;
  updated_at: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

function Repository() {
  const { repoName } = useParams();
  const user = useUser();
  const [username, setUsername] = useState<string | null>(null);
  const [repository, setRepository] = useState<RepositoryDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [issueTitle, setIssueTitle] = useState("");
  const [issueDescription, setIssueDescription] = useState("");
  const [sendDiscordNotification, setSendDiscordNotification] = useState(false);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        if (!user || !user.current || !user.current.email) {
          return;
        }

        // Fetch GitHub username
        const userSearchResponse = await githubApi.get(
          `/search/users?q=${encodeURIComponent(user.current.email)}+in:email`,
        );

        if (userSearchResponse.data.total_count === 0) {
          setError("No GitHub account found for this email");
          setIsLoading(false);
          return;
        }

        const fetchedUsername = userSearchResponse.data.items[0].login;
        setUsername(fetchedUsername);

        // Fetch repository details
        const repoResponse = await githubApi.get(
          `/repos/${fetchedUsername}/${repoName}`,
        );
        setRepository(repoResponse.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch repository details");
      } finally {
        setIsLoading(false);
      }
    }

    if (repoName) {
      fetchGitHubData();
    }
  }, [repoName, user?.current?.email]);

  if (isLoading || !repository) {
    return (
      <div className="min-h-screen bg-background text-foreground p-8">
        <div className="text-center text-muted-foreground">
          Loading repository details...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background text-foreground p-8">
        <div className="text-center text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-2xl font-bold">
          <span className="text-zinc-500">{username}</span> / {repository.name}
        </h1>
        <p className="text-muted-foreground text-sm mt-2">
          {repository.description || "No description provided"}
        </p>
      </header>

      {/* Repository Overview */}
      <section className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Stars */}
        <div className="bg-card p-6 rounded-lg shadow border border-border">
          <h2 className="text-sm font-medium text-muted-foreground">Stars</h2>
          <p className="text-2xl font-bold mt-2">
            {repository.stargazers_count}
          </p>
        </div>

        {/* Forks */}
        <div className="bg-card p-6 rounded-lg shadow border border-border">
          <h2 className="text-sm font-medium text-muted-foreground">Forks</h2>
          <p className="text-2xl font-bold mt-2">{repository.forks_count}</p>
        </div>

        {/* Issues */}
        <div className="bg-card p-6 rounded-lg shadow border border-border">
          <h2 className="text-sm font-medium text-muted-foreground">
            Open Issues
          </h2>
          <p className="text-2xl font-bold mt-2">
            {repository.open_issues_count}
          </p>
        </div>
      </section>

      {/* Repository Actions */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Actions</h2>
        <div className="flex flex-row gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Create Issue
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Issue</DialogTitle>
                <DialogDescription>
                  Provide details about the issue you want to create.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <Input
                  placeholder="Issue Title"
                  value={issueTitle}
                  onChange={(e) => setIssueTitle(e.target.value)}
                />
                <Textarea
                  placeholder="Issue Description"
                  value={issueDescription}
                  onChange={(e) => setIssueDescription(e.target.value)}
                />
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="discord-notification"
                    checked={sendDiscordNotification}
                    onCheckedChange={(checked) =>
                      setSendDiscordNotification(!!checked)
                    }
                  />
                  <label
                    htmlFor="discord-notification"
                    className="text-sm text-muted-foreground"
                  >
                    Send Discord notification
                  </label>
                </div>
              </div>
              <DialogFooter>
                <Button
                  onClick={() => {
                    console.log("Issue Title:", issueTitle);
                    console.log("Issue Description:", issueDescription);
                    setIssueTitle("");
                    setIssueDescription("");
                  }}
                >
                  Submit
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <a
            href={`${repository.html_url}/pulls`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90"
          >
            Pull Request
          </a>
          <a
            href={repository.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90"
          >
            View Code
          </a>
        </div>
      </section>

      {/* Recent Activity */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Last Updated</h2>
        <div className="bg-card p-6 rounded-lg shadow border border-border">
          <p className="text-sm text-muted-foreground">
            Last updated on{" "}
            {new Date(repository.updated_at).toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        </div>
      </section>
    </div>
  );
}

export default Repository;

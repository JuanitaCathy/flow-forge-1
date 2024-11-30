import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const username = "chiragaggarwal5k@gmail.com";
    const password = "flow-forge@123";
    const auth =
      "Basic " + Buffer.from(username + ":" + password).toString("base64");

    const form = new FormData();
    form.append("github_token", body.github_token);
    // form.append("github_repository", "ChiragAgg5k/profile-website");
    form.append(
      "github_repository",
      `${body.github_default_assignee}/${body.github_repository}`,
    );
    form.append("github_default_assignee", body.github_default_assignee);
    form.append("discord_webhook_url", body.discord_webhook_url);
    form.append("discord_avatar_url", " ");

    await axios({
      method: "post",
      url: "http://4.188.74.224:8080/api/v1/executions/hacktastic.team/create-github-issue-on-failure",
      data: form,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: auth,
      },
    });

    return NextResponse.json({ message: "Issue created successfully!" });
  } catch (error) {
    console.log(error);
  }
}

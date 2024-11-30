<p align="center">
    <img src="https://github.com/user-attachments/assets/71d49182-2f0f-4b5b-817c-1e086e3d08bc" width="106" height="106" />
</p>

<p align="center">
  <img src="https://img.shields.io/github/stars/ChiragAgg5k/flow-forge?style=flat-square" />
  <img src="https://img.shields.io/github/forks/ChiragAgg5k/flow-forge?style=flat-square" />
  <img src="https://img.shields.io/badge/LICENSE-MIT-green?style=flat-square"  />
</p>

### :star2: About

**Flow-Forge** is your one-stop solution to optimize GitHub workflows. With features like repository orchestration, automated issue management, and streamlined PR reviews, Flow-Forge turns chaotic workflows into seamless clockwork operations.

### :movie_camera: Demo

<p align="center">
    <a href="https://youtu.be">
        <img src="https://img.freepik.com/free-vector/modern-red-video-media-player-template_1017-23409.jpg"/>
    </a>
</p>

$~$

### 🚀 Deployment

- **Kestra**: Deployed on an **Azure Virtual Machine**.
- **Flow-Forge Next.js App**: Deployed on **Vercel**.

$~$

### 📊  Workflow
![kestra](https://github.com/user-attachments/assets/9bf6d202-8157-470c-bbf6-14f2259bd1dd)

$~$

## 📂 Features

1. **GitHub Workflow Monitoring**  
   Track workflow statuses (success, failure, in-progress) with GitHub API integration.

2. **Automated Issue Creation**  
   Automatically generate detailed GitHub issues for failed workflows.

3. **Real-Time Notifications**  
   Receive instant alerts on Discord and Slack for workflow updates.

4. **Email Notifications**  
   Detailed workflow failure alerts via email for extended team reach.

5. **Orchestration with Kestra**  
   Handle multiple repositories and workflows with task automation.

$~$

## 🛠️ Setup and Configuration

### Prerequisites

- **GitHub PAT**: Required for API access.
- **Discord/Slack Webhooks**: Notification channels setup.
- **Azure VM**: Deployment platform for backend services.
- **Node.js & npm**: Runtime and package manager.

### Installation Steps

1. **Clone Repository**
   ```bash
   git clone <repo-url>
   cd ci-cd-manager
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Add a `.env.local` file with:
   ```plaintext
   GITHUB_TOKEN=<your_token>
   DISCORD_WEBHOOK_URL=<webhook_url>
   SLACK_WEBHOOK_URL=<webhook_url>
   ```

4. **Build Application**
   ```bash
   npm run build
   ```

5. **Deploy on Azure VM**
   - Transfer project files to VM.
   - Start the app with PM2:
     ```bash
     pm2 start npm --name "flow-forge" -- start
     ```

<!--
$~$

###  :file_folder: File Structure

```

```

### :bicyclist: Roadmap
_Current version number_
- [x] Introduction of Concept
- [x] Feature 1
- [ ] Feature 2
- [ ] Revisit Feature 1
    - [ ] Improve XYZ
    - [ ] Revamp CSS
-->

$~$

## 📑 Documentation Highlights

### CI/CD Manager Overview

Flow-Forge simplifies continuous integration and delivery with:
- Workflow status tracking.
- Automated notifications.
- Intuitive dashboard interfaces.

### Key Features

- **GitHub Issue Automation**  
  Automates logging failed workflows.

- **Discord and Slack Integration**  
  Real-time alerts for quick issue resolution.

- **Kestra Workflow Integration**  
  Visual workflow design for managing orchestration tasks.

 $~$

### :page_facing_up: License

This project is licensed under the **MIT License**.  
You can find the full text of the license [here](LICENSE).

$~$

### :people_holding_hands: Our List of Contributors

<a href="https://github.com/ChiragAgg5k/flow-forge/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ChiragAgg5k/flow-forge" />
</a>
<!--
### :email: Contact 
- Email and social media links.
- Head over to [here](https://github.com/alexandresanlim/Badges4-README.md-Profile#-social-)
  * Copy paste the social links you enjoy and drop them below (make sure to change the `href` to your own links
-->

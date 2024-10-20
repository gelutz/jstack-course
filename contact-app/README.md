<div align="center">
  <a href="https://github.com/gelutz/repo_name">
    <img src="./src/assets/images/logo.svg" alt="Logo"height="80">
  </a>
</div>

### Table of Contents

- [C.R.U.D. App MyContacts](#crud-app-mycontacts)
  - [Description](#description)
  - [Tech Stack](#tech-stack)
  - [Installation](#installation)
    - [Usage](#usage)
  - [Live Demo](#live-demo)

## Description 📝

Simple CRUD App that allows you to list, create, edit and delete contacts. Created during the JStack course in order to learn more about React and Styled Components.
The app is separated into two services, a backend and a frontend. The backend is a simple express server that connects to a postgres database, and the frontend is a basic React App that covers the basics of React.
Both services are deployed separately on Vercel, and can be run locally with the docker-compose file found in the `contacts-app` folder.
Both node services are configured as multi-stage builds (located at the corresponding folder) to reduce the size of the final image.

<div align="center">
  <h3> Tech stack 🛠️ </h3>
</div>

<div align="center" style="display: flex; flex-direction: row; justify-content: center;">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" alt="vite" width="40" height="40"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="react" width="40" height="40"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg" alt="react-router" width="40" height="40"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original.svg" alt="eslint" width="40" height="40"/>
<img src="https://prettier.io/icon.png" alt="prettier" height="40"/>
<img src="https://styled-components.com/nav-logo.png" alt="vite" height="40"/>
</div>

## Installation 💻

> You either need docker or node installed to run

1. Clone the repo

```bash
git clone https://github.com/gelutz/jstack-course
cd jstack-course/contact-app
```

2. Start docker containers
   > To run the backend service, create a `.env` file in the `api` folder with the variables from the `.env.example` file.

```bash
docker compose up -d
```

## Details about Docker

## Live Demo 🎥

[My Contacts app on Vercel](https://jstack-course.vercel.app/)
[Figma Design](https://www.figma.com/design/zhAwjW2RimyjccDgiY6luz/MyContacts?node-id=0-1)

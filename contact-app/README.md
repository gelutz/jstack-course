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

> Classic installation for any react project (swap bun with npm if needed)

1. Clone the repo
2. Install dependencies
3. Run the app
4. Build the app

```bash
git clone https://github.com/gelutz/jstack-course
cd jstack-course/contact-app
```

### Backend

The backend can be run locally with docker or on Vercel.
Docker runs two containers, one for the postgres database and one for the api server.
You first need to create a `.env` file in the `api` folder and add the necessary variables.

```bash
# from ~/jstack-course/contact-app
cd api

docker compose up -d
```

### Frontend

> run the app

```bash
# from ~/jstack-course/contact-app
cd web
bun install
bun dev
```

## Live Demo 🎥

[My Contacts app on Vercel](https://jstack-course.vercel.app/)
[Figma Design](https://www.figma.com/design/zhAwjW2RimyjccDgiY6luz/MyContacts?node-id=0-1)

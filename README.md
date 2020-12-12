# patrickroy.me

This is the repository for the web site [patrickroy.me](https://patrickroy.me). It is a VuePress site deployed in the Google Firebase environment.

# Project setup

Create a Firebase project `Patrick Roy Me` with Google Analytics enabled. Default account.

Add a web app. App nick name `Site`. Enable Firebase Hosting.

Initialize project:

    firebase init

Settings:

- Choose "Hosting: Configure and deploy Firebase Hosting sites"
- Use an existing project: `patrick-roy-me`
- Default public
- Single page application
- Automatic builds with GitHub
- Build script before deploy `yarn <CommandToBeDetermined>` 
- Automatic deploy to live channel; `main` branch

## Domain configuration

Hosting -> Add custom domains:

- Domain: patrickroy.me. No redirect.
- Add www.patrickroy.me to redirect to patrickroy.me.
- Custom resource record for Google Domains:
  - @   A   1h   151.101.1.195 and 151.101.65.195
  - www  A   1h   151.101.1.195 and 151.101.65.195

# Development

    yarn run dev

or

    firebase serve

# Deployment

    firebase deploy

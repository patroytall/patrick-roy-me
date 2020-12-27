# Software Aficionado

This is the repository for the web site [softwareaficionado.com](https://softwareaficionado.me) which is also reachable using [patrickroy.me](https://patrickroy.me). It is a VuePress site deployed in the Google Firebase environment.

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

- Domain: softwareaficionado.com. No redirect.
- Add www.softwareaficionado.com to redirect to softwareaficionado.com.
- Custom resource record for Google Domains:
  - `@   A   1h   151.101.1.195 and 151.101.65.195`
  - `www  A   1h   151.101.1.195 and 151.101.65.195`

Wait up to 24 hours for the SSL certificate to be updated.

### Domain forwarding

In Google domains -> My domains -> Manage -> Domain overview:
- Permanent redirect (301)
- Path forwarding enabled
- SSL on

Forward: patrickroy.me -> softwareaficionado.com

Forward: softwareafficionado.com -> softwareaficionado.com

# Development

    yarn build && firebase serve

Vue hot reloading does not appear to work wich is why `yarn run dev` is not recommended.

# Deployment

    firebase deploy

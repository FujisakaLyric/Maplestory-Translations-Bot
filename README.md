# Maplestory Translation Bot
A Discord bot to translate Maplestory terms.

### Local Installation:
Simply configure `.env` using the `.env.sample` file and run
```
npm start
```

### Deployment:
Deployment uses a free cloud hosting provider [Fly.io](https://fly.io). Simply register the app and follow [default setup instructions](https://fly.io/docs/hands-on/install-flyctl/) for your OS.
```
flyctl auth login
flyctl launch
flyctl deploy
```
To suspend/start the containers:
```
flyctl scale count <0/1>
```
### Deployment Pipeline using GitHub Actions on [Fly.io](https://fly.io):
1. Fork the GitHub repository
2. Create an auth token using `flyctl tokens create <name>`
3. Create a new repository secret `FLY_API_TOKEN` in GitHub Action Secrets
4. Create new secrets in Fly.io for `DISCORD_BOT_TOKEN` using:
```
flyctl secrets set DISCORD_BOT_TOKEN=<token>
```
5. Commit changes or manually start GitHub Actions for deployment

### Commands:
```
Server: KMS/JMS/TMS
/translate <server> maps <job> <map>
/translate <server> boss <job> <boss> <difficulty>
```

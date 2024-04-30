# Maplestory Translation Bot
A Discord bot to translate Maplestory terms.

### Job List
Integer mapping for Jobs.
```
1. Hero
2. Paladin
3. Dark Knight
4. Arch Mage(F,P)
5. Arch Mage(I,L)
6. Bishop
7. Bowmaster
8. Crossbow Master
9. Pathfinder
10. Night Lord
11. Shadower
12. Dual Blade
13. Viper
14. Captain
15. Cannon Master
16. Mihile
17. Soul Master
18. Flame Wizard
19. Wind Breaker
20. Night Walker
21. Striker
22. Aran
23. Evan
24. Luminous
25. Mercedes
26. Phantom
27. Eunwol
28. Blaster
29. Battle Mage
30. Wild Hunter
31. Xenon
32. Mechanic
33. Demon Slayer
34. Demon Avenger
35. Kaiser
36. Kaine
37. Cadena
38. Angelic Buster
39. Adele
40. Illium
41. Khali
42. Ark
43. Lara
44. Ho Young
45. Zero
46. Kinesis
47. Hayato
48. Kanna
49. Beast Tamer
50. Mo Xuan
51. Lynn
```

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

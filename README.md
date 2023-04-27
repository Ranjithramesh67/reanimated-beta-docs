# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Note to maintainers:

### Algolia search

Only applicable before Reanimated docs are fully deployed!

Create .env file with:

```
APPLICATION_ID=ZYDVCHOETY
API_KEY=<<Algolia Admin Key>>
```

Ask @kacperkapusciak or someone else from SWM RNOS to gain Algolia Admin Key.

To run crawler locally you need to install `jq` and `docker`:

```
brew install jq
```

Run crawler with:

```
docker run -it --env-file=.env -e "CONFIG=$(cat ./config.json | jq -r tostring)" algolia/docsearch-scraper
```

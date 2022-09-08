# Daniel Jimenez Garcia website

Welcome to the source code of my personal website!

The latest version of the site is available at https://danijg.github.io/.

## Stack
This website was:

- Built using [gatsbyjs](https://www.gatsbyjs.org/) and the [github.com/Chronoblog/gatsby-theme-chronoblog](https://github.com/Chronoblog/gatsby-theme-chronoblog).
- Published to GitHub pages using GitHub actions.

### Changes to the theme
A couple of componets were overriden to avoid breaking the DotNetCurry magazine articles. The original components would remove the `www.` prefix from these URLs, which results in broken links.

### Github cards
Repo cards are generated with [https://gh-card.dev/](https://gh-card.dev/). Note the repo should have a description!


## Development

You can get the site running locally with a few steps:

1. Clone this repo
    ```bash
    git clone git@github.com:danijg.github.io.git
    ```
1. cd into the folder where it was cloned
    ```bash
    cd danijg.github.io
    ```
1. Switch to the **source branch**! This is very important since the master branch contains _the generated site_!
    ```bash
    git checkout source
    ```
1. Install the dependencies
    ```bash
    npm i
    ```
1. Run the local development server
    ```bash
    npm start
    ```

Then head to http://localhost:8000 in your browser.
> If the port was in use, a different one will be used. Pay attention to the output of the command.

## Deployment

The site is deployed to GitHub pages.

Since this is a user repo, the files for the GitHub pages site need to be located in the master branch of the repo. See [official docs](https://help.github.com/en/github/working-with-github-pages/about-github-pages#publishing-sources-for-github-pages-sites). (You could switch your "main" branch to a different branch, but then GitHub pages also needs the site files to be located there)

Deployment essentially means:
1. run the build command `npm run build`, which generates the files in `./public`
1. switch over to the folder where the static contents are generated `cd ./public`
1. initialize a new git repo
1. force push the contents of the `public` folder to master

### Automatic deploy via GitHub actions
By commiting code to the `source` branch, you will trigger the configured [GitHub action](https://help.github.com/en/actions) workflow as per the `.github/workflows/deploy.yml` file.

The workflow file essentially codifies the steps outlined above.
- Uses [Node action](https://help.github.com/en/actions/language-and-framework-guides/using-nodejs-with-github-actions) to run the `npm` commands that build the site.
- Users the community provided [github-push action](https://github.com/marketplace/actions/github-push) to force push the resulting files to the master branch.

### Manual deploy

1. Make sure you are in the **source branch**, and not in master
1. Run the deploy script
    ```bash
    ./deploy.sh
    ```
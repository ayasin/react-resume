# Resume template rendered with ReactJS

This repo contains a react app that I use to display my resume.  It was created with `create-react-app` (https://create-react-app.dev).  You can view the output of this [(my resume) here](https://ayasin.github.io/resume).

### To use for your own resume in 3 easy steps

1. Fork this repo
1. Edit the `resumeDetails.js` file and fill in your own details
1. Change the `homepage` value in `package.json` to where ever you plan to host your resume.

### Viewing your resume locally while editing and building the package

**Initial Setup:**
1. Install [NodeJS](https://nodejs.org) if you don't already have it
1. Run `npm install -g yarn`
1. Run `npm install -g create-react-app`
1. Clone this repo locally
1. Navigate to that folder in a terminal winodw
1. Run `yarn`

**Working on your resume:**
1. Open your editor
1. In a terminal run `yarn start` in the folder to which you cloned the repo
1. Edit the `resumeDetails.js` (or any other file if you don't like the fomratting) and watch the edits live in your browser.

**Building for the web:**
1. Make sure you edit the `package.json` and set the `homepage` to where you plan to deploy.
1. run `yarn build` and deploy all the contents of the `build` folder.

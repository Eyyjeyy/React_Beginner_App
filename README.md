
React Website Tutorial - Beginner React JS Project Fully Responsive
Brian Design

**--COMMANDS SETUP--**
npm create vite@latest (React, JS)
cd react-responsive-app
npm install
npm install tailwindcss @tailwindcss/vite
npm run dev

**--After npm i tailwind--**
Add the @tailwindcss/vite plugin to your Vite configuration, add these lines in vite config js:
 - import tailwindcss from '@tailwindcss/vite'
 - **Add inside plugins array**
    tailwindcss()

**--Install React Icons--**
cd react-responsive-app
npm install react-icons --save


**--Install React Icons--**
cd react-responsive-app
npm install react-typed --save


**--Install Framer-Motion--**
cd react-responsive-app
npm install motion


**--TOOLS--**
    Build Tool:     Vite
    CSS Framework:  Tailwind CSS
    Framework:      React
    Language:       Javascript Vanilla
    Packages:       React-icons, React-typed, Framer-motion(Not Part of Tutorial), GitHub Pages, React-Intersection-Observer

**--Topics--**
State


**----Github Pages Deployment----**
Guide: https://youtu.be/hn1IkJk24ow
Insert into vite config js, just after plugins object   - base: "/<REPOSITORY NAME>"
Insert this into package.json just below the "name" key - "homepage": "https://<USERNAME>.github.io/<REPOSITORY NAME>/",
cd react-responsive-app
npm install gh-pages
**--Insert this two lines inside package.json's script object--**
    - "predeploy": "npm run build",
    - "deploy": "gh-pages -d dist"
**--**
Git Push to Repo
npm run deploy


05-07-25 - 21:05 | 23:27 
https://youtu.be/ZU-drSVodBw?t=1265
https://youtu.be/ZU-drSVodBw?t=1407

05-08-25 - 37:10
https://youtu.be/ZU-drSVodBw?t=1850

05-09-25 - 40:52 | 51:16
https://youtu.be/ZU-drSVodBw?t=2452
https://youtu.be/ZU-drSVodBw?t=3076

05-10-25
First React Website Deployment to GitHub Pages

05-15-25 | 1:02:41
https://youtu.be/ZU-drSVodBw?t=3761

05-31-25 | 1:16:51
https://youtu.be/ZU-drSVodBw?si=VDhh0r02dtNuNQPU&t=4611
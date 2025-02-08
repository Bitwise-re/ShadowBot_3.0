#ShadowBot3.0

##Run locally

###Install Node, npm and yarn

First, ensure NodeJS is installed, you can checkout [the official NodeJS website](https://nodejs.org/en/download/) to install it  
Verify NodeJS is installed, run `node -v` in your terminal  
Then, you can run this command to quickly update the npm : `npm install npm --global`  
To confirm npm installation, you can run `npm -v`  
Finally install yarn with `npm i -g yarn` and verify it is installed : `yarn -v`  

###Setup the bot

Download the code as zip file or clone it.  
You can then run the bot with `yarn tsStart`  
This will run the bot in TypeScript.  
To run it faster, you can build the bot in JS and run it with the generated code  
To do that, build with `yarn build` and then run it : `yarn jsStart`  
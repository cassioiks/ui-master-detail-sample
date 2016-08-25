#How to run this project?

## Using Node.js
1. Make sure you have Node.js installed in your computer, and that you have cloned this repository
2. [Download SAP Open UI5][1], and put the `resources` folder inside this project's `WebContent` folder
3. Run `npm install` to fix dependencies
4. Edit `gulpfile.js` and replace `YOUR_SERVICE_ENDPOINT` with your service endpoint
5. run `gulp` to setup a local webserver

## Using Eclipse

1. Import existing project into your workspace
2. Edit `Web.xml` and replace `YOUR_SERVICE_ENDPOINT` with your service endpoint
3. Deploy project in local Tomcat server

[1]:http://openui5.org/download.html
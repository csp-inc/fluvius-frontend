# MS-Brazil
Front-end web application built to visualize deep learning output of suspended sediment estimates from image chips in Amazon region. 

## Basic NPM commands
To run app on local host in terminal type: *npm start*

To deploy:
- *npm run build*
- Right click on updated build folder at the top of the VS explorer.
- Select *Deploy app as a static web app via Azure Storage*
- Select AI for Earth Directory
- Select fluviusapp
- Select OK when prompted to delete present storage blobs

To save code to GitHub, can run the usual Git commands in local terminal.

## Other Dependencies
- Make sure you install the Azure Tools extension in VSCode! Otherwise the app will not run.
- If you are deploying from a Linux OS, ensure that you have the `libsecret-1-0` package installed in order for AZCopy to work properly underneath the hood.

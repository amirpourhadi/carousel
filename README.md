# Carousel

Steps to run the application:

-in vscode open a new terminal and run npm i -after installation finished, run npm start

To create a production build, run npm run build.

In order to use the carousel component, simply import it to your App or other components and add the below tag, pass the list of photos and determine the carousel photos navigation by passing value to showDots property.

  <Carousel photos={PHOTOS} showDots={false}/>
  
The image list format should be like this example:

  {
    "thumbName":"img-1-thumb.jpg",
    "fileName": "img-1.jpg",
    "title": "",
    "description": ""
  }

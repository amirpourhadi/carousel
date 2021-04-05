# Carousel

## How to run application:
1. in vscode open a new terminal and ``` run npm i ```
2. after installation finished, ``` run npm start ```

## Prod Build
+ To create a production build, ``` run npm run build ```
+ Production version will be created in the ./dist folder.

## Usage:
+ In order to use the carousel component, simply import it to your App 
or other components and add the below tag, pass the list of photos and
determine the carousel photos navigation by passing value to showDots property.

``` js
     <Carousel photos={PHOTOS} showDots={true}/>
```   
## The image list format should be like this example:

``` js
     {
       "thumbName":"img-1-thumb.jpg",
       "fileName": "img-1.jpg",
       "title": "",
       "description": ""
     }
``` 

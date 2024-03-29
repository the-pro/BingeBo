<!-- ![favicon](https://user-images.githubusercontent.com/42973786/126619336-982305d2-10d4-4913-9df7-2619e0268a1e.jpg) -->

# BingeBo
[![GitHub stars](https://img.shields.io/github/stars/the-pro/BingeBo)](https://github.com/the-pro/BingeBo/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/the-pro/BingeBo)](https://github.com/the-pro/BingeBo/issues)
[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Fthe-pro%2FBingeBo)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fthe-pro%2FBingeBo)
[![Binge](https://img.shields.io/badge/binge-series-green)]()

<img src="https://user-images.githubusercontent.com/42973786/126619336-982305d2-10d4-4913-9df7-2619e0268a1e.jpg" width="20%"></img>

An Application that lets you stream local video files so you can binge watch series that you have stored locally on your computer. This also keeps track of the latest episode that you were watching and lets you watch from where you left earlier. It can be used on local networks as a streaming service. It has the feature to read through your file system(specified) and gather the episodes that are present in multiple hierarchy of files and display it in a sorted manner(eg: for different seasons of a series).

<!-- ![Screenshot (15)](https://user-images.githubusercontent.com/42973786/126624088-4bac03cb-4458-403a-a236-85c3871535e4.png) -->
<img src="https://user-images.githubusercontent.com/42973786/126624088-4bac03cb-4458-403a-a236-85c3871535e4.png" width="50%"></img>


### Installation

Setup Angular cli:

`npm install -g @angular/cli`

Go to the project directory

`cd path/to/directory`

Install and build

`npm install`

To start the application run

`npm run serve`

Thats it! You have got a working application

Now move all your tv series into the frontend/src/assets/series folder and go to http://localhost:4200 to enjoy the series

### Development

To run the app in development run:
`npm run serve:dev`

#### Testing

There are two currently two types of tests:
For Frontend: `npm run test`
For Backend(APIs): `npm run frisby`

# Gulp4 Template
[![N|Solid](https://i.postimg.cc/6Qnkq1Qp/whimelan.png)](https://github.com/whimelan)
![Gulp4 preview](https://i.postimg.cc/pdjg1r0T/repo.png)

### Note
This gulp configuration uses Pug and Sass, there are many automatical processes as a converting to WebP, group media queries, etc.

### Architecture of project
```
app
├── css
│    └── common
│    └── mixins
├── favicon
├── fonts
├── images
├── js
├── libs
└── pages // pug files are located here; to add some pages, put new .pug file inside this directory
    └── layouts
    └── modules
    └── ui-kits
    └── index
```
Also, in app dir located index.html compiled file. If you do not want to use pug, you can write HTML right here. It still works correctly and fast. To add pages, put new .html file near index.html!
### Installation
So, you have [Node.js](https://nodejs.org/) and [NPM](https://www.npmjs.com), let's get started!
```sh
$ npm install
```
It will start downloading a dependencies to your folder

#### Start gulp and get an enjoyment!

```sh
$ npm run start

or

$ gulp start
```


### To production
Your web-site is ready to production? Congratulations!

#### Start building task
```sh
$ npm run build

or

$ gulp build
```

#### * drumroll *...

#### You got it! Check folder **"Dist"**! ;)

### Thank you for reading and using my gulp-template! Good luck!

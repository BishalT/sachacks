## SACHACKS

**NOTE**: You need to have NodeJS installed to run this project

#### To start working on this project, Pls run the following commands in order

1. Download all modules needed
```
npm install
```

2. Start a dev server at http://localhost:8080/
```
npm run start
```
**NOTE**: This command will run a server at localhost:8080, which will apply all the changes you have made (or will make). However, if you want to deploy it, you need to **build** production code, follow step 3 below

3. Build file for deploying website
```
npm run build
```
**NOTE**: This command will build/combine everything (JS and CSS)  into a single **bundle.js** in **dist folder**, which is consumed by *index.html* file. Thus, this will be what you see if you open html directly without running **2nd command**. You can now deloy this project using that **bundle.js**

#### Are you looking for something?
```
home
│   README.md
│   index.html    
│
└───src
│   │   
|   └───js
|   |   |
│   |   │   index.js
|   |   |  
│   |   └─── utils
|   |
|   └───scss
|   |
|   │   index.scss
|   |  
|   └─── components   
|   |  
|   └─── fonts   
│   
└───dist
```

#### If you want to make some changes to this project, pls look into source folder, **src**, which contains *javascript* and *scss* files

##### The **index.js**, or *index.scss*, is used as main file to combine other modules or components from **utils**, or **components**, folder

## Contributor
#### Developers
* [BishalT](https://github.com/BishalT) - **Bishal Thapa**
* [code-io](https://github.com/code-io) - **Munir Sayani**
* [DerLee4](https://github.com/DerLee4) - **Derek Lee**
* [LambertTran](https://github.com/LambertTran) - **Lambert Tran**

#### Designers
* [genesiating](https://www.linkedin.com/in/genesiating/) - **Genesia Ting**

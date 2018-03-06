# SACHACKS

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
**NOTE**: This command will run a server at localhost, there is **nothing** built yet. Therefore, what you see after run this command is not same as what you see when you deploy this website

3. Build file for deploying website
``` 
npm run build
```
**NOTE**: This command will build/combine everything into a single **bundle.js** in **dist folder**, which is consumed by *html file*. Thus, this will be what you see if you open html directly without running **2nd command**. You can now deloy this project using that **bundle.js**

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
│   
└───dist
```

#### If you want to make some changes to this project, pls look into source folder, **src**, which contains *javascript* and *scss* files

##### The **index.js**, or *index.scss*, is used as main file to combine other modules or components from **utils**, or **components**, folder
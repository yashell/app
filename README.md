…or create a new repository on the command line
echo "# app" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/yashell/app.git
git push -u origin master
                
…or push an existing repository from the command line
git remote add origin https://github.com/yashell/app.git
git push -u origin master
…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

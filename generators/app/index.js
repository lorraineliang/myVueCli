const Generator = require('yeoman-generator')
const fs = require('fs')

module.exports = class extends Generator {
    prompting(){
        return this.prompt([
            {
                type:'input',
                name:'name',
                message:'your project name',
                default:this.appname
            },
            {
                type: "confirm",
                name: "cool",
                message: "Would you like to enable the Cool feature?"
            }
        ]).then(answer =>{
            this.answer = answer
            // this.cool = answer.cool
        })
    }
    writing(){
        const templates = [
            'babel.config.js',
            'package.json',
            'postcss.config.js',
            'README.md',
            'public/favicon.ico',
            'public/index.html',
            'src/App.vue',
            'src/main.js',
            'src/router.js',
            'src/assets/logo.png',
            'src/components/HelloWorld.vue',
            'src/store/actions.js',
            'src/store/getters.js',
            'src/store/index.js',
            'src/store/mutations.js',
            'src/store/state.js',
            'src/utils/request.js',
            'src/views/About.vue',
            'src/views/Home.vue'
          ]
        for(const value of templates){
            this.fs.copyTpl(this.templatePath(value),this.destinationPath(value),this.answer)
            
        }
    }
}
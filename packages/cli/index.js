#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { cp } = require('shelljs')
const inquirer = require('inquirer')
const template = require('art-template')
const getGitInfo = require('./util/get-gitinfo')
const ora = require('ora')
const chalk = require('chalk')

let projectName = path.relative('../', process.cwd())

let questions = [
  {
    type: 'input',
    name: 'name',
    message: '📦 Please enter the project name',
    default: function() {
      return projectName
    }
  },
  {
    type: 'input',
    name: 'author',
    message: '👤 Please enter the author information',
    default: function() {
      return getGitInfo()
    }
  },
  {
    type: 'input',
    name: 'version',
    message: '📖 Please enter the project version',
    default: function() {
      return '1.0.0'
    }
  }
]

inquirer.prompt(questions).then(answers => {
  // copy template to project directory

  const spinner = ora('copy template...').start()
  spinner.color = 'green'

  let sourse = path.resolve(__dirname, './node_modules/@parcel-vue-ts/template/*')
  let dest = path.resolve()
  cp('-R', sourse, dest)

  // update package.json
  spinner.text = 'update package.json...'
  let pkgPath = path.resolve('./package.json')
  let pkg = require(pkgPath)
  for (const key in answers) {
    pkg[key] = answers[key]
  }
  // formatting package.json
  let pkgContent = JSON.stringify(pkg, null, '  ')
  fs.writeFileSync('./package.json', pkgContent, 'utf-8')

  spinner.stop()
  console.log(chalk.green('project initial completion!'))
})

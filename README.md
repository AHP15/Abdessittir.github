# My portfolio

This is a portfolio website to showcase [my](https://github.com/Abdessittir) skills, experience, and what type of projects I've worked on.
Right now I only created the mobile version  of it.
You can see it

## Live Demo

[Ckeck the live here](https://abdessittir.github.io/)

## Buit with

* HTML/CSS
* Webhint/Stylelint

## Getting Started

This is the setup and the first part of the project which includes the toolbar and the headline.
To get a local copy up and running follow these simple example steps.

## Prerequisites

* GitHub flow
* Basic HTML and CSS


## Setup
### Webhint

NOTE: If you are running on Windows, you need to initialize npm to create package.json file.
```bash
npm init -y
```

1. Run 
```bash
npm install --save-dev hint@7.x
```
2. create a file in the root directory of your project named ```.hintrc``` and copy the following to it
```json
  {
    "connector": {
      "name": "local",
      "options": {
        "pattern": ["**", "!.git/**", "!node_modules/**"]
      }
    },
    "extends": ["development"],
    "formatters": ["stylish"],
    "hints": [
      "button-type",
      "disown-opener",
      "html-checker",
      "meta-charset-utf-8",
      "meta-viewport",
      "no-inline-styles:error"
    ]
}
```
3. Run 
```bash
npx hint .
```
4. Fix validation errors.

### Stylelint
1. Run 
```bash
npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
``` 
2. create a file in the root directory of your project named ```.stylelintrc.json``` and copy the following to it

```json
{
    "extends": ["stylelint-config-standard"],
    "plugins": ["stylelint-scss", "stylelint-csstree-validator"],
    "rules": {
      "at-rule-no-unknown": null,
      "scss/at-rule-no-unknown": [
        true,
        {
          "ignoreAtRules": [
            "tailwind",
            "apply",
            "variants",
            "responsive",
            "screen"
          ]
        }
      ]
    },
    "csstree/validator": true,
    "ignoreFiles": ["build/**", "dist/**", "**/reset*.css", "**/bootstrap*.css"]
}
```
3. Run 
```bash
npx stylelint "**/*.{css,scss}"
``` 

## Author

* GitHub: [@Abdessittir](https://github.com/Abdessittir)
* Twitter: [@AbdessittirHar1](https://twitter.com/AbdessittirHar1)
* LinkedIn: [Abdessittir Harkati](https://www.linkedin.com/in/abdessittir-harkati-a61b7324a/)

- GitHub: [@jossi30](https://github.com/jossi30)
- Twitter: [@jossi30_](https://twitter.com/jossi30_)
- LinkedIn: [Yosief G. Hailay](https://linkedin.com/in/YosiefG.Hailay)

## Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Abdessittir/Hello-Microverse/issues).

## Show your support
Give a ⭐️ if you like this project!

## Acknowledgments

Thanks to Microverse for making this happen.

## 📝 License

This project is [MIT](https://github.com/Abdessittir/portfolio-project/blob/setup-and-mobile-first/LICENSE) licensed.

# Lab 02: Start the "About Me" project

- Your assignment will be to create an "About Me" HTML and JS project.

- Note that as we progress through the week, new user stories will be added to the "About Me" project to guide the development of new features.

## Setup and Documentation

- Follow the instructions in the ["Setting Up a New Code 201 Project"](./setting-up-a-new-project.md){:target="_blank"} document.

### Git

- Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

#### Git command basics:

- `git status`
   - Provides a detailed description of current state in working directory

- `git add <file/s>`
   - Move one or more files from your working directory into staged status

- `git commit -m "Your commit message"`
   - Snapshot the staged changes in current working directory, with a brief message describing the changes

- `git push <destination> <branch>`
   - Push local commits to GitHub

## User Stories and Feature Tasks

("MVP" = "Minimum Viable Product" which is the most basic successful functionality of our project. Extensions, added features, and other enhancements fall under the category of "Stretch Goals.")

### User Stories

This is our first exposure to user stories. This is a device commonly used in software development to identify what the functionality and design of a product should be by considering the interests and motivations of people with varied multiple points of view.

User stories typically take the form of, "As X, I want Y, so that Z" but do not necessarily need that structure.

- As a student, I want to create an About Me page as a demonstration of my skills with HTML.
- As an eventual jobseeker, I want to get practice in creating a portfolio page so that I can make myself appealing to potential employers.
- As an eventual jobseeker, I would like for potential employers to quickly learn a few things about me, such as a short bio, my education, an overview of my job experience, and my goals.
- As a fun-loving human being, I want to give the visitors to my About Me page a guessing game that shows how fun-loving and interesting I am, and maybe include things about myself that would not ordinarily appear in a portfolio page.
- As a developer, I want to use markup to structure my index.html page, so the layout is in the order of assembly I prefer, with effective use of the markup possibilities offered by HTML.
- As a developer, I want to carefully design my scripts, so I can understand how to organize and write my code to achieve my goals in interactivity.
- As a developer, I want to create a simple script for my index.html page using JavaScript, so that I can use the browser to send a response to the user.
- As a developer, I want to receive and use the user's name, so that the program is personalized to their experience.
- As a developer, I want to provide five questions to the user, so that they can guess the answers and get to know me.
- As a developer, I want to notify the user after each question, so they are aware whether they were correct or not in their answers.
- As a developer, I want to be able to debug my code by using well structured console messages.
- As a developer, I want to manage my code through an online version control system, so I have the ability to work with others, manage my revisions, and keep a thorough record of my progress.

### Feature Tasks

- HTML, CSS, and JavaScript must be cleanly written with correct indentation and syntax. Look at examples online and in your textbook. Note that your JS must pass the rules in the linter that we installed.
- Your JS file must contain a 'use strict' declaration at the top. Always.
- Design a guessing game about you that involves **FIVE** yes/no questions. Be creative and fun and whimsical. Or not. It's up to you! It's your project!
- The questions in the guessing game must require a mix of yes/no answers, and user input must accept either y/n or yes/no responses, with either `.toUpperCase()` or `.toLowerCase()` used to validate the user input and accommodate users entering all-caps Y/N or YES/NO answers, too.
- Useful and descriptive `console.log()` messages in the JS are well written and correctly displaying to the browser console for each question of the guessing game.
- Use CSS to style your page as you see fit, to the level of abilities in CSS that you currently have.
- Follow the Add, Commit, Push process. It should be evident in GitHub that commits are made regularly, and with good commit messages that explain the WHY of the commit.

### Stretch Goals

- Push yourself in your CSS work. Experiment, try some layout feature or technique that you have not tried before (maybe a sticky header or sticky footer, icon fonts such as FontAwesome, etc.) or just try to refine your layout/style as much as possible. We will not cover responsive design until Code 301, but if you have background in it, implement a breakpoint for a mobile view.
- Ensure that all of your text elements meet enhanced recommendations for contrast ratios. Use [Chrome's inspector](https://developers.google.com/web/tools/chrome-devtools/accessibility/reference#contrast){:target="_blank"} to verify your color theme is worthy of two green check marks.
- Test your HTML/CSS for accessibility with Chrome's built-in [Accessibility Auditing tool](https://developers.google.com/web/tools/chrome-devtools/accessibility/reference#audits){:target="_blank"}. Note that you'll have to deploy your site somehow, and make some changes to your code to get the auditing tools to see your HTML code. You can disable the other audit checks when you run your audit. Include an image of your accessability report score in your submission's README.md file.

## Getting Started

Refer to the instructions under the "Setup and Documentation" heading above.

## Submission Instructions

Your instructional team will grade your assignment, and give you feedback. 

1. Submit the link to your repo for this project's work
1. Add a comment to this submission with answers to the following questions.
    - How did this go, overall?
    - What observations or questions do you have about what you've learned so far?
    - How long did it take you to complete this assignment? And, before you started, how long did you think it would take you to complete this assignment? n a handful of HTML files, it can be helpful to put all of them except `index.html` into a separate directory, such as `pages/`.

What about all of those other files and directories in the project? Following is an explanation of each of those.

## .eslintrc.json

This file holds the project-specific rules for the JavaScript linter. Depending upon the tools used in the process, and the stylistic preferences of a given organization, these rules can vary. It is good practice to include in a project the rules you used when creating it. That way, someone looking at your code will see it with the rules you used, rather than the default rules on their system, which might be different and thus create a lot of needless code editor errors and warnings.

Because the `.eslintrc.json` file name starts with a period, it is a hidden file in the operating system. Recall that hidden files can be viewed in your terminal by adding the `-a` flag to an `ls` command.

There is an `.eslintrc.json` file at the root level of our class repository that you can copy/paste into your project.

## .gitignore

A `.gitignore` file is used to manage what parts of a project will **not** be tracked by Git. This is particularly useful in preventing certain kinds of files from being pushed to a repository on GitHub.

- `.DS_Store` files created by the Mac operating system, which are just unnecessary clutter when found inside a code project
- Any files containing information (such as personal data, access keys, or authentication tokens) that you want to keep private
- Other kinds of files that should only be maintained locally and not pushed to a project's repository (you'll learn more about these in Code 301)

Because the `.gitignore` file name starts with a period, it is a hidden file in the operating sytem. Recall that hidden files can be viewed in your terminal by adding the `-a` flag to an `ls` command.

Following is a sample `.gitignore`; note that lines that start with a `#` are comment lines. Feel free to use this `.gitignore` content for your own projects. Note that when you get to Code 301, you will need a much larger `.gitignore` file, and a sample will be provided for you then.

```sh
# Mac OS files
.DS_Store

# Logs
logs
*.log

# Optional eslint cache
.eslintcache
```

## LICENSE

It is good practice to include a license in all of your code projects to ensure that anyone who uses your code knows the rights and limitations of that use. For general use, the broad open-source MIT license works well.

Read through the license file once you have cloned your repo, and if you are interested, look at and read the other ones that GitHub offers when initializing a new repository.

## README.md

### The purpose of a README

The README document is the first point of entry into a code project, and the fundamental source of documentation. When viewing a project on GitHub, the README appears on the entry page immediately beneath the list of files and directories in the project. You will learn in the coming months that working with code with poor documentation can be a pain, so strive to provide good documentation for your work!

What kind of content should be in the README?

- General project information (what does it do, who wrote it, who collaborated, which tools are used)
- Instructions for installation and use
- Information on the license
- Acknowledgements, etc.

Take a look at the following suggested structures. Note the similarities and differences; there is no absolute right/wrong approach. Consider the information that would be helpful to users of your project, and then set one up that is appropriate to your project:

* [README-Template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) by GitHub user [PurpleBooth](https://gist.github.com/PurpleBooth)
* [README](https://gist.github.com/jxson/1784669) by GitHub user [jxson](https://gist.github.com/jxson)
* [Stack Overflow Q/A on "How to write a good README"](https://stackoverflow.com/questions/2304863/how-to-write-a-good-readme)
* [A Beginner's Guide to Writing a Kickass README](https://medium.com/@meakaakka/a-beginners-guide-to-writing-a-kickass-readme-7ac01da88ab3)

Lastly, remember to keep your README up to date! Don't just create it and then neglect it!

### Markdown

README files are written in a language called Markdown. It is a quick and easy way to add formatting to your documentation, and all developers should know Markdown. More than anything else, you'll get to know it by just using it a lot. This document is in Markdown, for instance, so view the Raw version of this document in GitHub to see how the headings, lists, code blocks, etc. were created.

If you'd like to do a tutorial on Markdown, [this is a good one](https://www.markdowntutorial.com/).

## reset.css

All browsers come with default settings for things like font sizes, padding, borders, and other visual components. This can be frustrating for web developers because when our work created in one environment is viewed in another environment, there may be differences due to varying values of these default settings.

We recommend using [Eric Meyer's reset.css file](https://meyerweb.com/eric/tools/css/reset/) to "zero-out" all of those values so that you are developing from a clean slate.

## `img/` directory

As we all know, images are a big part of the web. To help contain file-tree clutter with multiple images in a project, it is wise to create an `img/` directory, and potentially subdirectories within there, to store and organize your images.

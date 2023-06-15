# Git Hub Follow UnFollow

# Version Note : Currently supports 200 followers or the first 200 until you manually edit the lines containing the `per page value`

## 1. This is a limited feature version, you have to edit the code files manually with your username.

### 1.1 To edit get a list of people not following you, edit the file under

``` /app/non/page.jsx ```
### on line number 4 and 10 respectively in the URL links

### 1.2 To get a list of people following you, edit
``` /app/following/page.jsx```
### On the line number 4 and plug in your username

### 1.3 To get a list of people you follow, simply edit the 
``` app/followers/page.jsx```
### and plug in your username on line number
`6 subject to change`

#### Final Note : This is still a work in progress, as I figure out how Next.js 13 modified some parameters for transferring page data to automatically get your username from the landing page, which has been more than a pain so far. 

# Installation
## 1. Run
`npm install`

## 2. Once complete, run
`npm run dev`

## 3. This will open up the application, on port 3000 of your machine, visit:
`localhost:3000`
## to preview

##### Your feedback/assistance/advice will be greatly appreciated!




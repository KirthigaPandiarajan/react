what is cdn
what is crossorigin
__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED


content delivery network
react library hosted
why two files one for core React javascript, other for modifying and rendering the DOM
why not combine to single, because function and methods is different like react native, react 3D forreact not only for browser,but also in mobile applications, web app
script file before React library script file error
html root element is replaced by React render root element
react only works in the render of root element other html parts gets displayed too
react is a library not a framework.
root div is also mandatory along with order of script.
React Element is an object is used by ReactDom.
Render is used to convert object to html and displays the page.


npm not stands for node package manager but manages packages.
npm takes cares for version of that package and dependecies in the project.
package.json is configuration for npm.It keeps a approximate version of package.
npm init
npm install -D parcel
normal dependency is production dependency
-D dev dependency
2.8.3 is version. 2.8.4 is minor. 3.0.0 is major. 
^ means caret. If new minor upgrade, dependency will automatically updates
~ means tilde  If new major upgrade, dependency will automatically updates
package-lock.json keeps a record of exact version of the dependency.
it works on my local but not in production. Package-lock.js has integrity which is an hash to verify in my dev version is deployed in production.
node_modules contains all code of dependency.Its very heavy.Its collection of depencies.Add /node_modules in .gitignore file since it is useless.
Transitive dependency is one dependency depending on another dependency and another dependency depends on some other dependency and it goes on.
A project has how many package.json? Every dependency of the project has its own package.json. Its what transitive dependency.
Add both package-lock.json and package.json to git.But node_modules folder is not needed to add in git.just run npm install it creates node_modules folder.
run npx parcel index.html .Good way to run code via hosting not by filename.
npx means executing a package.npm onstall for installing a package.
cdn links not good way to fetch react. react version keeps changing.
run npm install react / npm i react
run npm install react-dom/ npm i react-dom
remove cdn from index.html and run React.createElement will throw error since React is not known because it was comming from cdn links.
add import React from "react"; import ReactDOM from "react-dom";/import ReactDOM from "react-dom/client"; here React comes from node modules.
for browser it cannot have import/export. so the script tag in index.html as normal javascript file and import is not normal javascript. add type="module" to understand that its a module from npm react 
Hot Module replacement/Hot reloading is Any change made in code and saved Browser automatically refreshes because of parcel.
Parcel create dev build, local server, HMR, file watching algorithm in C++, Caching, Image optimisation, Minification, Bundling, Compressing, Consistent hashing, Code splitting, Differential bundling, Diagnostic, Error Handling, HTTPS, Tree shaking algorithm, Different dev and production bundles
parceljs.org
Hot Module replacement is HMR.
Each save the build time is saved because parcel is caching things and faster builds.you can see in .parcel-cache folder
Differential bundling is when app is hosted, in older version of IE, Mozilla and different bundling for older browsers and different apps. nomodule="" fallback for script type="module" for older browsers.
Tree shaking algorithm is remove unused code for you. If 100 functions, but just using 4 functions only, it removes unused functions.
run npx parcel build index.html returns error since main in package.json is App.js npm entry point is main in package.json. For parcel index.html and so remove main in package.json.
Development build comes from dist and parcel cache and update the dist. Delete and run for Production build it takes more time than dev build time.
any part of code that automatically gets generated needs to be added in gitignore file.
"browsersList": ["last 10 chrome versions"] in package.json to work on 100% in these browsers and other browsers also will work but may or may not. 
browserslist.dev
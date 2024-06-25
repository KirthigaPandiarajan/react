EP -1
------
cdn is content delivery network
crossorigin is access control allow origin * in header for react 14 above used in script tag
__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED means  object contains React internal functions and states
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

EP -2
-----
npm not stands for node package manager but manages packages.
npm takes cares for version of that package and dependecies in the project.
package.json is configuration for npm.It keeps a approximate version of package.
npm init
npm install -D parcel
npx parcel index.html
npm install react / npm i react
npm install react-dom/ npm i react-dom
npx parcel build index.html
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
Good way to run code via hosting not by filename.
npx means executing a package.npm install for installing a package.
cdn links not good way to fetch react. react version keeps changing.
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

EP -3
-----
"scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html"
}
start - It run our project in dev mode. It will be executed by npm.
build - It build our project in production mode. It will be executed by npm.
how to build any project go to their package.json and there will have the commands.
npm run start / npm start 
npm run build
npm start will run our package.json along with index.html.
jsx is javascript syntax It is convention that merges html and javascript.JSX is not HTML in javascript.It looks HTML/XML like syntax. JSX is transpiled before it reaches JS Engine.
Babel is a package used by Parcel. Babel transpiles that takes JSX and converts to React code. Babel transpiles ES6 javascript code to a code undertandable by older browsers. 
babeljs.io 
className instead of class for React
CamelCase for attributes in JSX
img tag src
anchor tag
In visual code use extensions Prettify Code Formatter, Bracket Pair Colorization Toggler, ESLint, Better Comments
Components is of two types: 1]Class based component (old) 2]Functional component (new)
React Functional component is a function which return a JSX code. let Apple = () => { return <h1>Hello World</h1>}; let Apple = () => <h1>Hello World</h1>; let Apple = () => (<h1>Hello World</h1><h2>Hello World<h2>);
Component variable is always first letter Capital.
root.render(<Apple />);
Component can be reused within one another by calling as let Mango = () => (<h2>hii<h2><Apple />); This is Component Composition.
In JSX {} inside braces we can have javascript code.
To call React Element inside Reeact Component by let title = <h1>hii</h1>; let App = () => <div>{title}<div>;
Similarly Component can be called in Element by calling <App /> in the JSX.
Any data in {} in jsx is sanitised. if any attack on api response is displayed in between the braces, can't do since JSX sanitise it.
To call an component inside JSX {App()} <App></App> <App />
JSX makes the React code readable.
Parcel makes the React faster.

EP -4
let stylecard = {backgroundcolor: "aqua"};
<div style = {stylecard}>hii</div>
<div style = {{backgroundcolor: "aqua"}}>hii</div>
i am passing props to component is like argument to function
Dynamic data passing to component via props. Props is an object.
<App val="hii" msg="bye"/> let App = (props) => <h1>{props.val} {props.msg}</h1>
Destructuring on the fly
<App val="hii" msg="bye"/> let App = ({val,msg}) => <h1>{val} {msg}</h1>
let {val,msg} = props example on object destruction.
json viewer in chrome plugin extension.
Conflict Driven UI is Controlling the UI by data/conflict that comes from the backend. A website driven by data/conflict. Data/conflict is different for different locations.
Example: if color for a layout in Delhi is red and Dehradun is green. You can keep this data is config. This is known as Conflict Driven UI.
Cloudinary is a cdn for image storing for large scale applications.
Optional chaining is ?. ie props.data.cuisine.Destructuring as 
const {cuisine,name,time,rating,imgid} = props?. data;
{jsonArr.map((restaurant) => (<RestaurantCard key={restaurant.data.id} resObj={restaurant}/>))} inside an Component JSX
Whenever map is used key attribute should be used and it will be unique. When an resto card comes where to place it, the order. React cleans the container and rerender the cards. If unique id resto card React exactly knows the id and renders it dont rerenders it. 
index as a key is anti-pattern

EP -5
-----
create folder and move code.src=>components=>Header.js/Header.jsx/Header.tsx
To export command is export default Header;
First export then import.
Two types of import/export => default and named
import Header from "./components/Header";
import Header from "./components/Header.js";
import Header from "./components/Header.jsx";
make utils/common folder have static data as config.Use snakecase as const LOGO_URL ="http://kirthi"; 
to export multiple things from a file use named export as export const LOGO_URL = "http://kirthi";
to import named export use as import {LOGO_URL} from "utils/constants";
<img src={LOGO_URL} />
filter is working but UI is not reflected based on filter.
state variable is a super powerfulvariable other than normal javascript variable.
React Hooks - normal javascript utility functions
useState() - powerfull state variables
useEffect()
import {useState} from "react";
let a = [data]; or let [a] = useState([data]);
in super powerfull variable keeps the variable update with UI Layer.To modify will not do assignment, we use set.
let [a, setA] = useState([data]);
setA([data2]);
Whenever a state variable changes, React will rerender the component.
React uses Reconsilation algorithm/React fiber in React16.
Virtual DOM is not an actual DOM. Its an representation of actual DOM.
Virtual DOM are objects ie React Element.
Diff algorithm finds difference between old Virtual DOM and new Virtual DOM. Caluates the difference and updates the DOM.
React do Efficient DOM manipulation using Virtual DOM and updates the DOM.
React constantly monitores the state variable. Find the diff and renders the DOM.
setA([data2]); will find the diff and renders the DOM.
array destructing to setter [,] 
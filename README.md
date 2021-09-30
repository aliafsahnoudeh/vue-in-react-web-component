# vue-in-react-web-component
For more information about why this repo is created or other ways to use Vue.js inside the React.js codebase, please have look at this [article](https://medium.com/@aliafsah1988/how-to-usevue-js-inside-react-js-code-base-properly-3380f09b60f7).


## Using Vue components as library
In this approach we need to build our whole vue project (and not just one component) as a library. For that we can leverage vue-cli and use the 'lib' as target. Something like this:

```
vue-cli-service build — target lib — name vue-lib-components src/main.ts
```

In this example main.ts is the entry point of our project where we are exporting all of our components.
### Things to consider:
Vue.js should be added to our codebase (we need it in our vue-wrapper component which is a react component itself).
### Pros
* We can use features like Vuex and pass them via main codes base the main vue instance. So good flexibility.
* Proper working with TypeScript is easier. Since we have two separated projects.
### Cons
* We need to build the vue project for every change and then use the build version in the main code base (two step build in two different projects).


## Using the Vue component as a web component
We can build our Vue component as a web components and use the build version inside our main application.
### Things to consider:
* For building the vue components we can leverage vue-cli. We can easily create a new project with our desired features and then we just need to update our build script by setting the target to “wc”. Something like this:

```
vue-cli-service build — target wc — name <component-name> <path to the component>
```

* We need to add Vue.js framework to our main codebase. Simply by adding a script tag to our html file (so via CDN) and it’ll be available inside our window object. If we don’t, we’re going to get this error:

```
Vue is not defined
```

* No extra changes needed to be done in webpack configs of our main codebase. Since we aren not importing any .vue file directly.
8 There is no need to add styles from vue component separately. It’ll be done through the build process and will be included in the JavaScript file. So by importing the common.js file, we are importing the styles too.
### Pros
* This approach would be very handy if we want to use a Vue.js widget inside a non-vue code base.
### Cons
* In our case we needed to have Vuex available to our Vue.js components and make it interactive with the state management of the main code base (mobx).


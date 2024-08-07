# JavaScript frameworks

So this is one of the topics that we might come across when we are authoring a HTML document. But not directly, rather when we are using frameworks or libraries that enables us to _manipulate DOM_ with JavaScript.

## DOM manipulation

Changing the DOM after it has been created from the HTML document ([parser](../05-the-browser-and-the-dom/README.md#parser)).

### Two component of a browser

![Rendering engine and JavaScript engine](./rendering-engine-js-engine.png)

#### HTML Parser

It is a sub-component of each rendering engine.

![HTML Parser](./html-parser.gif)

### An example of DOM manipulation through JS

Here we are only adding new element to the DOM.

![JavaScript manipulates DOM](./JS-Append-DOM.gif)

In this example we are editing an element's content and its class.

![Another DOM manipulation with JS](./dom-manipulation.gif)

## Most popular JS frameworks

These are the main stream frameworks: ReactJS, Angular, Vue. They all have HTML templates in order to manipulate DOM. They might look a bit different from one another but they're all working towards same goal.

| Framework    | Code in the JS framework                                                                                                      | Final HTML                               |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| [ReactJS][1] | https://github.com/kasir-barati/html-css/blob/76aaddf22309c243ae1f23f9b804186d15053263/07-frontend-frameworks/react.tsx#L1    | `<div>Hello なると. What's up?</div>` 　 |
| [VueJS][2]   | https://github.com/kasir-barati/html-css/blob/76aaddf22309c243ae1f23f9b804186d15053263/07-frontend-frameworks/vue.vue#L1-L3   | `<div id="app" >User updated!</div>` 　  |
| [Angular][3] | https://github.com/kasir-barati/html-css/blob/76aaddf22309c243ae1f23f9b804186d15053263/07-frontend-frameworks/angular.html#L1 | `<div>Purple luggage.</div>`　           |

These HTML templates might look a bit different but the point here is that the result is still ultimately a HTML document. So here is the most important question: <strong>Is the manipulated DOM still semantic?</strong>

So now that we realized that what ever we talked about it up until still applies. But when you're using these frameworks you might need to put some code to do something somewhere. That's probably why you might code like this. But is it the only viable option?

| Framework    | Code in the JS framework                                                                                                                |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| [ReactJS][1] | https://github.com/kasir-barati/html-css/blob/76aaddf22309c243ae1f23f9b804186d15053263/07-frontend-frameworks/better-react.tsx#L1       |
| [VueJS][2]   | https://github.com/kasir-barati/html-css/blob/76aaddf22309c243ae1f23f9b804186d15053263/07-frontend-frameworks/better-vue.vue#L1-L3      |
| [Angular][3] | https://github.com/kasir-barati/html-css/blob/76aaddf22309c243ae1f23f9b804186d15053263/07-frontend-frameworks/better-angular.html#L1-L3 |

So, when we make good choices while marking up our documents it is going to improve readability and as a result maintainability.

[1]: https://react.dev/
[2]: https://vuejs.org/
[3]: https://angular.dev/

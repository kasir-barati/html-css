# Pseudo-classes

## `:is`

- It takes a `forgiving-selector-list` as its sole argument.
  - `forgiving-selector-list` means that if one of its argument was invalid it will ignore it.
  - Its arguments are separated by comma.
- Its specificity is specified by its highest specific argument.
- It simplifies complex selector chains by allowing us to group multiple selectors within the `:is` pseudo-class.

### Example

Let's say you want to style all <h1>, <h2>, and <h3> headers to have a blue color and a bottom margin of 20px.

```html
<style>
  :is(h1, h2, h3) {
    color: blue;
    margin-bottom: 20px;
  }
</style>
<h1>Header 1</h1>
<h2>Header 2</h2>
<h3>Header 3</h3>
<p>This is a paragraph.</p>
```

Imagine a scenario where you have a website with a section containing various lists. You want to ensure that all list items within both ordered and unordered lists are styled consistently. This can be part of a recipe webpage where ingredients are listed in both ordered (steps) and unordered (items) formats.

```html
<style>
  :is(ul.ingredients-list, ol) > li {
    color: red;
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 10px;
  }
</style>
<main>
  <h1>Chocolate Cake Recipe</h1>
  <section>
    <h2>Ingredients</h2>
    <ul class="ingredients-list">
      <li>2 cups of sugar</li>
      <li>1 and 3/4 cups of flour</li>
      <li>3/4 cup of cocoa powder</li>
      <li>1 and 1/2 teaspoons of baking powder</li>
      <li>1 and 1/2 teaspoons of baking soda</li>
      <li>1 teaspoon of salt</li>
      <li>2 eggs</li>
    </ul>
  </section>
  <section>
    <h2>Instructions</h2>
    <ol>
      <li>Preheat your oven to 350°F (175°C).</li>
      <li>Grease and flour two 9-inch round baking pans.</li>
      <li>
        In a large bowl, stir together the sugar, flour, cocoa, baking powder,
        baking soda, and salt.
      </li>
      <li>
        Add the eggs, milk, oil, and vanilla, and mix for 2 minutes on medium
        speed.
      </li>
      <li>Stir in the boiling water last. The batter will be thin.</li>
      <li>Pour evenly into the prepared pans.</li>
      <li>
        Bake for 30 to 35 minutes, or until a toothpick inserted in the center
        comes out clean.
      </li>
    </ol>
  </section>
</main>
```

- Here we could write it like this: `ul.ingredients-list > li, ol > li { ... }`. But as you can see `:is` helps us to have a easier time selecting `li`s within the order and unordered list.
- The specificity of this `:is` selector is 11, can you tell me why?

## `:where`

It will adjust the specificity of a selector. `:where` and its arguments do not contribute to the specificity of where ever they've been used. In other word it has no specificity weight.

### Example

Imagine you have a decided to remove underline from all links in your page but not if they are inside `nav`.

```html
<style>
  a:where(:not(:hover)) {
    text-decoration: none;
  }
  nav a {
    text-decoration: underline;
  }
</style>
<nav>
  <a href="#">Home</a>
  <a href="#">Shop</a>
  <a href="#">Posts</a>
</nav>

<footer>
  <p>Owned by<a href="#">XYZ cooperation</a></p>
</footer>
```

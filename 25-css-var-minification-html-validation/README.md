# Custom properties

- AKA CSS variables.
- They do not work the same as variables in other programming languages such as Python.
- In CSS we can define custom properties:

  - They start with two dashes: `--`.
  - It is really important to pay attention in which declaration block you're defining the CSS custom property. They are inherited by their children and descendent but will not be available in their siblings, parents, or ancestors.

    > [!TIP]
    >
    > We usually tend to use `:root` pseudo class selector which selects your root element (`html`).
    >
    > ```css
    > :root {
    >   --primary-color: rgba(123, 123, 123, 0.8);
    > }
    > ```

  - You can then get their value through [`var` function](https://drafts.csswg.org/css-variables/#using-variables).

    > [!TIP]
    >
    > You can define default value if UA were able to cascade the value of the custom property.
    >
    > ```css
    > var(--custom-prop-name, 100px)
    > ```

# Minification

- For our users to download a big file, it is a big no. It takes too much time and bandwidth to do that too.
- So instead we wanna minify our HTML doc, and CSS doc: it does remove extra chars, spaces, carriage returns (new lines). It is not really readable for us humans but a computer still can read it.
- We can do it through different tools, e.g. VSCode extensions.
- Then we can use the minified version instead of the real file.

# HTML validation

- We cannot always go back and forth to the HTML doc, so we tend to use services such as: https://validator.w3.org/
- Or as you know VSCode also kinda pick up on some errors. Or to be more accurate it is prettier that does that and will not prettify our document.

# YouTube & Aparat

- https://youtu.be/uSpDTkWKfsA
- https://aparat.com/v/nnfqm58

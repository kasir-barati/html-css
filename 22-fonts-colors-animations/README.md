# [`font-family`](https://drafts.csswg.org/css-fonts-4/#font-family-prop)

| Name       | `font-family`          |
| ---------- | ---------------------- |
| Value      | `"Times New Roman"`    |
| Initial    | depends on user agent. |
| Applies to | all elements and text. |
| Inherited  | yes.                   |

- When there is space in the font name you need to put it inside a quotation mark.
- You can do font stack which tells the browser to look up for that font on the user's device from left to right and apply the first one it found.
  ```css
  h1 {
    font-family: Helvetica, Verdana, sans-serif;
  }
  ```
- Most of the times we need to have something else, thus usually we tend to use web fonts, services such as Google Fonts.

# [`font-weight`](https://drafts.csswg.org/css-fonts-4/#font-weight-prop)

| Name       | `font-weight`                                |
| ---------- | -------------------------------------------- |
| Value      | `900`, `bolder`, `lighter`, `bold`, `normal` |
| Initial    | normal                                       |
| Applies to | all elements and text                        |
| Inherited  | yes                                          |

- Text's degree of blackness, or stroke thickness.
- You can pic any number, ranging from 1 to 1000. Commonly used weight names:

  ![9 commonly used font weights](./font-weight.png)

- Sometimes there is not a face for the desired weight, in that case it will use the face for the nearby weight. For example in the following picture gray indicates that there is not a face for that weight.

  ![font weight with some missed faces](./font-weight-with-some-missed-faces.png)

  You can see it in action too, copy and paste the following markup in a HTML file and open it in your browser:

  ```html
  <style>
    P {
      font-family: Arial;
    }
  </style>
  <p style="font-weight: 100">
    <code>font-weight: 100;</code>
    Thin.
  </p>
  <p style="font-weight: 200">
    <code>font-weight: 200;</code>
    Extra Light (Ultra Light).
  </p>
  <p style="font-weight: 300">
    <code>font-weight: 300;</code>
    Light.
  </p>
  <p style="font-weight: 400">
    <code>font-weight: 400;</code>
    Normal.
  </p>
  <p style="font-weight: 500">
    <code>font-weight: 500;</code>
    Medium.
  </p>
  <p style="font-weight: 600">
    <code>font-weight: 600;</code>
    Semi Bold (Demi Bold).
  </p>
  <p style="font-weight: 700">
    <code>font-weight: 700;</code>
    Bold.
  </p>
  <p style="font-weight: 800">
    <code>font-weight: 800;</code>
    Extra Bold (Ultra Bold).
  </p>
  <p style="font-weight: 900">
    <code>font-weight: 900;</code>
    Black (Heavy).
  </p>
  ```

# [`text-transform`](https://drafts.csswg.org/css-text-4/#propdef-text-transform)

| Name       | `text-transform`                                                                            |
| ---------- | ------------------------------------------------------------------------------------------- |
| Value      | `none`, `capitalize`, `uppercase`, `lowercase`, `full-width`, `full-size-kana`, `math-auto` |
| Initial    | none                                                                                        |
| Applies to | text                                                                                        |
| Inherited  | yes                                                                                         |

- Usually we tend to use `uppercase` to transform our normal written text to all uppercase letter text.

# [`text-decoration`](https://drafts.csswg.org/css-text-decor-4/#text-decoration-property)

| Name       | `text-decoration`                                                                            |
| ---------- | -------------------------------------------------------------------------------------------- |
| Value      | `text-decoration-line text-decoration-thickness text-decoration-style text-decoration-color` |
| Initial    | see individual properties                                                                    |
| Applies to | see individual properties                                                                    |
| Inherited  | see individual properties                                                                    |

- Shorthand for all of those css properties.
- When we only say `text-decoration: none` we're only specifying `text-decoration-style`.
- Specify `text-underline-position` separately. It is related to `writing-mode`, and language specific.

## [`text-decoration-line`](https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-line)

| Name       | `text-decoration-line`                                                             |
| ---------- | ---------------------------------------------------------------------------------- |
| Value      | `none`, `underline`, `overline`, `line-through`, `spelling-error`, `grammar-error` |
| Initial    | `none`                                                                             |
| Applies to | all elements                                                                       |
| Inherited  | no (but see prose, above)                                                          |

- `overline` acts the opposite way of `underline`.

## [`text-decoration-style`](https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-style)

| Name       | `text-decoration-style`                       |
| ---------- | --------------------------------------------- |
| Value      | `solid`, `double`, `dotted`, `dashed`, `wavy` |
| Initial    | `solid`                                       |
| Applies to | all elements                                  |
| Inherited  | no                                            |

- Sets the line-drawing style of `underline`s, `overline`s, and `line-through`s.

## [`text-decoration-color`](https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-color)

| Name       | `text-decoration-color` |
| ---------- | ----------------------- |
| Value      | `red`                   |
| Initial    | `currentcolor`          |
| Applies to | all elements            |
| Inherited  | no                      |

## [`text-decoration-thickness`](https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-thickness)

| Name       | `text-decoration-thickness`      |
| ---------- | -------------------------------- |
| Value      | `auto`, `from-font`, `12%`, `12` |
| Initial    | `auto`                           |
| Applies to | all elements                     |
| Inherited  | no                               |

- `auto`: UA chooses an appropriate thickness for text decoration lines.
- For the `from-font` it tries to look at the first available font for metrics indicating a preferred underline width. If none it will fallback to `auto`.

# [`background-color`](https://drafts.csswg.org/css-backgrounds-3/#propdef-background-color)

| Name       | `background-color`                                                       |
| ---------- | ------------------------------------------------------------------------ |
| Value      | `red`, `#000`, `#ffaaff33`, `rgb(255, 0, 0)`, `rgba(123, 123, 123, 0.4)` |
| Initial    | `transparent`                                                            |
| Applies to | all elements                                                             |
| Inherited  | no                                                                       |

- Drawn behind any background images.

> [!NOTE]
>
> Margins have no influence on the `background` and `border`.

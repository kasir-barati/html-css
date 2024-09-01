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

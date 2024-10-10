# [CSS Nesting](https://drafts.csswg.org/css-nesting-1/)

- No new features.
- Increases readability, modularity, and maintainability.
- Related styles can be aggregated; put together.
- Introduces new [_Parser_](../05-the-browser-and-the-dom/README.md#parser) rules; new way of writing CSS rules.
- Is possible through tools like SASS, Less, or other CSS preprocessors. A preprocessor would convert things that ain't supported in CSS to something that is.

```css
section {
  display: flex;
  flex-wrap: wrap;

  header {
    flex: 0 0 100%;
  }
}
```

## [Nesting selector](https://drafts.csswg.org/css-nesting-1/#nest-selector)

- `&`.
- It refers to the parent element.

These are equivalent:

```css
p {
  > span {
  }
  & > span {
  }
}
```

## Space matters

These are different:

```css
p {
  :hover {
    color: red;
  }
  &:hover {
    color: green;
  }
}
```

> [!NOTE]
>
> Here we are using the descendent selector implicitly!
>
> ```css
> p {
>   .author-name {
>     color: red;
>   }
> }
> ```
>
> Is equivalent to
>
> ```css
> p {
>   & .author-name {
>     color: red;
>   }
> }
> ```

So in case you do not wanna use descendent selector you can use nesting selector:

```css
.card {
  a {
    color: white;
    transition: all 1s ease-in 0s;

    &:hover {
      color: blue;
    }
  }
}
```

## Media query nesting

- You can also nest media queries.

  ```css
  .recommendation {
    inline-size: 50%;

    @media screen {
      @media (max-width: 780px) {
        inline-size: 100%;
      }
      @media (min-width: 1200px) {
        inline-size: 30%;
      }
    }
  }
  ```

  Note that the `inline-size` will be applied to an element with the `recommendation` class.

- It is not mandatory to nest media queries:

  ```css
  section {
    inline-size: 700px;

    @media screen and (300px <= width <= 500) {
      inline-size: 100vw;
    }
  }
  ```

> [!NOTE]
>
> Yes, we are repeating the media query part but the upside really out weight the downside.

# YouTube & Aparat

- https://youtu.be/XBeu2bUDQOY
- https://aparat.com/v/mce803i

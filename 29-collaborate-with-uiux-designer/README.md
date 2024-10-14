# Designing a web page

- You'll get a prototype from UI/UX designer.

  - Most of the times is a real work env with good structure you'll get it a Figma design. Something like these:

    - [Travel Landing Page - Mobile & Desktop Version Responsive](https://www.figma.com/community/file/1383381592193568758).
    - [Figma startup landing page dark (Community)](https://www.figma.com/community/file/827488004796756851).
    - [Landing Page - Gym. Template in Figma](https://www.figma.com/community/file/1260888393015798147/landing-page-gym-template-in-figma).

    These are free to use designs, Here I am gonna go with the gym landing page though.

  - It is also possible that you'll get the design outside of Figma, like pictures in [this directory](./motivation/).

    &mdash; [ref for this pic](https://www.bypeople.com/desktop-mobile-portfolio-sketch-landing-page/).

    But even if you get an image you'll still get the other materials (fonts, icons, pictures, etc) you'll need from your designer (it's just not like Figma where you can find everything in it).

  - And if you like to try dark theme and light theme you can [give this a shot](./simple-landing-page/design.png). It is simple yet powerful so that you can focus on the core idea behind the dark theme and not so much involved in other stuff.

- You need to analyze it.
- Landing page: The initial page that someone lands on, describe a book, or product.
- UI/UX designer will give us:
  - Colors.
  - Fonts.
  - Many pics, and icons.
  - Light theme and dark theme of the page.

## Steps

1. Analyzing the content of the page from the perspective of an HTML author.
   1. Sectioning: adding sectioning tags.
   2. Placing finer details in each section.
2. Trying to style our HTML doc, and if needed adjusting our HTML doc.

> [!TIP]
>
> `display` CSS property cannot have animation. As such our mobile menu does not have one. But if you are interested in knowing how you can simulate it you can look at [this Stackoverflow Q&A](https://stackoverflow.com/a/38772750/8784518).

# YouTube & Aparat

1. HTML part:
   - https://youtu.be/AW_K-LYkd94
   - https://aparat.com/v/caue7s1
   - Complementary:
     - https://youtu.be/GhlaUU2YtRc
     - https://aparat.com/v/uwvl69o
2. CSS Part -- mobile:
   1. Menu, you can see changes we made in [this commit](https://github.com/kasir-barati/html-css/commit/c5861aa883603bf33d9f94281c736422cc855bec):
      - https://youtu.be/OGojYSp_Siw
      - https://aparat.com/v/cxueo3m
   2. Hero section/header, you can see changes we made in [this commit](https://github.com/kasir-barati/html-css/commit/f42312007a402a2c432125d0e5f14c90aa8ee502):
      - https://youtu.be/XWZ6kGv8NPs
      - https://aparat.com/v/nle9356
   3. Reasons to join, you can see changes we made in [this commit](https://github.com/kasir-barati/html-css/commit/a3cfc63245510220602c38c74b7fe7e15e77546d):
      - https://youtu.be/g6vTpoR7_JA
      - https://aparat.com/v/mzz6j5y
   4. Membership plan, you can see changes we made in [this commit](https://github.com/kasir-barati/html-css/commit/db8edd0a0da86044b7cee91aacf2dfd2ec44cb65):
      - https://youtu.be/1cgy7vpZjhQ
      - https://aparat.com/v/hsfo26h
   5. About us, you can see changes we made in [this commit](https://github.com/kasir-barati/html-css/commit/ba9c8880902481920dd19d4aa0f16e4359a0f925):
      - https://youtu.be/XsIz0Fkx1kA
      - https://aparat.com/v/xdx2msh
   6. Trainers staff, you can see changes we made in [this commit](https://github.com/kasir-barati/html-css/commit/141ae04139dba685fc404ba2e62baea385345053):
      - https://youtu.be/UuIIflJfd04
      - https://aparat.com/v/ltxvp79
   7. Footer, you can see changes we made in [this commit](https://github.com/kasir-barati/html-css/commit/bc5c6a49f7c63768a0bb4458b1a77b7d90a1242f):
      - https://youtu.be/QKEWIoKZYDs
      - https://aparat.com/v/yodisux
3. CSS part -- tablet, you can see changes we made in [this commit](https://github.com/kasir-barati/html-css/commit/ca17536fcce9920133d4054dac743b9096d4f3c3):
   - https://youtu.be/BwdGTsAhULI
   - https://aparat.com/v/bxpc74k
4. CSS part -- desktop 1, you can see changes we made in [this commit](https://github.com/kasir-barati/html-css/commit/411cae89bbac55627b8208320a3f14161ae5a93b):
   - https://youtu.be/AB3x0wtwiQc
   - https://aparat.com/v/smb9gi4

> [!TIP]
>
> Use `filter` to change color of your image. And you can convert hexadecimal color code to `filter`'s css property value [here](https://codepen.io/sosuke/pen/Pjoqqp).

5. CSS part -- desktop 2, you can see changes we made in [this commit](https://github.com/kasir-barati/html-css/commit/4a14a00db9842c7268661ecc3d882ffae31898d4):
   - https://youtu.be/1oJ1-uUOPpI
   - https://aparat.com/v/tuayx8w

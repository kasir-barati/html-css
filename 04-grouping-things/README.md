# Representing data in a `table` in the wrong way

You have a database.
Then you wanna show your database data to the user. And you write a very complicated query to get that data.
Now the HTML author might have a tendency to representing them as they are in the database!

## Structure VS Semantic

Data structure is different than tag semantics. We have a database and in that database data is stored in tables but we should not map these two to each other. `table` element in HTML is not always the best way to represents data that we receive as response to our request to a backend, 3rd party API, etc.

So once we put the hat of a HTML author we should forget about the database and code. We must focus on how our users need those data:

- What device they will consume these data on?
- What is best way to present it to the user?
- What they'll be looking for?
- How they will use those data?

So maybe an **ordered list**, **unordered list**, **association list**, or a **card** would be the best option. With the HTML author hat on our head only user and user agent should be present in our head.

All those codes and work in the database and backend code was done so that we can fade them in the background. Now it is time for user experience.

Do not default to `table` element just because it was saved in tables in database.

> [!NOTE]
> I am not saying to completely throw `table` element in the dust bin. When `table` element is appropriate, use it. But use it judiciously, use it sparingly.

# Using `div` element, the wrong way!

First let's talk about `div`:

- What does it mean? The `div` element has no special meaning at all. It represents its children.
- Authors are strongly encouraged to view the div element as an element of last resort, for when no other element is suitable.
- It is Flow content and Palpable content.
- Its content mode:
  - If it is a child of a `dl` element: one or more `dt` elements followed by one or more `dd` elements, optionally intermixed with script-supporting elements.
  - If it is not a child of a `dl` element: flow content.

So methodically, carefully moving through HTML specification and thinking about our document will help us to be a HTML author who markup a document like this:

![A semantically correct and accurate markup](./semantically-marked-up-document.png)

And not like this:

![The wrong way of using div element](./wrong-way-of-using-div.png)

This authoring is completely wrong, and it is happening because **they are too focused on making things work visually** -- thinking and spending too much time only for one user agent. So they are using HTML elements as hooks for CSS. So good HTML authors use elements to **add meaning** to the document.
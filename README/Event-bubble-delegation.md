# Event Bubbling

Event bubbling is the process where an event starts from the target element and then propagates upward through its parent elements until it reaches the document.

```
<div id="parent">
  <button id="child">Click Me</button>
</div>

```

```
const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener("click", () => {
  console.log("Parent clicked");
});

child.addEventListener("click", () => {
  console.log("Child clicked");
});
```

If you click the button, the output is:

```
Child clicked
Parent clicked
```

You can prevent the event from propagating to parent elements with stopPropagation().

# Event Delegation

Event delegation is a technique where you attach one event listener to a parent element instead of adding listeners to each child. It relies on event bubbling to handle events from child elements.

```
<ul>
  <li>Apple</li>
  <li>Banana</li>
  <li>Mango</li>
</ul>

```

```
const list = document.querySelector("ul");

list.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log(event.target.textContent);
  }
});

```

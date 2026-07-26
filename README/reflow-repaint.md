Reflow (layout) and repaint are browser rendering operations. A reflow recalculates the layout of elements, while a repaint redraws pixels without changing layout.

Common properties that trigger reflow: Changing these often requires layout recalculation:

- width
- height
- margin
- padding
- border
- font-size
- left
- top
- display
- position

Properties that usually trigger only repaint: These don't typically affect layout but still require redrawing:

- background-color
- color
- visibility
- box-shadow
- outline

we can avoid reflow or repaint:

- Instead of modifying the DOM repeatedly: Better: Use a DocumentFragment
- Modify classes instead of many inline styles
- Use transform and opacity for animations instead of width and height very expensive
- Cache DOM references:

  ```
      const box = document.getElementById("box");

      box.style.color = "red";
      box.style.background = "blue";
  ```

# Throttling and debouncing are techniques used to control how often a function executes, especially for events that fire frequently, such as scroll, resize, mousemove, or keyup

# Debouncing

Debouncing delays the execution of a function until a specified amount of time has passed since the last event.
If the event keeps occurring, the timer keeps resetting.
Ex: Suppose the debounce delay is 500 ms and a user is typing:
use-case: search api, auto-save, form validation

```
Typing:
A --- B --- C --- D

Timer:
Reset Reset Reset Reset

500ms after D
        ↓
Function executes once
```

```
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const search = debounce(() => {
  console.log("Searching...");
}, 500);

input.addEventListener("keyup", search);

```

# Throttling

Throttling ensures a function executes at most once during a specified interval, no matter how many times the event occurs.
use-case: scroll-events, mouse movement, button click

Example
Throttle interval = 500 ms

```
Events:
A B C D E F G H

Time:
|----500ms----|----500ms----|

Function:
A            E            H
```

```
function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

const handleScroll = throttle(() => {
  console.log("Scrolling...");
}, 500);

window.addEventListener("scroll", handleScroll);
```

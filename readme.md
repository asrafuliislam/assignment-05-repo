## 1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

getElementById :- selects one element by ID, returns a single element.

getElementsByClassName :- selects all elements with a class, returns a live HTMLCollection.

querySelector :- selects first element matching a CSS selector, returns single element.

querySelectorAll :- selects all elements matching a CSS selector, returns a static NodeList.

## 2. How do you **create and insert a new element into the DOM**?

let newDiv = document.createElement("div");

newDiv.textContent = 'hello JavaScript';

document.body.appendChild(newDiv);

## 3. What is **Event Bubbling** and how does it work?

The event starts from the target element and bubbles up through its ancestors (child - parent - document).

## 4. What is **Event Delegation** in JavaScript? Why is it useful?


Event Delegation is a technique where a single event listener is attached to a parent element to handle events on its child elements using event bubbling. It makes the code more efficient and is capable of handling dynamically added elements.

## 5. What is the difference between **preventDefault() and stopPropagation()** methods?

preventDefault() - Prevents the default browser action for an event.

stopPropagation() - Stops the event from propagating (bubbling) to parent elements.

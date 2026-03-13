## Introduction to React

React is a JavaScript library for building user interfaces. It helps you create reusable UI components and manage how your application looks based on its data (state).

### Why use React?

- **Component-based**: Build encapsulated components that manage their own state, then compose them to make complex UIs.
- **Declarative**: You describe what the UI should look like for a given state, and React updates the DOM for you when the state changes.
- **Ecosystem**: A large community, many libraries, and great tooling (like React Router, Redux, Next.js, etc.).

### Core concepts

- **Components**: Functions or classes that return UI elements. Most modern React code uses function components.
- **JSX**: A syntax extension that lets you write HTML-like code inside JavaScript. It is compiled to `React.createElement` calls.
- **Props**: Input data passed from parent to child components. They are read-only.
- **State**: Data managed inside a component that can change over time. Updating state causes React to re-render the component.
- **Hooks**: Special functions (like `useState`, `useEffect`) that let you use state and other React features in function components.

### Basic example

Here is a very simple React component:

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Counter;
```

This component:

- Displays how many times the button has been clicked.
- Uses `useState` to store the current count.
- Updates the state when the button is clicked, which triggers a re-render.

### Next steps

To continue learning React, you can:

- Read the official documentation at `https://react.dev`.
- Practice by creating small components (buttons, cards, forms).
- Learn about lists, conditional rendering, forms, and lifting state up.


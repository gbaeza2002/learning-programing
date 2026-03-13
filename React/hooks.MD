# React Core Hooks Guide

React Hooks allow you to use state and other React features in functional components. They were introduced in React 16.8 and help simplify component logic and reuse stateful behavior.

---

# 1. useState

The `useState` hook allows you to add state to a functional component.

## Syntax

```javascript
const [state, setState] = useState(initialValue);
```

## Example

```javascript
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

## Key Points

- Initializes state with a value.
- Returns the current state and a function to update it.
- Updating state triggers a re-render.

---

# 2. useEffect

The `useEffect` hook lets you perform side effects in functional components.

Examples of side effects include:

- Fetching data
- Updating the DOM
- Subscribing to events
- Setting timers

## Syntax

```javascript
useEffect(() => {
  // side effect
}, [dependencies]);
```

## Example

```javascript
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return <div>{users.length} users</div>;
}
```

## Key Points

- Runs after the component renders.
- The dependency array controls when the effect runs.
- An empty array `[]` means it runs only once (on mount).

---

# 3. useContext

The `useContext` hook allows you to access values from React Context without using a Consumer component.

It helps avoid **prop drilling** in large applications.

## Syntax

```javascript
const value = useContext(MyContext);
```

## Example

```javascript
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Button() {
  const theme = useContext(ThemeContext);

  return (
    <button style={{ backgroundColor: theme }}>
      Click
    </button>
  );
}
```

## Key Points

- Simplifies access to global state.
- Works with the React Context API.
- Reduces the need to pass props through multiple levels.

---

# 4. useRef

The `useRef` hook allows you to persist values across renders and directly reference DOM elements.

## Syntax

```javascript
const ref = useRef(initialValue);
```

## Example

```javascript
import { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focusInput}>
        Focus Input
      </button>
    </div>
  );
}
```

## Key Points

- Stores a mutable value that persists across renders.
- Does not trigger re-renders when updated.
- Often used for DOM manipulation.

---

# 5. useMemo

The `useMemo` hook memoizes the result of an expensive calculation.

This improves performance by preventing unnecessary recalculations.

## Syntax

```javascript
const memoizedValue = useMemo(() => computeValue(), [dependencies]);
```

## Example

```javascript
import { useMemo } from "react";

function ExpensiveCalculation({ number }) {
  const result = useMemo(() => {
    return number * 1000;
  }, [number]);

  return <div>Result: {result}</div>;
}
```

## Key Points

- Prevents expensive calculations on every render.
- Runs only when dependencies change.
- Helps optimize performance in complex components.

---

# 6. useCallback

The `useCallback` hook memoizes functions to prevent them from being recreated on every render.

This is useful when passing functions to child components.

## Syntax

```javascript
const memoizedCallback = useCallback(() => {
  // function logic
}, [dependencies]);
```

## Example

```javascript
import { useCallback } from "react";

function Button({ onClick }) {
  return (
    <button onClick={onClick}>
      Click
    </button>
  );
}

function Parent() {
  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return <Button onClick={handleClick} />;
}
```

## Key Points

- Prevents unnecessary function re-creation.
- Useful when passing callbacks to optimized components.
- Often used with `React.memo`.

---

# Summary

| Hook | Purpose |
|-----|------|
| useState | Manage component state |
| useEffect | Handle side effects |
| useContext | Access global context values |
| useRef | Reference DOM elements or persistent values |
| useMemo | Memoize expensive calculations |
| useCallback | Memoize functions |

---

# Conclusion

React Hooks provide a powerful and clean way to manage state, lifecycle, and logic in functional components. By mastering the most common hooks, developers can write more maintainable, reusable, and performant React applications.
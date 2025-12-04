# React Keys and IDs: Complete Guide

## What are Keys?

In React, a **`key`** is a special string attribute you need to pass when creating lists of elements. Keys help React identify which items have changed, been added, or removed.

```jsx
// ✅ Correct way
{items.map(item => <li key={item.id}>{item.name}</li>)}

// ❌ Wrong way (no key)
{items.map(item => <li>{item.name}</li>)}
```

---

## Why Keys Matter

### 1. **React Reconciliation**
React uses keys to match old elements with their new counterparts. Without keys, React assumes order hasn't changed and may update the wrong elements.

### 2. **Preserving Component State**
When list items have internal state, proper keys ensure state stays with the correct item.

**Example:**
```jsx
function ListWithState({ items }) {
  return (
    <ul>
      {items.map((item, idx) => (
        // ❌ BAD: Using index as key
        <li key={idx}>
          <input type="text" defaultValue={item} />
        </li>
      ))}
    </ul>
  );
}

// If user deletes first item, input values shift to wrong items!
```

### 3. **Performance Optimization**
Unique keys allow React to reuse DOM nodes efficiently, improving rendering performance in large lists.

### 4. **Avoiding Bugs**
Index-based keys break when:
- Items are filtered
- Items are reordered
- Items are added/removed from the middle
- Items are deleted

---

## Best Practices

### ✅ DO: Use Unique, Stable IDs

```jsx
// Best: Use database ID or UUID
{users.map(user => (
  <li key={user.id}>{user.name}</li>
))}

// Good: For simple data without IDs, create stable ID
{colors.map(color => (
  <li key={`color-${color}`}>{color}</li>
))}
```

### ❌ DON'T: Use Index as Key (in dynamic lists)

```jsx
// ❌ AVOID in dynamic lists (reorder, filter, delete)
{items.map((item, idx) => (
  <li key={idx}>{item}</li>
))}

// ✅ Only OK for static lists that never change
{staticItems.map((item, idx) => (
  <li key={idx}>{item}</li>
))}
```

### ❌ DON'T: Generate Keys During Render

```jsx
// ❌ WRONG: Keys change on every render
{items.map(item => (
  <li key={Math.random()}>{item}</li>
))}

// ❌ WRONG: Same problem
{items.map(item => (
  <li key={`${item}-${Date.now()}`}>{item}</li>
))}
```

---

## Real-World Examples

### Example 1: Todo List (Dynamic)
```jsx
function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Buy milk' },
    { id: 2, text: 'Study React' }
  ]);

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>  // ✅ Use unique ID
      ))}
    </ul>
  );
}
```

### Example 2: Food Items
```jsx
// If foodItems is just strings:
const foodItems = ["vegetables", "fruits", "Salad", "Milk"];

// Better: Create unique key from item + index
{foodItems.map((item, idx) => (
  <li key={`food-${item}-${idx}`} className="list-group-item">
    {item}
  </li>
))}

// Or if no duplicates exist, use item as key
{foodItems.map(item => (
  <li key={item} className="list-group-item">
    {item}
  </li>
))}
```

### Example 3: Form with State
```jsx
function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>  // ✅ Essential here!
          <input type="text" defaultValue={user.name} />
          <input type="email" defaultValue={user.email} />
        </li>
      ))}
    </ul>
  );
}

// Without proper key, form state gets mixed up when list changes!
```

---

## When Keys Are Required

| Scenario | Required? | Why? |
|----------|-----------|------|
| Static list (never changes) | Optional | React won't reorder |
| Dynamic list (add/remove/reorder) | **Required** | Prevents state/UI bugs |
| List with form inputs | **Required** | Preserves input state |
| List with animations | **Required** | Animations tied to IDs |
| List with components | **Required** | Preserves component state |

---

## Common Mistakes

### Mistake 1: Forgetting Keys
```jsx
// ❌ Missing key prop
{items.map(item => <div>{item}</div>)}
// Warning: Each child in a list should have a unique "key" prop
```

### Mistake 2: Non-Unique Keys
```jsx
// ❌ Multiple items with same key
{items.map(item => <li key="item">{item}</li>)}
// React can't differentiate items!
```

### Mistake 3: Unstable Keys
```jsx
// ❌ Key changes on every render
{items.map(item => <li key={Math.random()}>{item}</li>)}
// React treats it as new element every time!
```

---

## Summary Checklist

- ✅ Always use `key` in `.map()` when rendering lists
- ✅ Use **unique, stable identifiers** (database IDs, UUIDs)
- ✅ Keys should not change between renders
- ✅ Each key must be unique among siblings
- ✅ Index-only keys OK only for static, never-reordered lists
- ❌ Don't generate keys with `Math.random()`, `Date.now()`, etc.
- ❌ Don't use generated keys from form values that might change

---

## React Official Documentation
- [Keys in Lists - React Docs](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key)


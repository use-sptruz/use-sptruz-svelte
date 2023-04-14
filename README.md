# @use-sptruz/svelte

This is a package for a React hook called `@use-sptruz/svelte`, which handles the rendering of Svelte components in React.

## Installation

To install `@use-sptruz/svelte`, use the following command:

```bash
# npm
npm install --save @use-sptruz/svelte

# yarn
yarn add @use-sptruz/svelte

# pnpm
pnpm add @use-sptruz/svelte
```

## Usage

```svelte
<script lang="ts">
  export let txt = "Hello from Svelte!";
  export let counter = 0;
</script>

<div>
  <h1>{txt}</h1>
  <p>Counter: {counter}</p>
</div>

```

```jsx
import React, { useState, useRef } from 'react';
import { useSvelteComponent } from '@use-sptruz/svelte';
import Hello__SvelteComponent_ from './Hello.svelte';

const SvelteComponent = <P extends {}>(
  Component: new (...args: any[]) => { $set: (props: P) => void }
) => {
  return (props: P) => {
    const svelteRef = useRef<HTMLDivElement>(null);

    useSvelteComponent(Component, props, svelteRef);

    return <div ref={svelteRef} />;
  };
};

interface SvelteProps {
  txt: string;
  counter?: number;
}

const HelloComponent = React.memo(
  SvelteComponent<SvelteProps>(Hello__SvelteComponent_)
);

const MyComponent = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <HelloComponent txt="Hello from React!" counter={counter} />
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </>
  );
};

export default MyComponent;
```

## API

### useSvelteComponent

```tsx
useSvelteComponent({
  Component: new (...args: any[]) => { $set: (props: P) => void },
  props: P,
  svelteRef: React.RefObject<HTMLDivElement>
}): void
```

This hook takes the following parameters:

- `Component` (required): A Svelte component.
- `props` (required): The props to pass to the Svelte component.
- `svelteRef` (required): A React ref to the DOM element that will contain the Svelte component.

The hook return value:

- `void` (no return value)

## License

This package is licensed under the MIT License.

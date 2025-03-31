# @rescui/use-glow-hover API Documentation

## Exported Functions

| Function | Description | Return Type |
|----------|-------------|-------------|
| `useGlowHover` |  A React hook that applies a glow effect to an HTML element on hover. The hook returns a React ref to be attached to the target element. | `MutableRefObject<HTMLElement>` |
| `glowHoverEffect` | Applies a glow effect to a specified HTML element using provided options. It returns a cleanup function that removes the event listeners and resets the element's styles. | `() => void` |

## Function Parameters

### `useGlowHover` parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `disabled` | `boolean` | `false` |  Determines whether the glow effect is disabled. |
| `hoverBg` | `string` |  | The background color to apply on hover. If not provided, it falls back to the element's current background color. |
| `lightColor` | `string` |  | The color of the glow effect.  |
| `lightSize` | `number` | `100` | The size of the glow effect in pixels. |
| `lightSizeEnterAnimationTime` | `number` | `100` | The duration of the animation when the mouse enters the element, in milliseconds. |
| `lightSizeLeaveAnimationTime` | `number` | `50` | The duration of the animation when the mouse leaves the element, in milliseconds. |
| `isElementMovable` | `boolean` | `false` |  Determines whether the element is movable. If `true`, the glow effect will update its position based on the element's current position. |
| `customStaticBg` | `string` | `null` |  A custom static background to apply when the mouse leaves the element. |
| `forceTheme` | `'light'` or `'dark'` or `false` | `null` |  Forces a specific theme (`'light'` or `'dark'`) on hover. Use with caution as it overrides the default theme. |
| `enableBurst` | `boolean` | `false` |  Enables a burst effect on mouse down and up. |
| `mode` | `'glow'` or `'sharp'` | `'glow'` |  The mode of the glow effect. |
| `preset` | `'transparent-blue'` or `'transparent-purple'` or `'transparent-marine'` or `'transparent-tangerine'` or `'transparent-strawberry'` or `'bright-magenta'` or `'bright-magenta-dark'` or `'bright-pink'` or `'bright-pink-dark'` or `'bright-fresh-green'` or `'bright-fresh-green-dark'` or `'bright-red'` or `'bright-red-dark'` or `'bright-orange'` or `'bright-orange-dark'` or `'bright-cold-green'` or `'bright-cold-green-dark'` or `'bright-purple'` or `'bright-purple-dark'` |  |  A preset configuration for the glow effect. Overrides individual options if specified. |

### `glowHoverEffect` parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `el` | `HTMLElement` |  | The HTML element to apply the glow effect to. |
| `preset` | `'transparent-blue'` or `'transparent-purple'` or `'transparent-marine'` or `'transparent-tangerine'` or `'transparent-strawberry'` or `'bright-magenta'` or `'bright-magenta-dark'` or `'bright-pink'` or `'bright-pink-dark'` or `'bright-fresh-green'` or `'bright-fresh-green-dark'` or `'bright-red'` or `'bright-red-dark'` or `'bright-orange'` or `'bright-orange-dark'` or `'bright-cold-green'` or `'bright-cold-green-dark'` or `'bright-purple'` or `'bright-purple-dark'` |  |  A preset configuration for the glow effect. Overrides individual options if specified. |
| `hoverBg` | `string` |  | The background color to apply on hover. If not provided, it falls back to the element's current background color. |
| `lightColor` | `string` |  | The color of the glow effect.  |
| `lightSize` | `number` | `100` | The size of the glow effect in pixels. |
| `lightSizeEnterAnimationTime` | `number` | `100` | The duration of the animation when the mouse enters the element, in milliseconds. |
| `lightSizeLeaveAnimationTime` | `number` | `50` | The duration of the animation when the mouse leaves the element, in milliseconds. |
| `isElementMovable` | `boolean` | `false` |  Determines whether the element is movable. If `true`, the glow effect will update its position based on the element's current position. |
| `customStaticBg` | `string` | `null` |  A custom static background to apply when the mouse leaves the element. |
| `forceTheme` | `'light'` or `'dark'` or `false` | `null` |  Forces a specific theme (`'light'` or `'dark'`) on hover. Use with caution as it overrides the default theme. |
| `enableBurst` | `boolean` | `false` |  Enables a burst effect on mouse down and up. |
| `mode` | `'glow'` or `'sharp'` | `'glow'` |  The mode of the glow effect. |


## Usage Examples

### `useGlowHover` Examples

#### Basic Usage (Default Settings)
```jsx
import React from 'react';
import { useGlowHover } from '@rescui/use-glow-hover';

function MyComponent() {
  const ref = useGlowHover({});

  return (
    <button ref={ref}>
      Hover Me
    </button>
  );
}

export default MyComponent;
```

#### Using a Preset
```jsx
import React from 'react';
import { useGlowHover } from '@rescui/use-glow-hover';

function MyComponent() {
  const ref = useGlowHover({ preset: 'transparent-blue' });

  return (
    <button ref={ref}>
      Hover Me
    </button>
  );
}

export default MyComponent;
```

#### Custom Configuration
```jsx
import React from 'react';
import { useGlowHover } from '@rescui/use-glow-hover';

function MyComponent() {
  const ref = useGlowHover({
    lightColor: 'orange',
    lightSize: 150,
    lightSizeEnterAnimationTime: 300,
    lightSizeLeaveAnimationTime: 150,
  });

  return (
    <button ref={ref}>
      Hover Me
    </button>
  );
}

export default MyComponent;
```

### `glowHoverEffect` Examples

#### Basic Usage (Default Settings)
```js
import { glowHoverEffect } from '@rescui/use-glow-hover';

const button = document.querySelector('button');

if (button) {
  const cleanup = glowHoverEffect(button, { lightColor: 'red' });

  // To remove the effect later:
  // cleanup();
}
```

#### Using a Preset
```js
import { glowHoverEffect } from '@rescui/use-glow-hover';

const button = document.querySelector('button');

if (button) {
  const cleanup = glowHoverEffect(button, { preset: 'bright-magenta' });

  // To remove the effect later:
  // cleanup();
}
```

#### Custom Configuration
```js
import { glowHoverEffect } from '@rescui/use-glow-hover';

const button = document.querySelector('button');

if (button) {
  const cleanup = glowHoverEffect(button, {
    lightColor: 'purple',
    lightSize: 120,
    hoverBg: 'lightgray',
    enableBurst: true
  });

  // To remove the effect later:
  // cleanup();
}
```
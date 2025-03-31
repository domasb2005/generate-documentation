# @rescui/use-glow-hover API Documentation

## Exported Functions

| Function | Description | Return Type |
|----------|-------------|-------------|
| `useGlowHover` | A custom React hook that applies a glow effect to an element on hover. The hook takes an options object to configure the glow effect. | `MutableRefObject<HTMLElement>` |
| `glowHoverEffect` | Applies a glow effect to a specified HTML element. This function returns a cleanup function that removes all event listeners and resets the element's styles to prevent memory leaks. | `() => void` |

## Function Parameters

### `useGlowHover` parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `disabled` | `boolean` | `false` | If `true`, the glow effect is disabled. |
| `hoverBg` | `string` |  | Background color to be used on hover. If not provided, the element's current background color will be used. |
| `lightColor` | `string` |  | Color of the glow effect. Must be specified directly or via a `preset`. |
| `lightSize` | `number` | `100` | Size of the glow effect in pixels. |
| `lightSizeEnterAnimationTime` | `number` | `100` | Duration of the animation when the mouse enters the element, in milliseconds. |
| `lightSizeLeaveAnimationTime` | `number` | `50` | Duration of the animation when the mouse leaves the element, in milliseconds. |
| `isElementMovable` | `boolean` | `false` | If `true`, the glow effect will update its position if the element moves. |
| `customStaticBg` | `string` | `null` | A static background to apply when the mouse leaves the element. If not provided, the background will be reset to its original state. |
| `forceTheme` | `'light'` or `'dark'` or `false` | `null` | Forces a specific theme (`'light'` or `'dark'`) on hover. Use with caution as it overrides the existing theme. |
| `enableBurst` | `boolean` | `false` | If `true`, enables a burst effect on mouse down and mouse up events. |
| `mode` | `'glow'` or `'sharp'` | `'glow'` | The glow mode. |
| `preset` | `'transparent-blue'` or `'transparent-purple'` or `'transparent-marine'` or `'transparent-tangerine'` or `'transparent-strawberry'` or `'bright-magenta'` or `'bright-magenta-dark'` or `'bright-pink'` or `'bright-pink-dark'` or `'bright-fresh-green'` or `'bright-fresh-green-dark'` or `'bright-red'` or `'bright-red-dark'` or `'bright-orange'` or `'bright-orange-dark'` or `'bright-cold-green'` or `'bright-cold-green-dark'` or `'bright-purple'` or `'bright-purple-dark'` |  | A predefined configuration for the glow effect. Specifying a `preset` merges its settings with any other options passed. |

### `glowHoverEffect` parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `el` | `HTMLElement` |  | The HTML element to which the glow effect will be applied. |
| `hoverBg` | `string` |  | Background color to be used on hover. If not provided, the element's current background color will be used. |
| `lightColor` | `string` |  | Color of the glow effect. Must be specified directly or via a `preset`. |
| `lightSize` | `number` | `100` | Size of the glow effect in pixels. |
| `lightSizeEnterAnimationTime` | `number` | `100` | Duration of the animation when the mouse enters the element, in milliseconds. |
| `lightSizeLeaveAnimationTime` | `number` | `50` | Duration of the animation when the mouse leaves the element, in milliseconds. |
| `isElementMovable` | `boolean` | `false` | If `true`, the glow effect will update its position if the element moves. |
| `customStaticBg` | `string` | `null` | A static background to apply when the mouse leaves the element. If not provided, the background will be reset to its original state. |
| `forceTheme` | `'light'` or `'dark'` or `false` | `null` | Forces a specific theme (`'light'` or `'dark'`) on hover. Use with caution as it overrides the existing theme. |
| `enableBurst` | `boolean` | `false` | If `true`, enables a burst effect on mouse down and mouse up events. |
| `mode` | `'glow'` or `'sharp'` | `'glow'` | The glow mode. |
| `preset` | `'transparent-blue'` or `'transparent-purple'` or `'transparent-marine'` or `'transparent-tangerine'` or `'transparent-strawberry'` or `'bright-magenta'` or `'bright-magenta-dark'` or `'bright-pink'` or `'bright-pink-dark'` or `'bright-fresh-green'` or `'bright-fresh-green-dark'` or `'bright-red'` or `'bright-red-dark'` or `'bright-orange'` or `'bright-orange-dark'` or `'bright-cold-green'` or `'bright-cold-green-dark'` or `'bright-purple'` or `'bright-purple-dark'` |  | A predefined configuration for the glow effect. Specifying a `preset` merges its settings with any other options passed. |

## Usage Examples

### `useGlowHover` Examples

#### Basic Usage (Default Settings)
```jsx
import React from 'react';
import { useGlowHover } from '@rescui/use-glow-hover';

function MyComponent() {
  const ref = useGlowHover({});

  return <button ref={ref}>Hover me</button>;
}
```

#### Using a Preset
```jsx
import React from 'react';
import { useGlowHover } from '@rescui/use-glow-hover';

function MyComponent() {
  const ref = useGlowHover({ preset: 'transparent-blue' });

  return <button ref={ref}>Hover me</button>;
}
```

#### Custom Configuration
```jsx
import React from 'react';
import { useGlowHover } from '@rescui/use-glow-hover';

function MyComponent() {
  const ref = useGlowHover({
    lightColor: 'red',
    lightSize: 150,
    lightSizeEnterAnimationTime: 300,
    lightSizeLeaveAnimationTime: 150,
    hoverBg: 'lightgrey'
  });

  return <button ref={ref}>Hover me</button>;
}
```

### `glowHoverEffect` Examples

#### Basic Usage (Default Settings)
```js
import { glowHoverEffect } from '@rescui/use-glow-hover';

const element = document.getElementById('myElement');

if (element) {
  const cleanup = glowHoverEffect(element, { lightColor: 'blue' });

  // To remove the effect later:
  // cleanup();
}
```

#### Using a Preset
```js
import { glowHoverEffect } from '@rescui/use-glow-hover';

const element = document.getElementById('myElement');

if (element) {
  const cleanup = glowHoverEffect(element, { preset: 'bright-magenta' });

  // To remove the effect later:
  // cleanup();
}
```

#### Custom Configuration
```js
import { glowHoverEffect } from '@rescui/use-glow-hover';

const element = document.getElementById('myElement');

if (element) {
  const cleanup = glowHoverEffect(element, {
    lightColor: 'orange',
    lightSize: 200,
    lightSizeEnterAnimationTime: 500,
    lightSizeLeaveAnimationTime: 250,
    hoverBg: 'purple',
    enableBurst: true
  });

  // To remove the effect later:
  // cleanup();
}
```
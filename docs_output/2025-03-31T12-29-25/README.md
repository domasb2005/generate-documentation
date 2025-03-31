# @rescui/use-glow-hover API Documentation

## Exported Functions

| Function | Description | Return Type |
|----------|-------------|-------------|
| `useGlowHover` | A custom React hook for adding a glow effect on hover to an element. It returns a React ref to be attached to the target HTML element. | `MutableRefObject<HTMLElement>` |
| `glowHoverEffect` | Applies the glow hover effect directly to a given HTML element. It returns a cleanup function that removes the event listeners and resets the element's styles. | `() => void` |

## Function Parameters

### `useGlowHover` parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `disabled` | `boolean` | `false` |  If `true`, the glow effect is disabled. |
| `hoverBg` | `string` |  | Background color to apply on hover. If not provided, the element's current background color is used. |
| `lightColor` | `string` |  | The color of the glow effect.  |
| `lightSize` | `number` | `100` | The size of the glow effect in pixels. |
| `lightSizeEnterAnimationTime` | `number` | `100` | The duration of the animation when the mouse enters the element, in milliseconds. |
| `lightSizeLeaveAnimationTime` | `number` | `50` | The duration of the animation when the mouse leaves the element, in milliseconds. |
| `isElementMovable` | `boolean` | `false` | If `true`, the glow effect will update its position based on the element's current position, useful for elements that move on the page. |
| `customStaticBg` | `string` | `null` | A custom static background to set when the mouse leaves the element. If not provided, the background is reset to its original state. |
| `forceTheme` | `'light'` or `'dark'` or `false` | `null` |  Forces a specific theme on hover. Use with caution as it can override existing themes. |
| `enableBurst` | `boolean` | `false` | If `true`, enables a burst effect on mouse down and mouse up. |
| `mode` | `'glow'` or `'sharp'` | `'glow'` | The mode of the glow effect.  |
| `preset` | `'transparent-blue'` or `'transparent-purple'` or `'transparent-marine'` or `'transparent-tangerine'` or `'transparent-strawberry'` or `'bright-magenta'` or `'bright-magenta-dark'` or `'bright-pink'` or `'bright-pink-dark'` or `'bright-fresh-green'` or `'bright-fresh-green-dark'` or `'bright-red'` or `'bright-red-dark'` or `'bright-orange'` or `'bright-orange-dark'` or `'bright-cold-green'` or `'bright-cold-green-dark'` or `'bright-purple'` or `'bright-purple-dark'` |  | A preset configuration for the glow effect. Overrides other options if there are conflicts.  |

### `glowHoverEffect` parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `el` | `HTMLElement` |  | The HTML element to apply the glow effect to. |
| `hoverBg` | `string` |  | Background color to apply on hover. If not provided, the element's current background color is used. |
| `lightColor` | `string` |  | The color of the glow effect.  |
| `lightSize` | `number` | `100` | The size of the glow effect in pixels. |
| `lightSizeEnterAnimationTime` | `number` | `100` | The duration of the animation when the mouse enters the element, in milliseconds. |
| `lightSizeLeaveAnimationTime` | `number` | `50` | The duration of the animation when the mouse leaves the element, in milliseconds. |
| `isElementMovable` | `boolean` | `false` | If `true`, the glow effect will update its position based on the element's current position, useful for elements that move on the page. |
| `customStaticBg` | `string` | `null` | A custom static background to set when the mouse leaves the element. If not provided, the background is reset to its original state. |
| `forceTheme` | `'light'` or `'dark'` or `false` | `null` |  Forces a specific theme on hover. Use with caution as it can override existing themes. |
| `enableBurst` | `boolean` | `false` | If `true`, enables a burst effect on mouse down and mouse up. |
| `mode` | `'glow'` or `'sharp'` | `'glow'` | The mode of the glow effect.  |
| `preset` | `'transparent-blue'` or `'transparent-purple'` or `'transparent-marine'` or `'transparent-tangerine'` or `'transparent-strawberry'` or `'bright-magenta'` or `'bright-magenta-dark'` or `'bright-pink'` or `'bright-pink-dark'` or `'bright-fresh-green'` or `'bright-fresh-green-dark'` or `'bright-red'` or `'bright-red-dark'` or `'bright-orange'` or `'bright-orange-dark'` or `'bright-cold-green'` or `'bright-cold-green-dark'` or `'bright-purple'` or `'bright-purple-dark'` |  | A preset configuration for the glow effect. Overrides other options if there are conflicts.  |

## Usage Examples

### `useGlowHover` Examples

#### Basic Usage (with lightColor)
```jsx
import React from 'react';
import { useGlowHover } from '@rescui/use-glow-hover';

function MyComponent() {
  const ref = useGlowHover({ lightColor: 'rgba(255, 0, 0, 0.5)' });

  return (
    <button ref={ref} style={{ padding: '10px', border: '1px solid black' }}>
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
    <button ref={ref} style={{ padding: '10px', border: '1px solid black' }}>
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
    lightColor: 'yellow',
    lightSize: 150,
    lightSizeEnterAnimationTime: 300,
    lightSizeLeaveAnimationTime: 150,
    enableBurst: true
  });

  return (
    <button ref={ref} style={{ padding: '10px', border: '1px solid black' }}>
      Hover Me
    </button>
  );
}

export default MyComponent;
```

### `glowHoverEffect` Examples

#### Basic Usage (with lightColor)
```js
import { glowHoverEffect } from '@rescui/use-glow-hover';

const button = document.querySelector('button');

if (button) {
  const cleanup = glowHoverEffect(button, { lightColor: 'rgba(0, 255, 0, 0.5)' });

  // To remove the effect later:
  // cleanup();
}
```

#### Using a Preset
```js
import { glowHoverEffect } from '@rescui/use-glow-hover';

const button = document.querySelector('button');

if (button) {
  const cleanup = glowHoverEffect(button, { preset: 'transparent-purple' });

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
    lightColor: 'orange',
    lightSize: 120,
    lightSizeEnterAnimationTime: 200,
    lightSizeLeaveAnimationTime: 100,
    hoverBg: 'lightblue'
  });

  // To remove the effect later:
  // cleanup();
}
```
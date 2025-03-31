# @rescui/use-glow-hover API Documentation

## Exported Functions

| Function | Description | Return Type |
|----------|-------------|-------------|
| `useGlowHover` | A React hook that applies a glow effect to an HTML element on hover. | `MutableRefObject<HTMLElement>` |
| `glowHoverEffect` | Applies a glow effect to a specified HTML element. Returns a cleanup function to remove the effect. | `() => void` |

## Function Parameters

### `useGlowHover` parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `disabled` | `boolean` | `false` | If `true`, the glow effect is disabled. |
| `hoverBg` | `string` | `undefined` | The background color to apply on hover. If not specified, the element's current background color is used. |
| `lightColor` | `string` | `undefined` | The color of the glow effect. Must be specified directly or via a preset. |
| `lightSize` | `number` | `100` | The size of the glow effect in pixels. |
| `lightSizeEnterAnimationTime` | `number` | `100` | The duration of the animation when the glow effect appears, in milliseconds. |
| `lightSizeLeaveAnimationTime` | `number` | `50` | The duration of the animation when the glow effect disappears, in milliseconds. |
| `isElementMovable` | `boolean` | `false` | If `true`, the glow effect will update its position when the element moves (e.g., on scroll). |
| `customStaticBg` | `string` | `null` | A static background to apply when the mouse leaves the element. If not specified, the background is cleared. |
| `forceTheme` | `'light'` or `'dark'` or `false` | `null` | Forces a specific theme (`'light'` or `'dark'`) on hover. Use with caution as this can override existing styles. |
| `enableBurst` | `boolean` | `false` | If `true`, enables a burst effect on mouse down and mouse up. |
| `mode` | `'glow'` or `'sharp'` | `'glow'` | The mode of the glow effect. `'glow'` creates a smooth gradient, `'sharp'` creates a sharp gradient. |
| `preset` | `'transparent-blue'` or `'transparent-purple'` or `'transparent-marine'` or `'transparent-tangerine'` or `'transparent-strawberry'` or `'bright-magenta'` or `'bright-magenta-dark'` or `'bright-pink'` or `'bright-pink-dark'` or `'bright-fresh-green'` or `'bright-fresh-green-dark'` or `'bright-red'` or `'bright-red-dark'` or `'bright-orange'` or `'bright-orange-dark'` or `'bright-cold-green'` or `'bright-cold-green-dark'` or `'bright-purple'` or `'bright-purple-dark'` | `undefined` | A predefined configuration for the glow effect. Overrides default values. |

### `glowHoverEffect` parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `el` | `HTMLElement` | `undefined` | The HTML element to apply the glow effect to. |
| `hoverBg` | `string` | `undefined` | The background color to apply on hover. If not specified, the element's current background color is used. |
| `lightColor` | `string` | `undefined` | The color of the glow effect. Must be specified directly or via a preset. |
| `lightSize` | `number` | `100` | The size of the glow effect in pixels. |
| `lightSizeEnterAnimationTime` | `number` | `100` | The duration of the animation when the glow effect appears, in milliseconds. |
| `lightSizeLeaveAnimationTime` | `number` | `50` | The duration of the animation when the glow effect disappears, in milliseconds. |
| `isElementMovable` | `boolean` | `false` | If `true`, the glow effect will update its position when the element moves (e.g., on scroll). |
| `customStaticBg` | `string` | `null` | A static background to apply when the mouse leaves the element. If not specified, the background is cleared. |
| `forceTheme` | `'light'` or `'dark'` or `false` | `null` | Forces a specific theme (`'light'` or `'dark'`) on hover. Use with caution as this can override existing styles. |
| `enableBurst` | `boolean` | `false` | If `true`, enables a burst effect on mouse down and mouse up. |
| `mode` | `'glow'` or `'sharp'` | `'glow'` | The mode of the glow effect. `'glow'` creates a smooth gradient, `'sharp'` creates a sharp gradient. |
| `preset` | `'transparent-blue'` or `'transparent-purple'` or `'transparent-marine'` or `'transparent-tangerine'` or `'transparent-strawberry'` or `'bright-magenta'` or `'bright-magenta-dark'` or `'bright-pink'` or `'bright-pink-dark'` or `'bright-fresh-green'` or `'bright-fresh-green-dark'` or `'bright-red'` or `'bright-red-dark'` or `'bright-orange'` or `'bright-orange-dark'` or `'bright-cold-green'` or `'bright-cold-green-dark'` or `'bright-purple'` or `'bright-purple-dark'` | `undefined` | A predefined configuration for the glow effect. Overrides default values. |

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
      Hover Me (Default Glow)
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
      Hover Me (Transparent Blue Glow)
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
    lightColor: '#FFFF00',
    lightSize: 150,
    hoverBg: '#0000FF',
    lightSizeEnterAnimationTime: 300,
    lightSizeLeaveAnimationTime: 150
  });

  return (
    <button ref={ref} style={{color: 'white'}}>
      Hover Me (Custom Glow)
    </button>
  );
}

export default MyComponent;
```

### `glowHoverEffect` Examples

#### Basic Usage (Default Settings)
```js
import { glowHoverEffect } from '@rescui/use-glow-hover';

const element = document.getElementById('myElement');

if (element) {
  const cleanup = glowHoverEffect(element, {});

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
    lightColor: 'red',
    lightSize: 200,
    hoverBg: 'green',
    lightSizeEnterAnimationTime: 200,
    lightSizeLeaveAnimationTime: 100
  });

  // To remove the effect later:
  // cleanup();
}
```
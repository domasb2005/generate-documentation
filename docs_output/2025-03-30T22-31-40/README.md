# @rescui/use-glow-hover API Documentation

## Exported Functions

| Function | Description | Return Type |
|----------|-------------|-------------|
| `useGlowHover` | A React hook that applies a glow effect to an HTML element on hover. The hook returns a `ref` to be attached to the element. | `MutableRefObject<HTMLElement>` |
| `glowHoverEffect` | A function that applies a glow effect to a specified HTML element. Returns a cleanup function that removes the event listeners and resets the element's styles. | `() => void` |

## Function Parameters

### `useGlowHover` parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `disabled` | `boolean` | `false` | If `true`, the glow effect is disabled. |
| `hoverBg` | `string` |  | Background color to apply on hover. If not specified, it will try to read `hoverBg` from a `preset` and fallback to `backgroundColor` of the target element. |
| `lightColor` | `string` |  | Color of the glow effect. Required unless a `preset` is provided. |
| `lightSize` | `number` | `100` | Size of the glow effect in pixels. |
| `lightSizeEnterAnimationTime` | `number` | `100` | Animation time in milliseconds for the glow effect to appear on mouse enter. |
| `lightSizeLeaveAnimationTime` | `number` | `50` | Animation time in milliseconds for the glow effect to disappear on mouse leave. |
| `isElementMovable` | `boolean` | `false` | If `true`, the glow effect will update its position when the element moves (e.g., on scroll or resize). |
| `customStaticBg` | `string` | `null` | A custom background to apply when the mouse leaves the element. If not provided, the background will be reset to its original state. |
| `forceTheme` | `'light'` or `'dark'` or `false` | `null` | Forces a specific theme (`'light'` or `'dark'`) to be applied to the element on hover. Use with caution. |
| `enableBurst` | `boolean` | `false` | If `true`, enables a burst effect on mouse down and mouse up events. |
| `mode` | `'glow'` or `'sharp'` | `'glow'` | The mode of the glow effect. |
| `preset` | `'transparent-blue'` or `'transparent-purple'` or `'transparent-marine'` or `'transparent-tangerine'` or `'transparent-strawberry'` or `'bright-magenta'` or `'bright-magenta-dark'` or `'bright-pink'` or `'bright-pink-dark'` or `'bright-fresh-green'` or `'bright-fresh-green-dark'` or `'bright-red'` or `'bright-red-dark'` or `'bright-orange'` or `'bright-orange-dark'` or `'bright-cold-green'` or `'bright-cold-green-dark'` or `'bright-purple'` or `'bright-purple-dark'` |  | A preset configuration for the glow effect. If a preset is specified, `lightColor` can be specified to override the color in the preset. |

### `glowHoverEffect` parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `el` | `HTMLElement` |  | The HTML element to apply the glow effect to. |
| `hoverBg` | `string` |  | Background color to apply on hover. If not specified, it will try to read `hoverBg` from a `preset` and fallback to `backgroundColor` of the target element. |
| `lightColor` | `string` |  | Color of the glow effect. Required unless a `preset` is provided. |
| `lightSize` | `number` | `100` | Size of the glow effect in pixels. |
| `lightSizeEnterAnimationTime` | `number` | `100` | Animation time in milliseconds for the glow effect to appear on mouse enter. |
| `lightSizeLeaveAnimationTime` | `number` | `50` | Animation time in milliseconds for the glow effect to disappear on mouse leave. |
| `isElementMovable` | `boolean` | `false` | If `true`, the glow effect will update its position when the element moves (e.g., on scroll or resize). |
| `customStaticBg` | `string` | `null` | A custom background to apply when the mouse leaves the element. If not provided, the background will be reset to its original state. |
| `forceTheme` | `'light'` or `'dark'` or `false` | `null` | Forces a specific theme (`'light'` or `'dark'`) to be applied to the element on hover. Use with caution. |
| `enableBurst` | `boolean` | `false` | If `true`, enables a burst effect on mouse down and mouse up events. |
| `mode` | `'glow'` or `'sharp'` | `'glow'` | The mode of the glow effect. |
| `preset` | `'transparent-blue'` or `'transparent-purple'` or `'transparent-marine'` or `'transparent-tangerine'` or `'transparent-strawberry'` or `'bright-magenta'` or `'bright-magenta-dark'` or `'bright-pink'` or `'bright-pink-dark'` or `'bright-fresh-green'` or `'bright-fresh-green-dark'` or `'bright-red'` or `'bright-red-dark'` or `'bright-orange'` or `'bright-orange-dark'` or `'bright-cold-green'` or `'bright-cold-green-dark'` or `'bright-purple'` or `'bright-purple-dark'` |  | A preset configuration for the glow effect. If a preset is specified, `lightColor` can be specified to override the color in the preset. |

## Usage Examples

### `useGlowHover` Examples

#### Basic Usage (Default Settings)
```jsx
import React from 'react';
import { useGlowHover } from '@rescui/use-glow-hover';

function MyComponent() {
  const ref = useGlowHover({ lightColor: 'rgba(0, 123, 255, 0.5)' });

  return (
    <button ref={ref}>
      Hover Me (Default Settings)
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
      Hover Me (Transparent Blue Preset)
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
    lightColor: 'rgba(255, 0, 0, 0.7)',
    lightSize: 150,
    lightSizeEnterAnimationTime: 300,
    lightSizeLeaveAnimationTime: 150,
    hoverBg: '#eee',
    enableBurst: true,
    mode: 'sharp'
  });

  return (
    <button ref={ref}>
      Hover Me (Custom Settings)
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
const cleanup = glowHoverEffect(button, { lightColor: 'rgba(0, 123, 255, 0.5)' });

// To remove the effect:
// cleanup();
```

#### Using a Preset
```js
import { glowHoverEffect } from '@rescui/use-glow-hover';

const button = document.querySelector('button');
const cleanup = glowHoverEffect(button, { preset: 'transparent-purple' });

// To remove the effect:
// cleanup();
```

#### Custom Configuration
```js
import { glowHoverEffect } from '@rescui/use-glow-hover';

const button = document.querySelector('button');
const cleanup = glowHoverEffect(button, {
  lightColor: 'rgba(0, 255, 0, 0.8)',
  lightSize: 120,
  hoverBg: '#f0f0f0',
  lightSizeEnterAnimationTime: 200,
  lightSizeLeaveAnimationTime: 100,
  isElementMovable: true,
  mode: 'sharp'
});

// To remove the effect:
// cleanup();
```
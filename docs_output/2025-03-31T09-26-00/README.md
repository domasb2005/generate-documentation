# @rescui/use-glow-hover API Documentation

## Exported Functions

| Function | Description | Return Type |
|----------|-------------|-------------|
| `useGlowHover` | Custom React hook for adding a glow effect on hover to an element.  It returns a React ref to be attached to the target HTML element. | `React.MutableRefObject<HTMLElement>` |
| `glowHoverEffect` | Applies a glow effect on hover to a specified HTML element. It returns a cleanup function that removes the event listeners and resets the element's styles. | `() => void` |

## Function Parameters

### `useGlowHover` parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `disabled` | `boolean` | `false` |  Whether the glow effect is disabled. |
| `hoverBg` | `string` |  | Background color of the element on hover. If not specified, it's derived from the element's current background color. |
| `lightColor` | `string` |  | The color of the glow effect. **Required parameter!** |
| `lightSize` | `number` | `100` |  The size of the glow effect in pixels. |
| `lightSizeEnterAnimationTime` | `number` | `100` |  The duration of the animation when the mouse enters the element, in milliseconds. |
| `lightSizeLeaveAnimationTime` | `number` | `50` |  The duration of the animation when the mouse leaves the element, in milliseconds. |
| `isElementMovable` | `boolean` | `false` |  Whether the element's position can change, used to update the glow effect accordingly. |
| `customStaticBg` | `string` | `null` | Custom background to apply when the mouse leaves the element. |
| `forceTheme` | `'light'` or `'dark'` or `false` | `null` |  Forces the theme to light or dark on hover. Use with caution. |
| `enableBurst` | `boolean` | `false` |  Whether to enable the burst effect on mouse down/up. |
| `mode` | `'glow'` or `'sharp'` | `'glow'` | The mode of the glow effect. |
| `preset` | `'transparent-blue'` or `'transparent-purple'` or `'transparent-marine'` or `'transparent-tangerine'` or `'transparent-strawberry'` or `'bright-magenta'` or `'bright-magenta-dark'` or `'bright-pink'` or `'bright-pink-dark'` or `'bright-fresh-green'` or `'bright-fresh-green-dark'` or `'bright-red'` or `'bright-red-dark'` or `'bright-orange'` or `'bright-orange-dark'` or `'bright-cold-green'` or `'bright-cold-green-dark'` or `'bright-purple'` or `'bright-purple-dark'` |  | Preset configuration to use. If a preset is provided, `lightColor` is still required. |

### `glowHoverEffect` parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `el` | `HTMLElement` |  | The HTML element to apply the glow effect to. |
| `preset` | `'transparent-blue'` or `'transparent-purple'` or `'transparent-marine'` or `'transparent-tangerine'` or `'transparent-strawberry'` or `'bright-magenta'` or `'bright-magenta-dark'` or `'bright-pink'` or `'bright-pink-dark'` or `'bright-fresh-green'` or `'bright-fresh-green-dark'` or `'bright-red'` or `'bright-red-dark'` or `'bright-orange'` or `'bright-orange-dark'` or `'bright-cold-green'` or `'bright-cold-green-dark'` or `'bright-purple'` or `'bright-purple-dark'` |  | Preset configuration to use. If a preset is provided, `lightColor` is still required. |
| `hoverBg` | `string` |  | Background color of the element on hover. If not specified, it's derived from the element's current background color. |
| `lightColor` | `string` |  | The color of the glow effect. **Required parameter!** |
| `lightSize` | `number` | `100` |  The size of the glow effect in pixels. |
| `lightSizeEnterAnimationTime` | `number` | `100` |  The duration of the animation when the mouse enters the element, in milliseconds. |
| `lightSizeLeaveAnimationTime` | `number` | `50` |  The duration of the animation when the mouse leaves the element, in milliseconds. |
| `isElementMovable` | `boolean` | `false` |  Whether the element's position can change, used to update the glow effect accordingly. |
| `customStaticBg` | `string` | `null` | Custom background to apply when the mouse leaves the element. |
| `forceTheme` | `'light'` or `'dark'` or `false` | `null` |  Forces the theme to light or dark on hover. Use with caution. |
| `enableBurst` | `boolean` | `false` |  Whether to enable the burst effect on mouse down/up. |
| `mode` | `'glow'` or `'sharp'` | `'glow'` | The mode of the glow effect. |

## Usage Examples

### `useGlowHover` Examples

#### Basic Usage (Default Settings)
```jsx
import React from 'react';
import { useGlowHover } from '@rescui/use-glow-hover';

function MyComponent() {
  const glowRef = useGlowHover({ lightColor: 'rgba(0, 255, 0, 0.5)' });

  return (
    <button ref={glowRef}>
      Hover Me (Green Glow)
    </button>
  );
}
```

#### Using a Preset
```jsx
import React from 'react';
import { useGlowHover } from '@rescui/use-glow-hover';

function MyComponent() {
  const glowRef = useGlowHover({ preset: 'transparent-blue', lightColor: 'rgba(0, 255, 0, 0.5)' });

  return (
    <button ref={glowRef}>
      Hover Me (Transparent Blue Preset)
    </button>
  );
}
```

#### Custom Configuration
```jsx
import React from 'react';
import { useGlowHover } from '@rescui/use-glow-hover';

function MyComponent() {
  const glowRef = useGlowHover({
    lightColor: 'rgba(255, 0, 0, 0.7)',
    lightSize: 150,
    lightSizeEnterAnimationTime: 300,
    lightSizeLeaveAnimationTime: 150,
    enableBurst: true,
  });

  return (
    <button ref={glowRef}>
      Hover Me (Custom Red Glow with Burst)
    </button>
  );
}
```

### `glowHoverEffect` Examples

#### Basic Usage (Default Settings)
```js
import { glowHoverEffect } from '@rescui/use-glow-hover';

const element = document.getElementById('myElement');

if (element) {
  const cleanup = glowHoverEffect(element, { lightColor: 'rgba(0, 0, 255, 0.5)' });

  // To remove the effect later:
  // cleanup();
}
```

#### Using a Preset
```js
import { glowHoverEffect } from '@rescui/use-glow-hover';

const element = document.getElementById('myElement');

if (element) {
  const cleanup = glowHoverEffect(element, { preset: 'transparent-purple', lightColor: 'rgba(0, 0, 255, 0.5)' });

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
    lightColor: 'rgba(255, 255, 0, 0.8)',
    lightSize: 80,
    hoverBg: '#333',
    mode: 'sharp'
  });

  // To remove the effect later:
  // cleanup();
}
```
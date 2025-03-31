# @rescui/use-glow-hover API Documentation

## Exported Functions

| Function | Description | Return Type |
|----------|-------------|-------------|
| `useGlowHover` | Custom React hook for adding a glow effect on hover to an element. The hook returns a React ref to be attached to the target element. | `React.MutableRefObject<HTMLElement>` |
| `glowHoverEffect` | Applies a glow effect to a specified HTML element on hover. It returns a cleanup function that removes the event listeners and styles applied by the effect. | `() => void` |

## Function Parameters

### `useGlowHover` parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `disabled` | `boolean` | `false` | Whether the glow effect is disabled. |
| `hoverBg` | `string` |  | Background color of the element on hover. If not provided, the background color of the element is used. |
| `lightColor` | `string` |  | Color of the glow effect. |
| `lightSize` | `number` | `100` | Size of the glow effect in pixels. |
| `lightSizeEnterAnimationTime` | `number` | `100` | Animation time for the glow effect to appear, in milliseconds. |
| `lightSizeLeaveAnimationTime` | `number` | `50` | Animation time for the glow effect to disappear, in milliseconds. |
| `isElementMovable` | `boolean` | `false` | Whether the element's position can change dynamically (e.g., due to scrolling or resizing). If `true`, the glow effect will update its position accordingly. |
| `customStaticBg` | `string` | `null` | Custom static background to be set when the mouse leaves the element. |
| `forceTheme` | `'light'` or `'dark'` or `false` | `null` | Forces the theme of the element on hover. Use with caution. |
| `enableBurst` | `boolean` | `false` | Whether the burst effect is enabled on mousedown/mouseup. |
| `mode` | `'glow'` or `'sharp'` | `'glow'` | The rendering mode of the glow effect. |
| `preset` | `'transparent-blue'` or `'transparent-purple'` or `'transparent-marine'` or `'transparent-tangerine'` or `'transparent-strawberry'` or `'bright-magenta'` or `'bright-magenta-dark'` or `'bright-pink'` or `'bright-pink-dark'` or `'bright-fresh-green'` or `'bright-fresh-green-dark'` or `'bright-red'` or `'bright-red-dark'` or `'bright-orange'` or `'bright-orange-dark'` or `'bright-cold-green'` or `'bright-cold-green-dark'` or `'bright-purple'` or `'bright-purple-dark'` |  | Name of the preset configuration to use. When a preset is set, the `lightColor` parameter is mandatory! |

### `glowHoverEffect` parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `el` | `HTMLElement` |  | The HTML element to apply the glow effect to. |
| `hoverBg` | `string` |  | Background color of the element on hover. If not provided, the background color of the element is used. |
| `lightColor` | `string` |  | Color of the glow effect. |
| `lightSize` | `number` | `100` | Size of the glow effect in pixels. |
| `lightSizeEnterAnimationTime` | `number` | `100` | Animation time for the glow effect to appear, in milliseconds. |
| `lightSizeLeaveAnimationTime` | `number` | `50` | Animation time for the glow effect to disappear, in milliseconds. |
| `isElementMovable` | `boolean` | `false` | Whether the element's position can change dynamically (e.g., due to scrolling or resizing). If `true`, the glow effect will update its position accordingly. |
| `customStaticBg` | `string` | `null` | Custom static background to be set when the mouse leaves the element. |
| `forceTheme` | `'light'` or `'dark'` or `false` | `null` | Forces the theme of the element on hover. Use with caution. |
| `enableBurst` | `boolean` | `false` | Whether the burst effect is enabled on mousedown/mouseup. |
| `mode` | `'glow'` or `'sharp'` | `'glow'` | The rendering mode of the glow effect. |
| `preset` | `'transparent-blue'` or `'transparent-purple'` or `'transparent-marine'` or `'transparent-tangerine'` or `'transparent-strawberry'` or `'bright-magenta'` or `'bright-magenta-dark'` or `'bright-pink'` or `'bright-pink-dark'` or `'bright-fresh-green'` or `'bright-fresh-green-dark'` or `'bright-red'` or `'bright-red-dark'` or `'bright-orange'` or `'bright-orange-dark'` or `'bright-cold-green'` or `'bright-cold-green-dark'` or `'bright-purple'` or `'bright-purple-dark'` |  | Name of the preset configuration to use. When a preset is set, the `lightColor` parameter is mandatory! |

## Usage Examples

### `useGlowHover` Examples

#### Basic Usage (Default Settings)
```jsx
import React from 'react';
import { useGlowHover } from '@rescui/use-glow-hover';

function MyComponent() {
  const glowRef = useGlowHover({ lightColor: 'rgba(76, 166, 255, 0.5)' });

  return (
    <button ref={glowRef} style={{ padding: '10px', border: '1px solid #ccc' }}>
      Hover me!
    </button>
  );
}
```

#### Using a Preset
```jsx
import React from 'react';
import { useGlowHover } from '@rescui/use-glow-hover';

function MyComponent() {
  const glowRef = useGlowHover({ preset: 'transparent-blue', lightColor: 'rgba(76, 166, 255, 0.5)' });

  return (
    <button ref={glowRef} style={{ padding: '10px', border: '1px solid #ccc' }}>
      Hover me! (Transparent Blue)
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
    lightColor: 'rgba(255, 100, 150, 0.7)',
    hoverBg: '#f0f0f0',
    lightSize: 150,
    lightSizeEnterAnimationTime: 200,
    lightSizeLeaveAnimationTime: 100,
  });

  return (
    <button ref={glowRef} style={{ padding: '10px', border: '1px solid #ccc' }}>
      Hover me! (Custom Glow)
    </button>
  );
}
```

### `glowHoverEffect` Examples

#### Basic Usage (Default Settings)
```js
import { glowHoverEffect } from '@rescui/use-glow-hover';

const button = document.getElementById('myButton');

if (button) {
  const cleanup = glowHoverEffect(button, { lightColor: 'rgba(76, 166, 255, 0.5)' });

  // To remove the effect:
  // cleanup();
}
```

#### Using a Preset
```js
import { glowHoverEffect } from '@rescui/use-glow-hover';

const button = document.getElementById('myButton');

if (button) {
  const cleanup = glowHoverEffect(button, { preset: 'transparent-purple', lightColor: 'rgba(132, 115, 255, 0.5)' });

  // To remove the effect:
  // cleanup();
}
```

#### Custom Configuration
```js
import { glowHoverEffect } from '@rescui/use-glow-hover';

const button = document.getElementById('myButton');

if (button) {
  const cleanup = glowHoverEffect(button, {
    lightColor: 'rgba(100, 200, 50, 0.6)',
    hoverBg: '#e0e0e0',
    lightSize: 120,
    lightSizeEnterAnimationTime: 150,
    lightSizeLeaveAnimationTime: 75,
    enableBurst: true,
  });

  // To remove the effect:
  // cleanup();
}
```
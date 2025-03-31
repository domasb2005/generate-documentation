# @rescui/use-glow-hover API Documentation

## Exported Functions

| Function | Description | Return Type |
|----------|-------------|-------------|
| `useGlowHover` | A custom React hook for adding a glow effect on hover to an element. Returns a React ref to be attached to the target HTML element. | `MutableRefObject<HTMLElement>` |
| `glowHoverEffect` | Applies a glow effect to a specified HTML element on hover. Returns a cleanup function to remove the event listeners and reset styles. | `() => void` |

## Function Parameters

### `useGlowHover` parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `disabled` | `boolean` | `false` |  If `true`, the glow effect is disabled. |
| `hoverBg` | `string` |  | Background color on hover. If not specified, it falls back to the element's current background color. |
| `lightColor` | `string` |  | The color of the glow effect. |
| `lightSize` | `number` | `100` | The size of the glow effect in pixels. |
| `lightSizeEnterAnimationTime` | `number` | `100` | The duration of the animation when the mouse enters the element, in milliseconds. |
| `lightSizeLeaveAnimationTime` | `number` | `50` | The duration of the animation when the mouse leaves the element, in milliseconds. |
| `isElementMovable` | `boolean` | `false` | If `true`, the glow effect updates its position as the element moves (e.g., on scroll or window resize). |
| `customStaticBg` | `string` | `null` | Custom background to apply when the mouse leaves the element, overriding the default background. |
| `forceTheme` | `'light'` or `'dark'` or `false` | `null` | Forces a specific theme on hover. Use with caution as it directly manipulates the underlying theme. |
| `enableBurst` | `boolean` | `false` | If `true`, enables a burst effect on mouse down and mouse up events. |
| `mode` | `'glow'` or `'sharp'` | `'glow'` | The mode of the glow effect. `'glow'` creates a smooth gradient, while `'sharp'` creates a sharp gradient. |
| `preset` | `keyof typeof presets` |  | A preset configuration for the glow effect. If a preset is specified, its values will be used as defaults for other options. |

### `glowHoverEffect` parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `el` | `HTMLElement` |  | The HTML element to apply the glow effect to. |
| `hoverBg` | `string` |  | Background color on hover. If not specified, it falls back to the element's current background color. |
| `lightColor` | `string` |  | The color of the glow effect. |
| `lightSize` | `number` | `100` | The size of the glow effect in pixels. |
| `lightSizeEnterAnimationTime` | `number` | `100` | The duration of the animation when the mouse enters the element, in milliseconds. |
| `lightSizeLeaveAnimationTime` | `number` | `50` | The duration of the animation when the mouse leaves the element, in milliseconds. |
| `isElementMovable` | `boolean` | `false` | If `true`, the glow effect updates its position as the element moves (e.g., on scroll or window resize). |
| `customStaticBg` | `string` | `null` | Custom background to apply when the mouse leaves the element, overriding the default background. |
| `forceTheme` | `'light'` or `'dark'` or `false` | `null` | Forces a specific theme on hover. Use with caution as it directly manipulates the underlying theme. |
| `enableBurst` | `boolean` | `false` | If `true`, enables a burst effect on mouse down and mouse up events. |
| `mode` | `'glow'` or `'sharp'` | `'glow'` | The mode of the glow effect. `'glow'` creates a smooth gradient, while `'sharp'` creates a sharp gradient. |
| `preset` | `keyof typeof presets` |  | A preset configuration for the glow effect. If a preset is specified, its values will be used as defaults for other options. |

## Available Presets

| Preset Name |
|-------------|
| `transparent-blue` |
| `transparent-purple` |
| `transparent-marine` |
| `transparent-tangerine` |
| `transparent-strawberry` |
| `bright-magenta` |
| `bright-magenta-dark` |
| `bright-pink` |
| `bright-pink-dark` |
| `bright-fresh-green` |
| `bright-fresh-green-dark` |
| `bright-red` |
| `bright-red-dark` |
| `bright-orange` |
| `bright-orange-dark` |
| `bright-cold-green` |
| `bright-cold-green-dark` |
| `bright-purple` |
| `bright-purple-dark` |

## Usage Examples

### `useGlowHover` Examples

#### Basic Usage (Default Settings)
```jsx
import React from 'react';
import { useGlowHover } from '@rescui/use-glow-hover';

function MyComponent() {
  const glowRef = useGlowHover({});

  return (
    <button ref={glowRef}>
      Hover Me (Default Glow)
    </button>
  );
}
```

#### Using a Preset
```jsx
import React from 'react';
import { useGlowHover } from '@rescui/use-glow-hover';

function MyComponent() {
  const glowRef = useGlowHover({ preset: 'transparent-blue' });

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
    lightColor: 'orange',
    lightSize: 150,
    lightSizeEnterAnimationTime: 300,
    lightSizeLeaveAnimationTime: 150,
  });

  return (
    <button ref={glowRef}>
      Hover Me (Custom Glow)
    </button>
  );
}
```

### `glowHoverEffect` Examples

#### Basic Usage (Default Settings)
```js
import { glowHoverEffect } from '@rescui/use-glow-hover';

// Get the element
const element = document.getElementById('myElement');

// Apply the glow effect
const cleanup = glowHoverEffect(element, {});

// To remove the effect:
// cleanup();
```

#### Using a Preset
```js
import { glowHoverEffect } from '@rescui/use-glow-hover';

// Get the element
const element = document.getElementById('myElement');

// Apply the glow effect with a preset
const cleanup = glowHoverEffect(element, { preset: 'bright-magenta' });

// To remove the effect:
// cleanup();
```

#### Custom Configuration
```js
import { glowHoverEffect } from '@rescui/use-glow-hover';

// Get the element
const element = document.getElementById('myElement');

// Apply the glow effect with custom settings
const cleanup = glowHoverEffect(element, {
  lightColor: 'red',
  lightSize: 200,
  hoverBg: 'lightgray',
  enableBurst: true,
});

// To remove the effect:
// cleanup();
```
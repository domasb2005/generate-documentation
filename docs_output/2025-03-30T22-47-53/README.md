# @rescui/use-glow-hover API Documentation

## Exported Functions

| Function | Description | Return Type |
|----------|-------------|-------------|
| `useGlowHover` | A React hook that applies a glow effect on hover to the referenced element. | `MutableRefObject<HTMLElement>` |
| `glowHoverEffect` | Applies a glow effect on hover to a specified HTML element. It returns a cleanup function that removes the event listeners and resets the element's styles. | `() => void` |

## Function Parameters

### `useGlowHover` parameters:

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `disabled` | `boolean` | `false` | A boolean value indicating whether the glow effect should be disabled. |
| `hoverBg` | `string` |  | The background color to apply on hover. If not provided, it falls back to the element's current background color. |
| `lightColor` | `string` |  | The color of the glow effect. This parameter is required if `preset` is not defined. |
| `preset` | `'transparent-blue'` or `'transparent-purple'` or `'transparent-marine'` or `'transparent-tangerine'` or `'transparent-strawberry'` or `'bright-magenta'` or `'bright-magenta-dark'` or `'bright-pink'` or `'bright-pink-dark'` or `'bright-fresh-green'` or `'bright-fresh-green-dark'` or `'bright-red'` or `'bright-red-dark'` or `'bright-orange'` or `'bright-orange-dark'` or `'bright-cold-green'` or `'bright-cold-green-dark'` or `'bright-purple'` or `'bright-purple-dark'` |  | A preset configuration for the glow effect. When a preset is used, `lightColor` is also required. |
| `lightSize` | `number` | `100` | The size of the glow effect in pixels. |
| `lightSizeEnterAnimationTime` | `number` | `100` | The duration of the animation when the mouse enters the element, in milliseconds. |
| `lightSizeLeaveAnimationTime` | `number` | `50` | The duration of the animation when the mouse leaves the element, in milliseconds. |
| `isElementMovable` | `boolean` | `false` | A boolean value indicating whether the element is movable, which affects how the glow effect is updated on mouse move. |
| `customStaticBg` | `string` | `null` | A custom static background to apply when the mouse leaves the element. |
| `forceTheme` | `'light'` or `'dark'` or `false` | `null` | Forces a specific theme ('light' or 'dark') on hover. Use with caution. |
| `enableBurst` | `boolean` | `false` | A boolean value indicating whether the burst effect should be enabled on mouse down/up. |
| `mode` | `'glow'` or `'sharp'` | `'glow'` | The mode of the glow effect ('glow' for a smooth gradient, 'sharp' for a sharp gradient). |

### `glowHoverEffect` parameters:

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `el` | `HTMLElement` |  | The HTML element to which the glow effect will be applied. |
| `hoverBg` | `string` |  | The background color to apply on hover. If not provided, it falls back to the element's current background color. |
| `lightColor` | `string` |  | The color of the glow effect. This parameter is required if `preset` is not defined. |
| `preset` | `'transparent-blue'` or `'transparent-purple'` or `'transparent-marine'` or `'transparent-tangerine'` or `'transparent-strawberry'` or `'bright-magenta'` or `'bright-magenta-dark'` or `'bright-pink'` or `'bright-pink-dark'` or `'bright-fresh-green'` or `'bright-fresh-green-dark'` or `'bright-red'` or `'bright-red-dark'` or `'bright-orange'` or `'bright-orange-dark'` or `'bright-cold-green'` or `'bright-cold-green-dark'` or `'bright-purple'` or `'bright-purple-dark'` |  | A preset configuration for the glow effect. When a preset is used, `lightColor` is also required. |
| `lightSize` | `number` | `100` | The size of the glow effect in pixels. |
| `lightSizeEnterAnimationTime` | `number` | `100` | The duration of the animation when the mouse enters the element, in milliseconds. |
| `lightSizeLeaveAnimationTime` | `number` | `50` | The duration of the animation when the mouse leaves the element, in milliseconds. |
| `isElementMovable` | `boolean` | `false` | A boolean value indicating whether the element is movable, which affects how the glow effect is updated on mouse move. |
| `customStaticBg` | `string` | `null` | A custom static background to apply when the mouse leaves the element. |
| `forceTheme` | `'light'` or `'dark'` or `false` | `null` | Forces a specific theme ('light' or 'dark') on hover. Use with caution. |
| `enableBurst` | `boolean` | `false` | A boolean value indicating whether the burst effect should be enabled on mouse down/up. |
| `mode` | `'glow'` or `'sharp'` | `'glow'` | The mode of the glow effect ('glow' for a smooth gradient, 'sharp' for a sharp gradient). |

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
  const ref = useGlowHover({ preset: 'transparent-blue', lightColor: '#4CA6FF' });

  return (
    <button ref={ref}>
      Hover Me (Transparent Blue)
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
    enableBurst: true,
    mode: 'sharp'
  });

  return (
    <button ref={ref}>
      Hover Me (Custom)
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
  const cleanup = glowHoverEffect(element, { lightColor: 'red' });

  // To remove the effect later:
  // cleanup();
}
```

#### Using a Preset
```js
import { glowHoverEffect } from '@rescui/use-glow-hover';

const element = document.getElementById('myElement');

if (element) {
  const cleanup = glowHoverEffect(element, { preset: 'transparent-purple', lightColor: '#8473FF' });

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
    lightColor: 'limegreen',
    hoverBg: 'black',
    lightSize: 80,
    lightSizeEnterAnimationTime: 200,
    lightSizeLeaveAnimationTime: 100,
    isElementMovable: true
  });

  // To remove the effect later:
  // cleanup();
}
```
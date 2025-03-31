# @rescui/use-glow-hover API Documentation

## Exported Functions

| Function | Description | Return Type |
|----------|-------------|-------------|
| `useGlowHover` | A React hook that applies a glow effect to an HTML element on hover. It returns a `ref` object that should be attached to the element you want to apply the effect to. | `MutableRefObject<HTMLElement>` |
| `glowHoverEffect` | Applies the glow hover effect to a given HTML element. It returns a cleanup function that removes all event listeners and resets the element's styles. | `() => void` |

## Function Parameters

### `useGlowHover` parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `disabled` | `boolean` | `false` |  A flag to disable or enable the glow effect. If set to `true`, the effect will not be applied. |
| `hoverBg` | `string` |  | The background color to be applied on hover. If not specified, the element's current background color is used.  |
| `lightColor` | `string` |  | The color of the glow effect. Required if `preset` is not specified.  |
| `preset` | `'transparent-blue'` or `'transparent-purple'` or `'transparent-marine'` or `'transparent-tangerine'` or `'transparent-strawberry'` or `'bright-magenta'` or `'bright-magenta-dark'` or `'bright-pink'` or `'bright-pink-dark'` or `'bright-fresh-green'` or `'bright-fresh-green-dark'` or `'bright-red'` or `'bright-red-dark'` or `'bright-orange'` or `'bright-orange-dark'` or `'bright-cold-green'` or `'bright-cold-green-dark'` or `'bright-purple'` or `'bright-purple-dark'` |  |  A predefined set of glow effect options. If specified, `lightColor` can be defined in the preset or specified separately.  |
| `lightSize` | `number` | `100` | The size of the glow effect in pixels.  |
| `lightSizeEnterAnimationTime` | `number` | `100` | The duration of the animation (in milliseconds) when the mouse enters the element.  |
| `lightSizeLeaveAnimationTime` | `number` | `50` | The duration of the animation (in milliseconds) when the mouse leaves the element.  |
| `isElementMovable` | `boolean` | `false` | A flag indicating whether the element is movable. If `true`, the glow effect will update its position when the element moves.  |
| `customStaticBg` | `string` | `null` | A custom background to be applied when the mouse leaves the element, overriding the default behavior.  |
| `forceTheme` | `'light'` or `'dark'` or `false` | `null` | Forces a specific theme ('light' or 'dark') on hover. Use with caution as it can override existing styles.  |
| `enableBurst` | `boolean` | `false` | Enables a burst effect on mousedown and mouseup.  |
| `mode` | `'glow'` or `'sharp'` | `'glow'` | Defines the glow mode. |

### `glowHoverEffect` parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `el` | `HTMLElement` |  | The HTML element to which the glow effect will be applied.  |
| `hoverBg` | `string` |  | The background color to be applied on hover. If not specified, the element's current background color is used.  |
| `lightColor` | `string` |  | The color of the glow effect. Required if `preset` is not specified.  |
| `preset` | `'transparent-blue'` or `'transparent-purple'` or `'transparent-marine'` or `'transparent-tangerine'` or `'transparent-strawberry'` or `'bright-magenta'` or `'bright-magenta-dark'` or `'bright-pink'` or `'bright-pink-dark'` or `'bright-fresh-green'` or `'bright-fresh-green-dark'` or `'bright-red'` or `'bright-red-dark'` or `'bright-orange'` or `'bright-orange-dark'` or `'bright-cold-green'` or `'bright-cold-green-dark'` or `'bright-purple'` or `'bright-purple-dark'` |  |  A predefined set of glow effect options. If specified, `lightColor` can be defined in the preset or specified separately.  |
| `lightSize` | `number` | `100` | The size of the glow effect in pixels.  |
| `lightSizeEnterAnimationTime` | `number` | `100` | The duration of the animation (in milliseconds) when the mouse enters the element.  |
| `lightSizeLeaveAnimationTime` | `number` | `50` | The duration of the animation (in milliseconds) when the mouse leaves the element.  |
| `isElementMovable` | `boolean` | `false` | A flag indicating whether the element is movable. If `true`, the glow effect will update its position when the element moves.  |
| `customStaticBg` | `string` | `null` | A custom background to be applied when the mouse leaves the element, overriding the default behavior.  |
| `forceTheme` | `'light'` or `'dark'` or `false` | `null` | Forces a specific theme ('light' or 'dark') on hover. Use with caution as it can override existing styles.  |
| `enableBurst` | `boolean` | `false` | Enables a burst effect on mousedown and mouseup.  |
| `mode` | `'glow'` or `'sharp'` | `'glow'` | Defines the glow mode. |


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
  const glowRef = useGlowHover({ preset: 'transparent-blue' });

  return (
    <button ref={glowRef}>
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
    lightColor: 'orange',
    lightSize: 50,
    lightSizeEnterAnimationTime: 200,
    lightSizeLeaveAnimationTime: 100,
    hoverBg: 'red',
  });

  return (
    <button ref={glowRef} style={{backgroundColor: 'white'}}>
      Hover me! (Custom Glow)
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
  const cleanup = glowHoverEffect(element, {lightColor: 'rgba(0, 128, 255, 0.5)'});

  // To remove the effect later:
  // cleanup();
}
```

#### Using a Preset
```js
import { glowHoverEffect } from '@rescui/use-glow-hover';

const element = document.getElementById('myElement');

if (element) {
  const cleanup = glowHoverEffect(element, { preset: 'transparent-purple' });

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
    lightColor: 'lime',
    lightSize: 75,
    hoverBg: 'black',
    lightSizeEnterAnimationTime: 300,
    lightSizeLeaveAnimationTime: 150,
    enableBurst: true
  });

  // To remove the effect later:
  // cleanup();
}
```
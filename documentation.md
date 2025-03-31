# @rescui/use-glow-hover API Documentation

## Exported Functions

| Function | Description | Return Type |
|----------|-------------|-------------|
| `useGlowHover` | A React hook that applies a glow effect to an element on hover. Returns a React ref to be attached to the target element. | `MutableRefObject<HTMLElement>` |
| `glowHoverEffect` | Applies a glow effect to a specified HTML element on hover. Returns a cleanup function to remove the event listeners and reset styles. | `() => void` |

## Function Parameters

### `useGlowHover` parameters:

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `disabled` | `boolean` | `false` | Determines whether the glow effect is disabled. |
| `hoverBg` | `string` |  | Background color to be applied on hover. If not specified, it will try to get `backgroundColor` from element's style. |
| `lightColor` | `string` |  | Color of the glow effect. Must be specified directly or via a preset. |
| `lightSize` | `number` | `100` | Size of the glow effect in pixels. |
| `lightSizeEnterAnimationTime` | `number` | `100` | Animation time for the glow effect to appear, in milliseconds. |
| `lightSizeLeaveAnimationTime` | `number` | `50` | Animation time for the glow effect to disappear, in milliseconds. |
| `isElementMovable` | `boolean` | `false` | Determines whether the element's position can change during the hover effect (e.g., due to scrolling). |
| `customStaticBg` | `string` | `null` | Custom static background to be applied when the mouse leaves the element. |
| `forceTheme` | `'light'` or `'dark'` or `false` | `null` | Forces a specific theme (`'light'` or `'dark'`) on hover. Use with caution. |
| `enableBurst` | `boolean` | `false` | Enables a burst effect on mouse down and mouse up. |
| `mode` | `'glow'` or `'sharp'` | `'glow'` | Determines the glow mode. |
| `preset` | `'transparent-blue'` or `'transparent-purple'` or `'transparent-marine'` or `'transparent-tangerine'` or `'transparent-strawberry'` or `'bright-magenta'` or `'bright-magenta-dark'` or `'bright-pink'` or `'bright-pink-dark'` or `'bright-fresh-green'` or `'bright-fresh-green-dark'` or `'bright-red'` or `'bright-red-dark'` or `'bright-orange'` or `'bright-orange-dark'` or `'bright-cold-green'` or `'bright-cold-green-dark'` or `'bright-purple'` or `'bright-purple-dark'` |  | A predefined set of options for the glow effect. If a preset is specified, `lightColor` is required. |

### `glowHoverEffect` parameters:

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `el` | `HTMLElement` |  | The HTML element to apply the glow effect to. |
| `hoverBg` | `string` |  | Background color to be applied on hover. If not specified, it will try to get `backgroundColor` from element's style. |
| `lightColor` | `string` |  | Color of the glow effect. Must be specified directly or via a preset. |
| `lightSize` | `number` | `100` | Size of the glow effect in pixels. |
| `lightSizeEnterAnimationTime` | `number` | `100` | Animation time for the glow effect to appear, in milliseconds. |
| `lightSizeLeaveAnimationTime` | `number` | `50` | Animation time for the glow effect to disappear, in milliseconds. |
| `isElementMovable` | `boolean` | `false` | Determines whether the element's position can change during the hover effect (e.g., due to scrolling). |
| `customStaticBg` | `string` | `null` | Custom static background to be applied when the mouse leaves the element. |
| `forceTheme` | `'light'` or `'dark'` or `false` | `null` | Forces a specific theme (`'light'` or `'dark'`) on hover. Use with caution. |
| `enableBurst` | `boolean` | `false` | Enables a burst effect on mouse down and mouse up. |
| `mode` | `'glow'` or `'sharp'` | `'glow'` | Determines the glow mode. |
| `preset` | `'transparent-blue'` or `'transparent-purple'` or `'transparent-marine'` or `'transparent-tangerine'` or `'transparent-strawberry'` or `'bright-magenta'` or `'bright-magenta-dark'` or `'bright-pink'` or `'bright-pink-dark'` or `'bright-fresh-green'` or `'bright-fresh-green-dark'` or `'bright-red'` or `'bright-red-dark'` or `'bright-orange'` or `'bright-orange-dark'` or `'bright-cold-green'` or `'bright-cold-green-dark'` or `'bright-purple'` or `'bright-purple-dark'` |  | A predefined set of options for the glow effect. If a preset is specified, `lightColor` is required. |

## Usage Examples

### `useGlowHover` Examples

#### Basic Usage (Default Settings)
```jsx
import React from 'react';
import { useGlowHover } from '@rescui/use-glow-hover';

const MyComponent = () => {
  const glowRef = useGlowHover({});

  return (
    <button ref={glowRef}>
      Hover Me
    </button>
  );
};

export default MyComponent;
```

#### Using a Preset
```jsx
import React from 'react';
import { useGlowHover } from '@rescui/use-glow-hover';

const MyComponent = () => {
  const glowRef = useGlowHover({ preset: 'transparent-blue', lightColor: '#4CA6FF' });

  return (
    <button ref={glowRef}>
      Hover Me with Blue Glow
    </button>
  );
};

export default MyComponent;
```

#### Custom Configuration
```jsx
import React from 'react';
import { useGlowHover } from '@rescui/use-glow-hover';

const MyComponent = () => {
  const glowRef = useGlowHover({
    lightColor: 'red',
    lightSize: 50,
    lightSizeEnterAnimationTime: 300,
    lightSizeLeaveAnimationTime: 150,
    hoverBg: 'lightyellow',
    enableBurst: true
  });

  return (
    <button ref={glowRef}>
      Hover Me with Custom Glow
    </button>
  );
};

export default MyComponent;
```

### `glowHoverEffect` Examples

#### Basic Usage (Default Settings)
```js
import { glowHoverEffect } from '@rescui/use-glow-hover';

const element = document.getElementById('my-element');

if (element) {
  const cleanup = glowHoverEffect(element, {lightColor: 'DodgerBlue'});

  // To remove the effect later:
  // cleanup();
}
```

#### Using a Preset
```js
import { glowHoverEffect } from '@rescui/use-glow-hover';

const element = document.getElementById('my-element');

if (element) {
  const cleanup = glowHoverEffect(element, { preset: 'transparent-purple', lightColor: '#8473FF' });

  // To remove the effect later:
  // cleanup();
}
```

#### Custom Configuration
```js
import { glowHoverEffect } from '@rescui/use-glow-hover';

const element = document.getElementById('my-element');

if (element) {
  const cleanup = glowHoverEffect(element, {
    lightColor: 'orange',
    lightSize: 75,
    hoverBg: 'lightblue',
    lightSizeEnterAnimationTime: 200,
    lightSizeLeaveAnimationTime: 100
  });

  // To remove the effect later:
  // cleanup();
}
```
# @rescui/use-glow-hover API Documentation

## Description

This library provides a custom React hook (`useGlowHover`) and a function (`glowHoverEffect`) for adding a customizable glow effect on hover to HTML elements.  It also offers predefined presets for common glow styles.

## Exported Functions

| Function | Description | Return Type |
|----------|-------------|-------------|
| `useGlowHover` | A React hook that applies a glow effect to a referenced HTML element on hover. | `React.MutableRefObject<HTMLElement>` |
| `glowHoverEffect` | A function that applies a glow effect to a specified HTML element on hover.  Returns a cleanup function to remove the effect. | `() => void` |
| `parseColor` | Parses a color string into an array of RGBA values. | `(string &#124; number)[]` |

## Function: `useGlowHover`

A React hook that applies a glow effect to a referenced HTML element on hover.

### Function Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `options` | `GlowHoverHookOptions` | - |  An object containing configuration options for the glow effect.  See `GlowHoverHookOptions` below. |

### GlowHoverHookOptions

Extends `GlowHoverOptions` with an additional `disabled` property.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `disabled` | `boolean` | `false` |  If `true`, the glow effect is disabled. |
| `hoverBg` | `string` | - | Background color to apply on hover. If not provided, it will use the element's current background color. |
| `lightColor` | `string` | - | Color of the glow light effect. **Required if no `preset` is provided.** |
| `preset` | `keyof typeof presets` | - |  The name of a predefined preset to use.  If provided, `lightColor` is optional (it will be taken from the preset if not explicitly provided). |
| `lightSize` | `number` | `100` |  Size (radius in pixels) of the glow light effect. |
| `lightSizeEnterAnimationTime` | `number` | `100` |  Animation duration (in milliseconds) for the glow light's size increase on mouse enter. |
| `lightSizeLeaveAnimationTime` | `number` | `50` |  Animation duration (in milliseconds) for the glow light's size decrease on mouse leave. |
| `isElementMovable` | `boolean` | `false` |  If `true`, the glow effect's position will update as the element moves (e.g., during scrolling). |
| `customStaticBg` | `string` | - |  A custom background to set when the mouse leaves the element.  If not provided, the background will revert to its original state. |
| `forceTheme` | `'light' &#124; 'dark' &#124; false` | `false` | Forces a specific theme (`light` or `dark`) on the element while the glow effect is active.  Use with caution, as it can override existing styles. `false` means theme is not forced. |
| `enableBurst` | `boolean` | `false` | Enables a "burst" effect when the mouse button is pressed down on the element. The glow will briefly expand. |
| `mode` | `'glow' &#124; 'sharp'` | `'glow'` |  Determines the style of the glow gradient. `'glow'` provides a smooth gradient, while `'sharp'` creates a sharper, more defined edge. |

### Usage

```jsx
import React, { useRef } from 'react';
import { useGlowHover } from '@rescui/use-glow-hover';

function MyComponent() {
  const buttonRef = useRef(null);
  useGlowHover({
    lightColor: 'yellow',
    lightSize: 50
  });

  return <button ref={buttonRef}>Hover Me</button>;
}
```

## Function: `glowHoverEffect`

A function that applies a glow effect to a specified HTML element on hover.  Returns a cleanup function to remove the effect.

### Function Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `el` | `HTMLElement` |  The HTML element to apply the glow effect to. |
| `options` | `GlowHoverOptions` |  An object containing configuration options for the glow effect.  See `GlowHoverOptions` below. |

### GlowHoverOptions

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `hoverBg` | `string` | - | Background color to apply on hover. If not provided, it will use the element's current background color. |
| `lightColor` | `string` | - | Color of the glow light effect. **Required if no `preset` is provided.** |
| `preset` | `keyof typeof presets` | - |  The name of a predefined preset to use.  If provided, `lightColor` is optional (it will be taken from the preset if not explicitly provided). |
| `lightSize` | `number` | `100` |  Size (radius in pixels) of the glow light effect. |
| `lightSizeEnterAnimationTime` | `number` | `100` |  Animation duration (in milliseconds) for the glow light's size increase on mouse enter. |
| `lightSizeLeaveAnimationTime` | `number` | `50` |  Animation duration (in milliseconds) for the glow light's size decrease on mouse leave. |
| `isElementMovable` | `boolean` | `false` |  If `true`, the glow effect's position will update as the element moves (e.g., during scrolling). |
| `customStaticBg` | `string` | - |  A custom background to set when the mouse leaves the element.  If not provided, the background will revert to its original state. |
| `forceTheme` | `'light' &#124; 'dark' &#124; false` | `false` | Forces a specific theme (`light` or `dark`) on the element while the glow effect is active.  Use with caution, as it can override existing styles. `false` means theme is not forced. |
| `enableBurst` | `boolean` | `false` | Enables a "burst" effect when the mouse button is pressed down on the element. The glow will briefly expand. |
| `mode` | `'glow' &#124; 'sharp'` | `'glow'` |  Determines the style of the glow gradient. `'glow'` provides a smooth gradient, while `'sharp'` creates a sharper, more defined edge. |

### Usage

```javascript
import { glowHoverEffect } from '@rescui/use-glow-hover';

const myElement = document.getElementById('myElement');

if (myElement) {
  const cleanup = glowHoverEffect(myElement, { lightColor: 'red', lightSize: 75 });

  // To remove the effect later:
  // cleanup();
}
```

## Function: `parseColor`

Parses a color string into an array of RGBA values.

### Function Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `colorToParse` | `string` | The color string to parse (e.g., "red", "#FF0000", "rgba(255, 0, 0, 0.5)"). |

### Return Value

An array of RGBA values `[red, green, blue, alpha]`, where red, green, and blue are numbers (0-255) and alpha is a number (0-1).  If the color cannot be parsed, returns `[0, 0, 0, 0]` and logs an error to the console.

### Usage

```javascript
import { parseColor } from '@rescui/use-glow-hover';

const color = parseColor('rgba(255, 0, 0, 0.5)');
console.log(color); // Output: ["255", "0", "0", "0.5"]
```

## Available Presets

| Preset Name | Description |
|-------------|-------------|
| `transparent-blue` | Light blue glow effect with transparency. |
| `transparent-purple` | Light purple glow effect with transparency. |
| `transparent-marine` | Light marine (teal) glow effect with transparency. |
| `transparent-tangerine` | Light tangerine (orange) glow effect with transparency. |
| `transparent-strawberry` | Light strawberry (pink) glow effect with transparency. |
| `bright-magenta` | Dark hover background with a bright magenta glow and forces a dark theme. |
| `bright-magenta-dark` | Light hover background with a bright magenta glow and forces a light theme. |
| `bright-pink` | Dark hover background with a bright pink glow and forces a dark theme. |
| `bright-pink-dark` | Light hover background with a bright pink glow and forces a light theme. |
| `bright-fresh-green` | Dark hover background with a bright fresh green glow and forces a dark theme. |
| `bright-fresh-green-dark` | Light hover background with a bright fresh green glow and forces a light theme. |
| `bright-red` | Dark hover background with a bright red glow and forces a dark theme. |
| `bright-red-dark` | Light hover background with a bright red glow and forces a light theme. |
| `bright-orange` | Dark hover background with a bright orange glow and forces a dark theme. |
| `bright-orange-dark` | Light hover background with a bright orange glow and forces a light theme. |
| `bright-cold-green` | Dark hover background with a bright cold green glow and forces a dark theme. |
| `bright-cold-green-dark` | Light hover background with a bright cold green glow and forces a light theme. |
| `bright-purple` | Dark hover background with a bright purple glow and forces a dark theme. |
| `bright-purple-dark` | Light hover background with a bright purple glow and forces a light theme. |

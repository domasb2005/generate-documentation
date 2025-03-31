```
# @rescui/use-glow-hover API Documentation

## Exported Functions

| Function | Description | Return Type |
|----------|-------------|-------------|
| `useGlowHover` | A custom React hook for applying a glow effect to an element on hover. It takes an options object to configure the glow's appearance and behavior and returns a React ref to be attached to the target HTML element. | `MutableRefObject<HTMLElement>` |
| `glowHoverEffect` | Applies a glow effect to a specified HTML element based on the provided options. It returns a cleanup function that removes the event listeners and resets the element's styles. | `() => void` |

## Function Parameters

### `useGlowHover` parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `disabled` | `boolean` | `false` | A boolean value to disable or enable the glow effect. |
| `hoverBg` | `string` |  | Background color of the element on hover. |
| `lightColor` | `string` |  | Color of the glow effect. |
| `lightSize` | `number` |  | Size of the glow effect in pixels. |
| `lightSizeEnterAnimationTime` | `number` |  | Animation time for the glow effect appearing on hover, in milliseconds. |
| `lightSizeLeaveAnimationTime` | `number` |  | Animation time for the glow effect disappearing on hover, in milliseconds. |
| `isElementMovable` | `boolean` |  | Determines whether the glow effect should update its position based on the element's movement. |
| `customStaticBg` | `string` |  | Custom static background to apply when the mouse leaves the element. |
| `forceTheme` | `'light' &#124; 'dark' &#124; false` |  | Forces a specific theme ('light' or 'dark') when the hover effect is active. |
| `enableBurst` | `boolean` |  | Enables a burst effect on mouse down and mouse up. |
| `mode` | `'glow' &#124; 'sharp'` | `'glow'` | Defines the style of the glow effect, either a smooth `glow` or a `sharp` transition. |
| `preset` | `keyof typeof presets` |  | The name of a predefined preset to use for the glow effect. |

### `glowHoverEffect` parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `el` | `HTMLElement` |  | The HTML element to which the glow effect will be applied. |
| `preset` | `keyof typeof presets` |  | The name of a predefined preset to use for the glow effect. |
| `hoverBg` | `string` |  | Background color of the element on hover. |
| `lightColor` | `string` |  | Color of the glow effect. |
| `lightSize` | `number` |  | Size of the glow effect in pixels. |
| `lightSizeEnterAnimationTime` | `number` |  | Animation time for the glow effect appearing on hover, in milliseconds. |
| `lightSizeLeaveAnimationTime` | `number` |  | Animation time for the glow effect disappearing on hover, in milliseconds. |
| `isElementMovable` | `boolean` |  | Determines whether the glow effect should update its position based on the element's movement. |
| `customStaticBg` | `string` |  | Custom static background to apply when the mouse leaves the element. |
| `forceTheme` | `'light' &#124; 'dark' &#124; false` |  | Forces a specific theme ('light' or 'dark') when the hover effect is active. |
| `enableBurst` | `boolean` |  | Enables a burst effect on mouse down and mouse up. |
| `mode` | `'glow' &#124; 'sharp'` | `'glow'` | Defines the style of the glow effect, either a smooth `glow` or a `sharp` transition. |

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
```
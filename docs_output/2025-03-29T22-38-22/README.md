# @rescui/use-glow-hover API Documentation

## Exported Functions

| Function | Description | Return Type |
|----------|-------------|-------------|
| `useGlowHover` | A React hook that applies a glow effect on hover to the referenced element. Returns a ref object to attach to the element. | `MutableRefObject<HTMLElement>` |
| `glowHoverEffect` | Applies the glow hover effect to a specified HTML element. Returns a cleanup function to remove the effect. | `() => void` |

## Function Parameters

### `useGlowHover` parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `disabled` | `boolean` | `false` | If `true`, disables the glow hover effect. |
| `hoverBg` | `string` |  | Background color of the element on hover. If not provided, the element's current background color is used. |
| `lightSize` | `number` |  | Size of the glow effect in pixels. |
| `lightSizeEnterAnimationTime` | `number` |  | Duration of the animation when the mouse enters the element, in milliseconds. |
| `lightSizeLeaveAnimationTime` | `number` |  | Duration of the animation when the mouse leaves the element, in milliseconds. |
| `isElementMovable` | `boolean` |  | If `true`, the glow effect will update its position if the element moves. |
| `customStaticBg` | `string` |  | Custom static background to apply when the mouse leaves the element. |
| `forceTheme` | ``'light'`` or ``'dark'`` or ``'false'`` |  | Forces a specific theme on hover. Use with caution. |
| `enableBurst` | `boolean` |  | If `true`, enables a burst effect on mouse down/up. |
| `mode` | ``'glow'`` or ``'sharp'`` | `'glow'` | The mode of the glow effect, either `glow` (smooth) or `sharp`. |
| `preset` | `keyof typeof presets` |  | Name of the preset to use. Overrides other options. |
| `lightColor` | `string` |  | Color of the glow effect. Required if `preset` is not specified. |

### `glowHoverEffect` parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `el` | `HTMLElement` |  | The HTML element to apply the glow effect to. |
| `preset` | `keyof typeof presets` |  | Name of the preset to use. Overrides other options. |
| `hoverBg` | `string` |  | Background color of the element on hover. If not provided, the element's current background color is used. |
| `lightSize` | `number` |  | Size of the glow effect in pixels. |
| `lightSizeEnterAnimationTime` | `number` |  | Duration of the animation when the mouse enters the element, in milliseconds. |
| `lightSizeLeaveAnimationTime` | `number` |  | Duration of the animation when the mouse leaves the element, in milliseconds. |
| `isElementMovable` | `boolean` |  | If `true`, the glow effect will update its position if the element moves. |
| `customStaticBg` | `string` |  | Custom static background to apply when the mouse leaves the element. |
| `forceTheme` | ``'light'`` or ``'dark'`` or ``'false'`` |  | Forces a specific theme on hover. Use with caution. |
| `enableBurst` | `boolean` |  | If `true`, enables a burst effect on mouse down/up. |
| `mode` | ``'glow'`` or ``'sharp'`` | `'glow'` | The mode of the glow effect, either `glow` (smooth) or `sharp`. |
| `lightColor` | `string` |  | Color of the glow effect. Required if `preset` is not specified. |

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
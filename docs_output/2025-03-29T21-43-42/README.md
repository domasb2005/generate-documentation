# @rescui/use-glow-hover API Documentation

## Exported Functions

| Function | Description | Return Type |
|----------|-------------|-------------|
| `useGlowHover` | Custom React hook for adding a glow effect on hover to an element. | `MutableRefObject<HTMLElement>` |
| `glowHoverEffect` | Applies a glow effect to a specified HTML element on hover. | `() => void` |

## Function Parameters

### `useGlowHover` Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `disabled` | `boolean` | `false` |  If `true`, the glow effect is disabled. |
| `preset` | `keyof typeof presets` |  | Key of the preset to use. Mutually exclusive with `lightColor`. |
| `lightColor` | `string` |  |  Color of the light effect. Required if `preset` is not specified. |
| `hoverBg` | `string` |  | Background color of the element on hover. |
| `lightSize` | `number` |  | Size of the light effect in pixels. |
| `lightSizeEnterAnimationTime` | `number` |  | Animation time for the light effect to appear (in milliseconds). |
| `lightSizeLeaveAnimationTime` | `number` |  | Animation time for the light effect to disappear (in milliseconds). |
| `isElementMovable` | `boolean` |  |  Determines whether the element position changes on hover. |
| `customStaticBg` | `string` |  | Custom static background for the element. |
| `forceTheme` | `'light' \| 'dark' \| false` |  | Forces a specific theme on hover. Use with caution. |
| `enableBurst` | `boolean` |  | Enables the burst effect on click. |
| `mode` | `'glow' \| 'sharp'` | `'glow'` |  The mode of the glow effect. |

### `glowHoverEffect` Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `el` | `HTMLElement` |  | The HTML element to apply the glow effect to. |
| `preset` | `keyof typeof presets` |  | Key of the preset to use. Mutually exclusive with `lightColor`. |
| `lightColor` | `string` |  |  Color of the light effect. Required if `preset` is not specified. |
| `hoverBg` | `string` |  | Background color of the element on hover. |
| `lightSize` | `number` |  | Size of the light effect in pixels. |
| `lightSizeEnterAnimationTime` | `number` |  | Animation time for the light effect to appear (in milliseconds). |
| `lightSizeLeaveAnimationTime` | `number` |  | Animation time for the light effect to disappear (in milliseconds). |
| `isElementMovable` | `boolean` |  |  Determines whether the element position changes on hover. |
| `customStaticBg` | `string` |  | Custom static background for the element. |
| `forceTheme` | `'light' \| 'dark' \| false` |  | Forces a specific theme on hover. Use with caution. |
| `enableBurst` | `boolean` |  | Enables the burst effect on click. |
| `mode` | `'glow' \| 'sharp'` | `'glow'` |  The mode of the glow effect. |

## Available Presets

| Preset Name | Description |
|-------------|-------------|
| `transparent-blue` | Transparent blue glow. |
| `transparent-purple` | Transparent purple glow. |
| `transparent-marine` | Transparent marine glow. |
| `transparent-tangerine` | Transparent tangerine glow. |
| `transparent-strawberry` | Transparent strawberry glow. |
| `bright-magenta` | Bright magenta glow for dark themes. |
| `bright-magenta-dark` | Bright magenta glow for light themes. |
| `bright-pink` | Bright pink glow for dark themes. |
| `bright-pink-dark` | Bright pink glow for light themes. |
| `bright-fresh-green` | Bright fresh green glow for dark themes. |
| `bright-fresh-green-dark` | Bright fresh green glow for light themes. |
| `bright-red` | Bright red glow for dark themes. |
| `bright-red-dark` | Bright red glow for light themes. |
| `bright-orange` | Bright orange glow for dark themes. |
| `bright-orange-dark` | Bright orange glow for light themes. |
| `bright-cold-green` | Bright cold green glow for dark themes. |
| `bright-cold-green-dark` | Bright cold green glow for light themes. |
| `bright-purple` | Bright purple glow for dark themes. |
| `bright-purple-dark` | Bright purple glow for light themes. |

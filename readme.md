# rn-tailwind

> Use [Tailwind CSS](https://tailwindcss.com) in [React Native] and [React Native Web] (https://reactnative.dev) projects

## Install

```
$ npm install rn-tailwind
```

## Usage

Import TailwindUIProvider from the `rn-tailwind` module, which is rendered at the top of our component tree.

```js
import React from 'react'
import App from './components/App'
import { TailwindUIProvider } from "rn-tailwind";

const Index = () => (
  <TailwindUIProvider>
    <App />
  </TailwindUIProvider>,
)
```

Than import `rn-tailwind` module and use any of the [supported utilities](#supported-utilities) from [Tailwind CSS](https://tailwindcss.com) in your [React Native](https://reactnative.dev) views.

```js
import { View, Text } from "rn-tailwind";

const App = () => (
  <View className="h-full xl:h-1/2">
    <View className="pt-12 xl:pt-4 items-center">
      <View className="bg-blue-200 px-3 py-1 rounded-full">
        <Text className="text-blue-800 font-semibold">Gang Gang </Text>
      </View>
    </View>
  </View>
);
```

## Supported Utilities

### Media Queries

- [Responsive Design](https://tailwindcss.com/docs/responsive-design)

### Effects

- [Opacity](https://tailwindcss.com/docs/opacity)
- [Box Shadow](https://tailwindcss.com/docs/box-shadow)

### Responsive

- [Responsive Design](https://v1.tailwindcss.com/docs/responsive-design)

### Layout

- [Display](https://tailwindcss.com/docs/display) (only `hidden` and `flex`)
- [Overflow](https://tailwindcss.com/docs/overflow) (only `overflow-hidden`, `overflow-scroll` and `overflow-visible`)
- [Position](https://tailwindcss.com/docs/position) (only `relative` and `absolute`)
- [Top / Right / Bottom / Left](https://tailwindcss.com/docs/top-right-bottom-left) (all except `*-auto`)
- [Z-Index](https://tailwindcss.com/docs/z-index) (all except `z-auto`)

### Flexbox

- [Flex Direction](https://tailwindcss.com/docs/flex-direction)
- [Flex Wrap](https://tailwindcss.com/docs/flex-wrap)
- [Align Items](https://tailwindcss.com/docs/align-items)
- [Align Content](https://tailwindcss.com/docs/align-content)
- [Align Self](https://tailwindcss.com/docs/align-self)
- [Justify Content](https://tailwindcss.com/docs/justify-content)
- [Flex](https://tailwindcss.com/docs/flex)
- [Flex Grow](https://tailwindcss.com/docs/flex-grow)
- [Flex Shrink](https://tailwindcss.com/docs/flex-shrink)

### Spacing

- [Padding](https://tailwindcss.com/docs/padding)
- [Margin](https://tailwindcss.com/docs/margin)

### Sizing

- [Width](https://tailwindcss.com/docs/width) (all except `w-auto` and `w-screen`)
- [Min-Width](https://tailwindcss.com/docs/min-width)
- [Max-Width](https://tailwindcss.com/docs/max-width)
- [Height](https://tailwindcss.com/docs/height) (all except `h-auto` and `h-screen`)
- [Min-Height](https://tailwindcss.com/docs/min-height) (all except `min-h-screen`)
- [Max-Height](https://tailwindcss.com/docs/max-height) (only `max-h-full`)

### Typography

- [Font Size](https://tailwindcss.com/docs/font-size)
- [Font Style](https://tailwindcss.com/docs/font-style)
- [Font Weight](https://tailwindcss.com/docs/font-weight)
- [Font Variant Numeric](https://tailwindcss.com/docs/font-variant-numeric) (only `oldstyle-nums`, `lining-nums`, `tabular-nums` and `proportional-nums`)
- [Letter Spacing](https://tailwindcss.com/docs/letter-spacing) (must be used with font size utilities)
- [Line Height](https://tailwindcss.com/docs/line-height) (only fixed line-heights)
- [Text Align](https://tailwindcss.com/docs/text-align)
- [Text Color](https://tailwindcss.com/docs/text-color) (all except `text-current`)
- [Text Opacity](https://tailwindcss.com/docs/text-opacity)
- [Text Decoration](https://tailwindcss.com/docs/text-decoration)
- [Text Transform](https://tailwindcss.com/docs/text-transform)

### Backgrounds

- [Background Color](https://tailwindcss.com/docs/background-color)
- [Background Opacity](https://tailwindcss.com/docs/background-opacity)

### Borders

- [Border Color](https://tailwindcss.com/docs/border-color)
- [Border Opacity](https://tailwindcss.com/docs/border-opacity)
- [Border Style](https://tailwindcss.com/docs/border-style) (all except `border-current`)
- [Border Width](https://tailwindcss.com/docs/border-width)
- [Border Radius](https://tailwindcss.com/docs/border-radius)

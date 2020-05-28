import React from 'react'
import {
  View as RnView,
  ScrollView as RnScrollView,
  Text as RnText,
  Image as RnImage,
  TextInput as RnTextInput,
  TouchableOpacity as RnTouchableOpacity,
  StyleSheet,
} from 'react-native'
import { useTailwindUI, sortClassName, removeUnNeededClasses } from './tailwind'

const buildComponent = Component => ({ className, style, ...rest }) => {
  let windowSize = useTailwindUI()

  const props = { ...rest, style: [] }

  if (className) {
    const orderClasses = sortClassName(className)
    const filteredClasses = orderClasses.filter(Boolean);
    props.style = removeUnNeededClasses(filteredClasses, windowSize);
  }

  if (style) {
    const inline = StyleSheet.create({ style })
    props.style.push(inline.style)
  }

  return <Component {...props} />
}

export { TailwindUIProvider } from './tailwind'
export * from './color'
export const View = buildComponent(RnView)
export const ScrollView = buildComponent(RnScrollView)
export const Text = buildComponent(RnText)
export const Image = buildComponent(RnImage)
export const TextInput = buildComponent(RnTextInput)
export const TouchableOpacity = buildComponent(RnTouchableOpacity)
import { moderateScale } from 'react-native-size-matters';

const scale = (num) => (
  moderateScale(num, 0.25)
)

export const defaultStyle = {
  'title-100': {
    fontFamily: 'system-ui',
    fontSize: scale(16),
    fontWeight: '900'
  },
  'title-200': {
    fontFamily: 'system-ui',
    fontSize: scale(18),
    fontWeight: '900'
  },
  'title-300': {
    fontFamily: 'system-ui',
    fontSize: scale(20),
    fontWeight: '900'
  },
  'title-400': {
    fontFamily: 'system-ui',
    fontSize: scale(24),
    fontWeight: '900'
  },
  'title-500': {
    fontFamily: 'system-ui',
    fontSize: scale(30),
    fontWeight: '900'
  },
  'title-600': {
    fontFamily: 'system-ui',
    fontSize: scale(36),
    fontWeight: '900'
  },
  'subtitle-100': {
    fontFamily: 'system-ui',
    fontSize: scale(12),
    fontWeight: '600'
  },
  'subtitle-200': {
    fontFamily: 'system-ui',
    fontSize: scale(14),
    fontWeight: '600',
  },
  'subtitle-300': {
    fontFamily: 'system-ui',
    fontSize: scale(16),
    fontWeight: '600',
  },
  'subtitle-400': {
    fontFamily: 'system-ui',
    fontSize: scale(18),
    fontWeight: '600',
  },
  'paragraph-100': {
    fontFamily: 'system-ui',
    fontSize: scale(12),
    fontWeight: '400'
  },
  'paragraph-200': {
    fontFamily: 'system-ui',
    fontSize: scale(14),
    fontWeight: '400',
  },
  'paragraph-300': {
    fontFamily: 'system-ui',
    fontSize: scale(16),
    fontWeight: '400',
  },
  'paragraph-400': {
    fontFamily: 'system-ui',
    fontSize: scale(18),
    fontWeight: '400',
  },
  'label-100': {
    fontFamily: 'system-ui',
    fontSize: scale(10),
    fontWeight: '700',
    textTransform: 'uppercase'
  },
  'label-200': {
    fontFamily: 'system-ui',
    fontSize: scale(12),
    fontWeight: '700',
    textTransform: 'uppercase'
  },
  'label-300': {
    fontFamily: 'system-ui',
    fontSize: scale(14),
    fontWeight: '700',
    textTransform: 'uppercase'
  },
  'label-400': {
    fontFamily: 'system-ui',
    fontSize: scale(16),
    fontWeight: '700',
    textTransform: 'uppercase'
  },
  'text-xxs': {
    fontSize: scale(10),
  },
  'text-xs': {
    fontSize: scale(12),
  },
  'text-sm': {
    fontSize: scale(14),
  },
  'text-base': {
    fontSize: scale(16),
  },
  'text-lg': {
    fontSize: scale(18),
  },
  'text-xl': {
    fontSize: scale(20),
  },
  'text-2xl': {
    fontSize: scale(24),
  },
  'text-3xl': {
    fontSize: scale(30),
  },
  'text-4xl': {
    fontSize: scale(36),
  },
  'text-5xl': {
    fontSize: scale(48),
  },
  'font-hairline': {
    fontWeight: '100'
  },
  'font-thin': {
    fontWeight: '200'
  },
  'font-light': {
    fontWeight: '300'
  },
  'font-normal': {
    fontWeight: '400'
  },
  'font-medium': {
    fontWeight: '500'
  },
  'font-semibold': {
    fontWeight: '600'
  },
  'font-bold': {
    fontWeight: '700'
  },
  'font-extrabold': {
    fontWeight: '800'
  },
  'font-black': {
    fontWeight: '900'
  },
  'uppercase': {
    textTransform: 'uppercase'
  },
  'lowercase': {
    textTransform: 'lowercase'
  },
  'capitalize': {
    textTransform: 'capitalize'
  },
  'underline': {
    textDecorationLine: 'underline'
  },

  'shadow-100': {
    elevation: 8,
    shadowOffset: { width: 0, height: 5 },
    shadowColor: "#b8c2cc",
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },

  'shadow-200': {
    elevation: 8,
    shadowOffset: { width: 0, height: 15 },
    shadowColor: "#b8c2cc",
    shadowOpacity: 0.5,
    shadowRadius: 15,
  },
  'text-white': {
    color: '#FFF'
  },
  'text-gray-100': {
    color: '#F7FAFC',
  },
  'text-gray-200': {
    color: '#EDF2F7',
  },
  'text-gray-300': {
    color: '#E2E8F0',
  },
  'text-gray-400': {
    color: '#CBD5E0',
  },
  'text-gray-500': {
    color: '#A0AEC0',
  },
  'text-gray-600': {
    color: '#718096',
  },
  'text-gray-700': {
    color: '#4A5568',
  },
  'text-gray-800': {
    color: '#2D3748',
  },
  'text-gray-900': {
    color: '#1A202C',
  },
  'text-red-100': {
    color: '#FFF5F5',
  },
  'text-red-200': {
    color: '#FED7D7',
  },
  'text-red-300': {
    color: '#FEB2B2',
  },
  'text-red-400': {
    color: '#FC8181',
  },
  'text-red-500': {
    color: '#F56565',
  },
  'text-red-600': {
    color: '#E53E3E',
  },
  'text-red-700': {
    color: '#C53030',
  },
  'text-red-800': {
    color: '#9B2C2C',
  },
  'text-red-900': {
    color: '#742A2A',
  },
  'text-orange-100': {
    color: '#FFFAF0',
  },
  'text-orange-200': {
    color: '#FEEBC8',
  },
  'text-orange-300': {
    color: '#FBD38D',
  },
  'text-orange-400': {
    color: '#F6AD55',
  },
  'text-orange-500': {
    color: '#ED8936',
  },
  'text-orange-600': {
    color: '#DD6B20',
  },
  'text-orange-700': {
    color: '#C05621',
  },
  'text-orange-800': {
    color: '#9C4221',
  },
  'text-orange-900': {
    color: '#7B341E',
  },
  'text-yellow-100': {
    color: '#FFFFF0',
  },
  'text-yellow-200': {
    color: '#FEFCBF',
  },
  'text-yellow-300': {
    color: '#FAF089',
  },
  'text-yellow-400': {
    color: '#F6E05E',
  },
  'text-yellow-500': {
    color: '#ECC94B',
  },
  'text-yellow-600': {
    color: '#D69E2E',
  },
  'text-yellow-700': {
    color: '#B7791F',
  },
  'text-yellow-800': {
    color: '#975A16',
  },
  'text-yellow-900': {
    color: '#744210',
  },
  'text-green-100': {
    color: '#F0FFF4'
  },
  'text-green-200': {
    color: '#C6F6D5'
  },
  'text-green-300': {
    color: '#9AE6B4'
  },
  'text-green-400': {
    color: '#68D391'
  },
  'text-green-500': {
    color: '#48BB78'
  },
  'text-green-600': {
    color: '#38A169'
  },
  'text-green-700': {
    color: '#2F855A'
  },
  'text-green-800': {
    color: '#276749'
  },
  'text-green-900': {
    color: '#22543D'
  },
  'text-teal-100': {
    color: '#E6FFFA',
  },
  'text-teal-200': {
    color: '#B2F5EA',
  },
  'text-teal-300': {
    color: '#81E6D9',
  },
  'text-teal-400': {
    color: '#4FD1C5',
  },
  'text-teal-500': {
    color: '#38B2AC',
  },
  'text-teal-600': {
    color: '#319795',
  },
  'text-teal-700': {
    color: '#2C7A7B',
  },
  'text-teal-800': {
    color: '#285E61',
  },
  'text-teal-900': {
    color: '#234E52',
  },
  'text-blue-100': {
    color: '#EBF8FF',
  },
  'text-blue-200': {
    color: '#BEE3F8',
  },
  'text-blue-300': {
    color: '#90CDF4',
  },
  'text-blue-400': {
    color: '#63B3ED',
  },
  'text-blue-500': {
    color: '#4299E1',
  },
  'text-blue-600': {
    color: '#3182CE',
  },
  'text-blue-700': {
    color: '#2B6CB0',
  },
  'text-blue-800': {
    color: '#2C5282',
  },
  'text-blue-900': {
    color: '#2A4365',
  },
  'text-indigo-100': {
    color: '#EBF4FF'
  },
  'text-indigo-200': {
    color: '#C3DAFE'
  },
  'text-indigo-300': {
    color: '#A3BFFA'
  },
  'text-indigo-400': {
    color: '#7F9CF5'
  },
  'text-indigo-500': {
    color: '#667EEA'
  },
  'text-indigo-600': {
    color: '#5A67D8'
  },
  'text-indigo-700': {
    color: '#4C51BF'
  },
  'text-indigo-800': {
    color: '#434190'
  },
  'text-indigo-900': {
    color: '#3C366B'
  },
  'text-purple-100': {
    color: '#FAF5FF'
  },
  'text-purple-200': {
    color: '#E9D8FD'
  },
  'text-purple-300': {
    color: '#D6BCFA'
  },
  'text-purple-400': {
    color: '#B794F4'
  },
  'text-purple-500': {
    color: '#9F7AEA'
  },
  'text-purple-600': {
    color: '#805AD5'
  },
  'text-purple-700': {
    color: '#6B46C1'
  },
  'text-purple-800': {
    color: '#553C9A'
  },
  'text-purple-900': {
    color: '#44337A'
  },
  'text-pink-100': {
    color: '#FFF5F7'
  },
  'text-pink-200': {
    color: '#FED7E2'
  },
  'text-pink-300': {
    color: '#FBB6CE'
  },
  'text-pink-400': {
    color: '#F687B3'
  },
  'text-pink-500': {
    color: '#ED64A6'
  },
  'text-pink-600': {
    color: '#D53F8C'
  },
  'text-pink-700': {
    color: '#B83280'
  },
  'text-pink-800': {
    color: '#97266D'
  },
  'text-pink-900': {
    color: '#702459'
  },
  'bg-gray-100': {
    backgroundColor: '#F7FAFC',
  },
  'bg-gray-200': {
    backgroundColor: '#EDF2F7',
  },
  'bg-gray-300': {
    backgroundColor: '#E2E8F0',
  },
  'bg-gray-400': {
    backgroundColor: '#CBD5E0',
  },
  'bg-gray-500': {
    backgroundColor: '#A0AEC0',
  },
  'bg-gray-600': {
    backgroundColor: '#718096',
  },
  'bg-gray-700': {
    backgroundColor: '#4A5568',
  },
  'bg-gray-800': {
    backgroundColor: '#2D3748',
  },
  'bg-gray-900': {
    backgroundColor: '#1A202C',
  },
  'bg-red-100': {
    backgroundColor: '#FFF5F5',
  },
  'bg-red-200': {
    backgroundColor: '#FED7D7',
  },
  'bg-red-300': {
    backgroundColor: '#FEB2B2',
  },
  'bg-red-400': {
    backgroundColor: '#FC8181',
  },
  'bg-red-500': {
    backgroundColor: '#F56565',
  },
  'bg-red-600': {
    backgroundColor: '#E53E3E',
  },
  'bg-red-700': {
    backgroundColor: '#C53030',
  },
  'bg-red-800': {
    backgroundColor: '#9B2C2C',
  },
  'bg-red-900': {
    backgroundColor: '#742A2A',
  },
  'bg-orange-100': {
    backgroundColor: '#FFFAF0',
  },
  'bg-orange-200': {
    backgroundColor: '#FEEBC8',
  },
  'bg-orange-300': {
    backgroundColor: '#FBD38D',
  },
  'bg-orange-400': {
    backgroundColor: '#F6AD55',
  },
  'bg-orange-500': {
    backgroundColor: '#ED8936',
  },
  'bg-orange-600': {
    backgroundColor: '#DD6B20',
  },
  'bg-orange-700': {
    backgroundColor: '#C05621',
  },
  'bg-orange-800': {
    backgroundColor: '#9C4221',
  },
  'bg-orange-900': {
    backgroundColor: '#7B341E',
  },
  'bg-yellow-100': {
    backgroundColor: '#FFFFF0',
  },
  'bg-yellow-200': {
    backgroundColor: '#FEFCBF',
  },
  'bg-yellow-300': {
    backgroundColor: '#FAF089',
  },
  'bg-yellow-400': {
    backgroundColor: '#F6E05E',
  },
  'bg-yellow-500': {
    backgroundColor: '#ECC94B',
  },
  'bg-yellow-600': {
    backgroundColor: '#D69E2E',
  },
  'bg-yellow-700': {
    backgroundColor: '#B7791F',
  },
  'bg-yellow-800': {
    backgroundColor: '#975A16',
  },
  'bg-yellow-900': {
    backgroundColor: '#744210',
  },
  'bg-green-100': {
    backgroundColor: '#F0FFF4'
  },
  'bg-green-200': {
    backgroundColor: '#C6F6D5'
  },
  'bg-green-300': {
    backgroundColor: '#9AE6B4'
  },
  'bg-green-400': {
    backgroundColor: '#68D391'
  },
  'bg-green-500': {
    backgroundColor: '#48BB78'
  },
  'bg-green-600': {
    backgroundColor: '#38A169'
  },
  'bg-green-700': {
    backgroundColor: '#2F855A'
  },
  'bg-green-800': {
    backgroundColor: '#276749'
  },
  'bg-green-900': {
    backgroundColor: '#22543D'
  },
  'bg-teal-100': {
    backgroundColor: '#E6FFFA',
  },
  'bg-teal-200': {
    backgroundColor: '#B2F5EA',
  },
  'bg-teal-300': {
    backgroundColor: '#81E6D9',
  },
  'bg-teal-400': {
    backgroundColor: '#4FD1C5',
  },
  'bg-teal-500': {
    backgroundColor: '#38B2AC',
  },
  'bg-teal-600': {
    backgroundColor: '#319795',
  },
  'bg-teal-700': {
    backgroundColor: '#2C7A7B',
  },
  'bg-teal-800': {
    backgroundColor: '#285E61',
  },
  'bg-teal-900': {
    backgroundColor: '#234E52',
  },
  'bg-blue-100': {
    backgroundColor: '#EBF8FF',
  },
  'bg-blue-200': {
    backgroundColor: '#BEE3F8',
  },
  'bg-blue-300': {
    backgroundColor: '#90CDF4',
  },
  'bg-blue-400': {
    backgroundColor: '#63B3ED',
  },
  'bg-blue-500': {
    backgroundColor: '#4299E1',
  },
  'bg-blue-600': {
    backgroundColor: '#3182CE',
  },
  'bg-blue-700': {
    backgroundColor: '#2B6CB0',
  },
  'bg-blue-800': {
    backgroundColor: '#2C5282',
  },
  'bg-blue-900': {
    backgroundColor: '#2A4365',
  },
  'bg-indigo-100': {
    backgroundColor: '#EBF4FF'
  },
  'bg-indigo-200': {
    backgroundColor: '#C3DAFE'
  },
  'bg-indigo-300': {
    backgroundColor: '#A3BFFA'
  },
  'bg-indigo-400': {
    backgroundColor: '#7F9CF5'
  },
  'bg-indigo-500': {
    backgroundColor: '#667EEA'
  },
  'bg-indigo-600': {
    backgroundColor: '#5A67D8'
  },
  'bg-indigo-700': {
    backgroundColor: '#4C51BF'
  },
  'bg-indigo-800': {
    backgroundColor: '#434190'
  },
  'bg-indigo-900': {
    backgroundColor: '#3C366B'
  },
  'bg-purple-100': {
    backgroundColor: '#FAF5FF'
  },
  'bg-purple-200': {
    backgroundColor: '#E9D8FD'
  },
  'bg-purple-300': {
    backgroundColor: '#D6BCFA'
  },
  'bg-purple-400': {
    backgroundColor: '#B794F4'
  },
  'bg-purple-500': {
    backgroundColor: '#9F7AEA'
  },
  'bg-purple-600': {
    backgroundColor: '#805AD5'
  },
  'bg-purple-700': {
    backgroundColor: '#6B46C1'
  },
  'bg-purple-800': {
    backgroundColor: '#553C9A'
  },
  'bg-purple-900': {
    backgroundColor: '#44337A'
  },
  'bg-pink-100': {
    backgroundColor: '#FFF5F7'
  },
  'bg-pink-200': {
    backgroundColor: '#FED7E2'
  },
  'bg-pink-300': {
    backgroundColor: '#FBB6CE'
  },
  'bg-pink-400': {
    backgroundColor: '#F687B3'
  },
  'bg-pink-500': {
    backgroundColor: '#ED64A6'
  },
  'bg-pink-600': {
    backgroundColor: '#D53F8C'
  },
  'bg-pink-700': {
    backgroundColor: '#B83280'
  },
  'bg-pink-800': {
    backgroundColor: '#97266D'
  },
  'bg-pink-900': {
    backgroundColor: '#702459'
  },

  'border-white': {
    borderColor: '#FFF'
  },
  'border-black': {
    borderColor: '#000'
  },
  'border-transparent': {
    borderColor: 'transparent'
  },

  'border-red-100': {
    borderColor: '#FFF5F5',
  },
  'border-red-200': {
    borderColor: '#FED7D7',
  },
  'border-red-300': {
    borderColor: '#FEB2B2',
  },
  'border-red-400': {
    borderColor: '#FC8181',
  },
  'border-red-500': {
    borderColor: '#F56565',
  },
  'border-red-600': {
    borderColor: '#E53E3E',
  },
  'border-red-700': {
    borderColor: '#C53030',
  },
  'border-red-800': {
    borderColor: '#9B2C2C',
  },
  'border-red-900': {
    borderColor: '#742A2A',
  },
  'border-orange-100': {
    borderColor: '#FFFAF0',
  },
  'border-orange-200': {
    borderColor: '#FEEBC8',
  },
  'border-orange-300': {
    borderColor: '#FBD38D',
  },
  'border-orange-400': {
    borderColor: '#F6AD55',
  },
  'border-orange-500': {
    borderColor: '#ED8936',
  },
  'border-orange-600': {
    borderColor: '#DD6B20',
  },
  'border-orange-700': {
    borderColor: '#C05621',
  },
  'border-orange-800': {
    borderColor: '#9C4221',
  },
  'border-orange-900': {
    borderColor: '#7B341E',
  },
  'border-yellow-100': {
    borderColor: '#FFFFF0',
  },
  'border-yellow-200': {
    borderColor: '#FEFCBF',
  },
  'border-yellow-300': {
    borderColor: '#FAF089',
  },
  'border-yellow-400': {
    borderColor: '#F6E05E',
  },
  'border-yellow-500': {
    borderColor: '#ECC94B',
  },
  'border-yellow-600': {
    borderColor: '#D69E2E',
  },
  'border-yellow-700': {
    borderColor: '#B7791F',
  },
  'border-yellow-800': {
    borderColor: '#975A16',
  },
  'border-yellow-900': {
    borderColor: '#744210',
  },
  'border-green-100': {
    borderColor: '#F0FFF4'
  },
  'border-green-200': {
    borderColor: '#C6F6D5'
  },
  'border-green-300': {
    borderColor: '#9AE6B4'
  },
  'border-green-400': {
    borderColor: '#68D391'
  },
  'border-green-500': {
    borderColor: '#48BB78'
  },
  'border-green-600': {
    borderColor: '#38A169'
  },
  'border-green-700': {
    borderColor: '#2F855A'
  },
  'border-green-800': {
    borderColor: '#276749'
  },
  'border-green-900': {
    borderColor: '#22543D'
  },
  'border-gray-100': {
    borderColor: '#F7FAFC',
  },
  'border-gray-200': {
    borderColor: '#EDF2F7',
  },
  'border-gray-300': {
    borderColor: '#E2E8F0',
  },
  'border-gray-400': {
    borderColor: '#CBD5E0',
  },
  'border-gray-500': {
    borderColor: '#A0AEC0',
  },
  'border-gray-600': {
    borderColor: '#718096',
  },
  'border-gray-700': {
    borderColor: '#4A5568',
  },
  'border-gray-800': {
    borderColor: '#2D3748',
  },
  'border-gray-900': {
    borderColor: '#1A202C',
  },
  'border-teal-100': {
    borderColor: '#E6FFFA',
  },
  'border-teal-200': {
    borderColor: '#B2F5EA',
  },
  'border-teal-300': {
    borderColor: '#81E6D9',
  },
  'border-teal-400': {
    borderColor: '#4FD1C5',
  },
  'border-teal-500': {
    borderColor: '#38B2AC',
  },
  'border-teal-600': {
    borderColor: '#319795',
  },
  'border-teal-700': {
    borderColor: '#2C7A7B',
  },
  'border-teal-800': {
    borderColor: '#285E61',
  },
  'border-teal-900': {
    borderColor: '#234E52',
  },
  'border-blue-100': {
    borderColor: '#EBF8FF',
  },
  'border-blue-200': {
    borderColor: '#BEE3F8',
  },
  'border-blue-300': {
    borderColor: '#90CDF4',
  },
  'border-blue-400': {
    borderColor: '#63B3ED',
  },
  'border-blue-500': {
    borderColor: '#4299E1',
  },
  'border-blue-600': {
    borderColor: '#3182CE',
  },
  'border-blue-700': {
    borderColor: '#2B6CB0',
  },
  'border-blue-800': {
    borderColor: '#2C5282',
  },
  'border-blue-900': {
    borderColor: '#2A4365',
  },
  'border-indigo-100': {
    borderColor: '#EBF4FF'
  },
  'border-indigo-200': {
    borderColor: '#C3DAFE'
  },
  'border-indigo-300': {
    borderColor: '#A3BFFA'
  },
  'border-indigo-400': {
    borderColor: '#7F9CF5'
  },
  'border-indigo-500': {
    borderColor: '#667EEA'
  },
  'border-indigo-600': {
    borderColor: '#5A67D8'
  },
  'border-indigo-700': {
    borderColor: '#4C51BF'
  },
  'border-indigo-800': {
    borderColor: '#434190'
  },
  'border-indigo-900': {
    borderColor: '#3C366B'
  },
  'border-purple-100': {
    borderColor: '#FAF5FF'
  },
  'border-purple-200': {
    borderColor: '#E9D8FD'
  },
  'border-purple-300': {
    borderColor: '#D6BCFA'
  },
  'border-purple-400': {
    borderColor: '#B794F4'
  },
  'border-purple-500': {
    borderColor: '#9F7AEA'
  },
  'border-purple-600': {
    borderColor: '#805AD5'
  },
  'border-purple-700': {
    borderColor: '#6B46C1'
  },
  'border-purple-800': {
    borderColor: '#553C9A'
  },
  'border-purple-900': {
    borderColor: '#44337A'
  },
  'border-pink-100': {
    borderColor: '#FFF5F7'
  },
  'border-pink-200': {
    borderColor: '#FED7E2'
  },
  'border-pink-300': {
    borderColor: '#FBB6CE'
  },
  'border-pink-400': {
    borderColor: '#F687B3'
  },
  'border-pink-500': {
    borderColor: '#ED64A6'
  },
  'border-pink-600': {
    borderColor: '#D53F8C'
  },
  'border-pink-700': {
    borderColor: '#B83280'
  },
  'border-pink-800': {
    borderColor: '#97266D'
  },
  'border-pink-900': {
    borderColor: '#702459'
  },
  // defaults
  'bg-transparent': {
    backgroundColor: 'transparent'
  },
  'bg-black': {
    backgroundColor: '#22292f'
  },
  'bg-white': {
    backgroundColor: '#fff'
  },
  'rounded-none': {
    borderRadius: 0
  },
  'rounded-sm': {
    borderRadius: 2
  },
  'rounded': {
    borderRadius: 4
  },
  'rounded-lg': {
    borderRadius: 8
  },
  'rounded-full': {
    borderRadius: 9999
  },
  'rounded-t-none': {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  },
  'rounded-r-none': {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  'rounded-b-none': {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  'rounded-l-none': {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  },
  'rounded-t-sm': {
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2
  },
  'rounded-r-sm': {
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2
  },
  'rounded-b-sm': {
    borderBottomRightRadius: 2,
    borderBottomLeftRadius: 2
  },
  'rounded-l-sm': {
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2
  },
  'rounded-t': {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4
  },
  'rounded-r': {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4
  },
  'rounded-b': {
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4
  },
  'rounded-l': {
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4
  },
  'rounded-t-lg': {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  'rounded-r-lg': {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8
  },
  'rounded-b-lg': {
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8
  },
  'rounded-l-lg': {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  },
  'rounded-t-full': {
    borderTopLeftRadius: 9999,
    borderTopRightRadius: 9999
  },
  'rounded-r-full': {
    borderTopRightRadius: 9999,
    borderBottomRightRadius: 9999
  },
  'rounded-b-full': {
    borderBottomRightRadius: 9999,
    borderBottomLeftRadius: 9999
  },
  'rounded-l-full': {
    borderTopLeftRadius: 9999,
    borderBottomLeftRadius: 9999
  },
  'rounded-tl-none': {
    borderTopLeftRadius: 0
  },
  'rounded-tr-none': {
    borderTopRightRadius: 0
  },
  'rounded-br-none': {
    borderBottomRightRadius: 0
  },
  'rounded-bl-none': {
    borderBottomLeftRadius: 0
  },
  'rounded-tl-sm': {
    borderTopLeftRadius: 2
  },
  'rounded-tr-sm': {
    borderTopRightRadius: 2
  },
  'rounded-br-sm': {
    borderBottomRightRadius: 2
  },
  'rounded-bl-sm': {
    borderBottomLeftRadius: 2
  },
  'rounded-tl': {
    borderTopLeftRadius: 4
  },
  'rounded-tr': {
    borderTopRightRadius: 4
  },
  'rounded-br': {
    borderBottomRightRadius: 4
  },
  'rounded-bl': {
    borderBottomLeftRadius: 4
  },
  'rounded-tl-lg': {
    borderTopLeftRadius: 8
  },
  'rounded-tr-lg': {
    borderTopRightRadius: 8
  },
  'rounded-br-lg': {
    borderBottomRightRadius: 8
  },
  'rounded-bl-lg': {
    borderBottomLeftRadius: 8
  },
  'rounded-tl-full': {
    borderTopLeftRadius: 9999
  },
  'rounded-tr-full': {
    borderTopRightRadius: 9999
  },
  'rounded-br-full': {
    borderBottomRightRadius: 9999
  },
  'rounded-bl-full': {
    borderBottomLeftRadius: 9999
  },
  'border-solid': {
    borderStyle: 'solid'
  },
  'border-dashed': {
    borderStyle: 'dashed'
  },
  'border-dotted': {
    borderStyle: 'dotted'
  },
  'border-0': {
    borderWidth: 0
  },
  'border-2': {
    borderWidth: 2
  },
  'border-4': {
    borderWidth: 4
  },
  'border-8': {
    borderWidth: 8
  },
  border: {
    borderWidth: 1
  },
  'border-t-0': {
    borderTopWidth: 0
  },
  'border-r-0': {
    borderRightWidth: 0
  },
  'border-b-0': {
    borderBottomWidth: 0
  },
  'border-l-0': {
    borderLeftWidth: 0
  },
  'border-t-2': {
    borderTopWidth: 2
  },
  'border-r-2': {
    borderRightWidth: 2
  },
  'border-b-2': {
    borderBottomWidth: 2
  },
  'border-l-2': {
    borderLeftWidth: 2
  },
  'border-t-4': {
    borderTopWidth: 4
  },
  'border-r-4': {
    borderRightWidth: 4
  },
  'border-b-4': {
    borderBottomWidth: 4
  },
  'border-l-4': {
    borderLeftWidth: 4
  },
  'border-t-8': {
    borderTopWidth: 8
  },
  'border-r-8': {
    borderRightWidth: 8
  },
  'border-b-8': {
    borderBottomWidth: 8
  },
  'border-l-8': {
    borderLeftWidth: 8
  },
  'border-t': {
    borderTopWidth: 1
  },
  'border-r': {
    borderRightWidth: 1
  },
  'border-b': {
    borderBottomWidth: 1
  },
  'border-l': {
    borderLeftWidth: 1
  },
  hidden: {
    display: 'none'
  },
  flex: {
    display: 'flex'
  },
  'flex-row': {
    flexDirection: 'row'
  },
  'flex-row-reverse': {
    flexDirection: 'row-reverse'
  },
  'flex-col': {
    flexDirection: 'column'
  },
  'flex-col-reverse': {
    flexDirection: 'column-reverse'
  },
  'flex-wrap': {
    flexWrap: 'wrap'
  },
  'flex-no-wrap': {
    flexWrap: 'nowrap'
  },
  'items-start': {
    alignItems: 'flex-start'
  },
  'items-end': {
    alignItems: 'flex-end'
  },
  'items-center': {
    alignItems: 'center'
  },
  'items-baseline': {
    alignItems: 'baseline'
  },
  'items-stretch': {
    alignItems: 'stretch'
  },
  'self-auto': {
    alignSelf: 'auto'
  },
  'self-start': {
    alignSelf: 'flex-start'
  },
  'self-end': {
    alignSelf: 'flex-end'
  },
  'self-center': {
    alignSelf: 'center'
  },
  'self-stretch': {
    alignSelf: 'stretch'
  },
  'justify-start': {
    justifyContent: 'flex-start'
  },
  'justify-end': {
    justifyContent: 'flex-end'
  },
  'justify-center': {
    justifyContent: 'center'
  },
  'justify-between': {
    justifyContent: 'space-between'
  },
  'justify-around': {
    justifyContent: 'space-around'
  },
  'content-center': {
    alignContent: 'center'
  },
  'content-start': {
    alignContent: 'flex-start'
  },
  'content-end': {
    alignContent: 'flex-end'
  },
  'content-between': {
    alignContent: 'space-between'
  },
  'content-around': {
    alignContent: 'space-around'
  },
  'flex-1': {
    flex: 1
  },
  'font-sans': {
    fontFamily: 'system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif'
  },
  'font-serif': {
    fontFamily: 'Constantia, Lucida Bright, Lucidabright, Lucida Serif, Lucida, DejaVu Serif, Bitstream Vera Serif, Liberation Serif, Georgia, serif'
  },
  'font-mono': {
    fontFamily: 'Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace'
  },
  
  'h-1': {
    height: 4
  },
  'h-2': {
    height: 8
  },
  'h-3': {
    height: 12
  },
  'h-4': {
    height: 16
  },
  'h-6': {
    height: 24
  },
  'h-8': {
    height: 32
  },
  'h-10': {
    height: 40
  },
  'h-12': {
    height: 48
  },
  'h-16': {
    height: 64
  },
  'h-24': {
    height: 96
  },
  'h-32': {
    height: 128
  },
  'h-48': {
    height: 192
  },
  'h-64': {
    height: 256
  },
  'h-auto': {
    height: 'auto'
  },
  'h-px': {
    height: 1
  },
  'h-full': {
    height: '100%'
  },
  'leading-none': {
    lineHeight: 1
  },
  'leading-tight': {
    lineHeight: 1
  },
  'leading-normal': {
    lineHeight: 1
  },
  'leading-loose': {
    lineHeight: 2
  },
  'm-0': {
    marginTop: 0,
    marginBottom: 0,
    marginRight: 0,
    marginLeft: 0
  },
  'm-1': {
    marginTop: 4,
    marginBottom: 4,
    marginRight: 4,
    marginLeft: 4
  },
  'm-2': {
    marginTop: 8,
    marginBottom: 8,
    marginRight: 8,
    marginLeft: 8
  },
  'm-3': {
    marginTop: 12,
    marginBottom: 12,
    marginRight: 12,
    marginLeft: 12
  },
  'm-4': {
    marginTop: 16,
    marginBottom: 16,
    marginRight: 16,
    marginLeft: 16
  },
  'm-6': {
    marginTop: 24,
    marginBottom: 24,
    marginRight: 24,
    marginLeft: 24
  },
  'm-8': {
    marginTop: 32,
    marginBottom: 32,
    marginRight: 32,
    marginLeft: 32
  },
  'm-auto': {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  'm-px': {
    marginTop: 1,
    marginBottom: 1,
    marginRight: 1,
    marginLeft: 1
  },
  'my-0': {
    marginTop: 0,
    marginBottom: 0
  },
  'mx-0': {
    marginLeft: 0,
    marginRight: 0
  },
  'my-1': {
    marginTop: 4,
    marginBottom: 4
  },
  'mx-1': {
    marginLeft: 4,
    marginRight: 4
  },
  'my-2': {
    marginTop: 8,
    marginBottom: 8
  },
  'mx-2': {
    marginLeft: 8,
    marginRight: 8
  },
  'my-3': {
    marginTop: 12,
    marginBottom: 12
  },
  'mx-3': {
    marginLeft: 12,
    marginRight: 12
  },
  'my-4': {
    marginTop: 16,
    marginBottom: 16
  },
  'mx-4': {
    marginLeft: 16,
    marginRight: 16
  },
  'my-6': {
    marginTop: 24,
    marginBottom: 24
  },
  'mx-6': {
    marginLeft: 24,
    marginRight: 24
  },
  'my-8': {
    marginTop: 32,
    marginBottom: 32
  },
  'mx-8': {
    marginLeft: 32,
    marginRight: 32
  },
  'my-10': {
    marginTop: 40,
    marginBottom: 40
  },
  'mx-10': {
    marginLeft: 40,
    marginRight: 40
  },
  'my-12': {
    marginTop: 48,
    marginBottom: 48
  },
  'mx-12': {
    marginLeft: 48,
    marginRight: 48
  },
  'my-16': {
    marginTop: 64,
    marginBottom: 64
  },
  'mx-16': {
    marginLeft: 64,
    marginRight: 64
  },
  'my-24': {
    marginTop: 96,
    marginBottom: 96
  },
  'mx-24': {
    marginLeft: 96,
    marginRight: 96
  },
  'my-auto': {
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  'mx-auto': {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  'my-px': {
    marginTop: 1,
    marginBottom: 1
  },
  'mx-px': {
    marginLeft: 1,
    marginRight: 1
  },
  'mt-0': {
    marginTop: 0
  },
  'mr-0': {
    marginRight: 0
  },
  'mb-0': {
    marginBottom: 0
  },
  'ml-0': {
    marginLeft: 0
  },
  'mt-1': {
    marginTop: 4
  },
  'mr-1': {
    marginRight: 4
  },
  'mb-1': {
    marginBottom: 4
  },
  'ml-1': {
    marginLeft: 4
  },
  'mt-2': {
    marginTop: 8
  },
  'mr-2': {
    marginRight: 8
  },
  'mb-2': {
    marginBottom: 8
  },
  'ml-2': {
    marginLeft: 8
  },
  'mt-3': {
    marginTop: 12
  },
  'mr-3': {
    marginRight: 12
  },
  'mb-3': {
    marginBottom: 12
  },
  'ml-3': {
    marginLeft: 12
  },
  'mt-4': {
    marginTop: 16
  },
  'mr-4': {
    marginRight: 16
  },
  'mb-4': {
    marginBottom: 16
  },
  'ml-4': {
    marginLeft: 16
  },
  'mt-6': {
    marginTop: 24
  },
  'mr-6': {
    marginRight: 24
  },
  'mb-6': {
    marginBottom: 24
  },
  'ml-6': {
    marginLeft: 24
  },
  'mt-8': {
    marginTop: 32
  },
  'mr-8': {
    marginRight: 32
  },
  'mb-8': {
    marginBottom: 32
  },
  'ml-8': {
    marginLeft: 32
  },
  'mt-10': {
    marginTop: 40
  },
  'mr-10': {
    marginRight: 40
  },
  'mb-10': {
    marginBottom: 40
  },
  'ml-10': {
    marginLeft: 40
  },
  'mt-12': {
    marginTop: 48
  },
  'mr-12': {
    marginRight: 48
  },
  'mb-12': {
    marginBottom: 48
  },
  'ml-12': {
    marginLeft: 48
  },
  'mt-16': {
    marginTop: 64
  },
  'mr-16': {
    marginRight: 64
  },
  'mb-16': {
    marginBottom: 64
  },
  'ml-16': {
    marginLeft: 64
  },
  'mt-auto': {
    marginTop: 'auto'
  },
  'mr-auto': {
    marginRight: 'auto'
  },
  'mb-auto': {
    marginBottom: 'auto'
  },
  'ml-auto': {
    marginLeft: 'auto'
  },
  'mt-px': {
    marginTop: 1
  },
  'mr-px': {
    marginRight: 1
  },
  'mb-px': {
    marginBottom: 1
  },
  'ml-px': {
    marginLeft: 1
  },
  'max-h-full': {
    maxHeight: '100%'
  },
  'max-w-xs': {
    maxWidth: 320
  },
  'max-w-sm': {
    maxWidth: 480
  },
  'max-w-md': {
    maxWidth: 640
  },
  'max-w-lg': {
    maxWidth: 800
  },
  'max-w-xl': {
    maxWidth: 960
  },
  'max-w-2xl': {
    maxWidth: 1120
  },
  'max-w-3xl': {
    maxWidth: 1280
  },
  'max-w-4xl': {
    maxWidth: 1440
  },
  'max-w-5xl': {
    maxWidth: 1600
  },
  'max-w-full': {
    maxWidth: '100%'
  },
  'min-h-0': {
    minHeight: 0
  },
  'min-h-full': {
    minHeight: '100%'
  },
  'min-w-0': {
    minWidth: 0
  },
  'min-w-full': {
    minWidth: '100%'
  },
  '-m-0': {
    marginTop: 0,
    marginBottom: 0,
    marginRight: 0,
    marginLeft: 0
  },
  '-m-1': {
    marginTop: -4,
    marginBottom: -4,
    marginRight: -4,
    marginLeft: -4
  },
  '-m-2': {
    marginTop: -8,
    marginBottom: -8,
    marginRight: -8,
    marginLeft: -8
  },
  '-m-3': {
    marginTop: -12,
    marginBottom: -12,
    marginRight: -12,
    marginLeft: -12
  },
  '-m-4': {
    marginTop: -16,
    marginBottom: -16,
    marginRight: -16,
    marginLeft: -16
  },
  '-m-6': {
    marginTop: -24,
    marginBottom: -24,
    marginRight: -24,
    marginLeft: -24
  },
  '-m-8': {
    marginTop: -32,
    marginBottom: -32,
    marginRight: -32,
    marginLeft: -32
  },
  '-m-px': {
    marginTop: -1,
    marginBottom: -1,
    marginRight: -1,
    marginLeft: -1
  },
  '-my-0': {
    marginTop: 0,
    marginBottom: 0
  },
  '-mx-0': {
    marginLeft: 0,
    marginRight: 0
  },
  '-my-1': {
    marginTop: -4,
    marginBottom: -4
  },
  '-mx-1': {
    marginLeft: -4,
    marginRight: -4
  },
  '-my-2': {
    marginTop: -8,
    marginBottom: -8
  },
  '-mx-2': {
    marginLeft: -8,
    marginRight: -8
  },
  '-my-3': {
    marginTop: -12,
    marginBottom: -12
  },
  '-mx-3': {
    marginLeft: -12,
    marginRight: -12
  },
  '-my-4': {
    marginTop: -16,
    marginBottom: -16
  },
  '-mx-4': {
    marginLeft: -16,
    marginRight: -16
  },
  '-my-6': {
    marginTop: -24,
    marginBottom: -24
  },
  '-mx-6': {
    marginLeft: -24,
    marginRight: -24
  },
  '-my-8': {
    marginTop: -32,
    marginBottom: -32
  },
  '-mx-8': {
    marginLeft: -32,
    marginRight: -32
  },
  '-my-px': {
    marginTop: -1,
    marginBottom: -1
  },
  '-mx-px': {
    marginLeft: -1,
    marginRight: -1
  },
  '-mt-0': {
    marginTop: 0
  },
  '-mr-0': {
    marginRight: 0
  },
  '-mb-0': {
    marginBottom: 0
  },
  '-ml-0': {
    marginLeft: 0
  },
  '-mt-1': {
    marginTop: -4
  },
  '-mr-1': {
    marginRight: -4
  },
  '-mb-1': {
    marginBottom: -4
  },
  '-ml-1': {
    marginLeft: -4
  },
  '-mt-2': {
    marginTop: -8
  },
  '-mr-2': {
    marginRight: -8
  },
  '-mb-2': {
    marginBottom: -8
  },
  '-ml-2': {
    marginLeft: -8
  },
  '-mt-3': {
    marginTop: -12
  },
  '-mr-3': {
    marginRight: -12
  },
  '-mb-3': {
    marginBottom: -12
  },
  '-ml-3': {
    marginLeft: -12
  },
  '-mt-4': {
    marginTop: -16
  },
  '-mr-4': {
    marginRight: -16
  },
  '-mb-4': {
    marginBottom: -16
  },
  '-ml-4': {
    marginLeft: -16
  },
  '-mt-6': {
    marginTop: -24
  },
  '-mr-6': {
    marginRight: -24
  },
  '-mb-6': {
    marginBottom: -24
  },
  '-ml-6': {
    marginLeft: -24
  },
  '-mt-8': {
    marginTop: -32
  },
  '-mr-8': {
    marginRight: -32
  },
  '-mb-8': {
    marginBottom: -32
  },
  '-ml-8': {
    marginLeft: -32
  },
  '-mt-px': {
    marginTop: -1
  },
  '-mr-px': {
    marginRight: -1
  },
  '-mb-px': {
    marginBottom: -1
  },
  '-ml-px': {
    marginLeft: -1
  },
  'opacity-0': {
    opacity: 0
  },
  'opacity-25': {
    opacity: 0.25
  },
  'opacity-50': {
    opacity: 0.5
  },
  'opacity-75': {
    opacity: 0.75
  },
  'opacity-100': {
    opacity: 1
  },
  'p-0': {
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    paddingLeft: 0
  },
  'p-1': {
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 4,
    paddingLeft: 4
  },
  'p-2': {
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 8,
    paddingLeft: 8
  },
  'p-3': {
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 12,
    paddingLeft: 12
  },
  'p-4': {
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 16,
    paddingLeft: 16
  },
  'p-6': {
    paddingTop: 24,
    paddingBottom: 24,
    paddingRight: 24,
    paddingLeft: 24
  },
  'p-8': {
    paddingTop: 32,
    paddingBottom: 32,
    paddingRight: 32,
    paddingLeft: 32
  },
  'p-px': {
    paddingTop: 1,
    paddingBottom: 1,
    paddingRight: 1,
    paddingLeft: 1
  },
  'py-0': {
    paddingTop: 0,
    paddingBottom: 0
  },
  'px-0': {
    paddingLeft: 0,
    paddingRight: 0
  },
  'py-1': {
    paddingTop: 4,
    paddingBottom: 4
  },
  'px-1': {
    paddingLeft: 4,
    paddingRight: 4
  },
  'py-2': {
    paddingTop: 8,
    paddingBottom: 8
  },
  'px-2': {
    paddingLeft: 8,
    paddingRight: 8
  },
  'py-3': {
    paddingTop: 12,
    paddingBottom: 12
  },
  'px-3': {
    paddingLeft: 12,
    paddingRight: 12
  },
  'py-4': {
    paddingTop: 16,
    paddingBottom: 16
  },
  'px-4': {
    paddingLeft: 16,
    paddingRight: 16
  },
  'py-6': {
    paddingTop: 24,
    paddingBottom: 24
  },
  'px-6': {
    paddingLeft: 24,
    paddingRight: 24
  },
  'py-8': {
    paddingTop: 32,
    paddingBottom: 32
  },
  'px-8': {
    paddingLeft: 32,
    paddingRight: 32
  },
  'py-10': {
    paddingTop: 40,
    paddingBottom: 40
  },
  'px-10': {
    paddingLeft: 40,
    paddingRight: 40
  },
  'py-12': {
    paddingTop: 48,
    paddingBottom: 48
  },
  'px-12': {
    paddingLeft: 48,
    paddingRight: 48
  },
  'py-16': {
    paddingTop: 64,
    paddingBottom: 64
  },
  'px-16': {
    paddingLeft: 64,
    paddingRight: 64
  },
  'py-24': {
    paddingTop: 96,
    paddingBottom: 96
  },
  'px-24': {
    paddingLeft: 96,
    paddingRight: 96
  },
  'py-px': {
    paddingTop: 1,
    paddingBottom: 1
  },
  'px-px': {
    paddingLeft: 1,
    paddingRight: 1
  },
  'pt-0': {
    paddingTop: 0
  },
  'pr-0': {
    paddingRight: 0
  },
  'pb-0': {
    paddingBottom: 0
  },
  'pl-0': {
    paddingLeft: 0
  },
  'pt-1': {
    paddingTop: 4
  },
  'pr-1': {
    paddingRight: 4
  },
  'pb-1': {
    paddingBottom: 4
  },
  'pl-1': {
    paddingLeft: 4
  },
  'pt-2': {
    paddingTop: 8
  },
  'pr-2': {
    paddingRight: 8
  },
  'pb-2': {
    paddingBottom: 8
  },
  'pl-2': {
    paddingLeft: 8
  },
  'pt-3': {
    paddingTop: 12
  },
  'pr-3': {
    paddingRight: 12
  },
  'pb-3': {
    paddingBottom: 12
  },
  'pl-3': {
    paddingLeft: 12
  },
  'pt-4': {
    paddingTop: 16
  },
  'pr-4': {
    paddingRight: 16
  },
  'pb-4': {
    paddingBottom: 16
  },
  'pl-4': {
    paddingLeft: 16
  },
  'pt-6': {
    paddingTop: 24
  },
  'pr-6': {
    paddingRight: 24
  },
  'pb-6': {
    paddingBottom: 24
  },
  'pl-6': {
    paddingLeft: 24
  },
  'pt-8': {
    paddingTop: 32
  },
  'pr-8': {
    paddingRight: 32
  },
  'pb-8': {
    paddingBottom: 32
  },
  'pl-8': {
    paddingLeft: 32
  },
  'pt-10': {
    paddingTop: 40
  },
  'pr-10': {
    paddingRight: 40
  },
  'pb-10': {
    paddingBottom: 40
  },
  'pl-10': {
    paddingLeft: 40
  },
  'pt-12': {
    paddingTop: 48
  },
  'pr-12': {
    paddingRight: 48
  },
  'pb-12': {
    paddingBottom: 48
  },
  'pl-12': {
    paddingLeft: 48
  },
  'pt-16': {
    paddingTop: 64
  },
  'pr-16': {
    paddingRight: 64
  },
  'pb-16': {
    paddingBottom: 64
  },
  'pl-16': {
    paddingLeft: 64
  },
  'pt-px': {
    paddingTop: 1
  },
  'pr-px': {
    paddingRight: 1
  },
  'pb-px': {
    paddingBottom: 1
  },
  'pl-px': {
    paddingLeft: 1
  },
  absolute: {
    position: 'absolute'
  },
  relative: {
    position: 'relative'
  },
  'pin-none': {
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto'
  },
  pin: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  'pin-y': {
    top: 0,
    bottom: 0
  },
  'pin-x': {
    right: 0,
    left: 0
  },
  'pin-t': {
    top: 0
  },
  'pin-r': {
    right: 0
  },
  'pin-b': {
    bottom: 0
  },
  'pin-l': {
    left: 0
  },
  'text-left': {
    textAlign: 'left'
  },
  'text-center': {
    textAlign: 'center'
  },
  'text-right': {
    textAlign: 'right'
  },
  'text-justify': {
    textAlign: 'justify'
  },
  'text-transparent': {
    color: 'transparent'
  },
  italic: {
    fontStyle: 'italic'
  },
  roman: {
    fontStyle: 'normal'
  },
  'tracking-tight': {
    letterSpacing: -0.8
  },
  'tracking-normal': {
    letterSpacing: 0
  },
  'tracking-wide': {
    letterSpacing: 0.8
  },
  'w-1': {
    width: 4
  },
  'w-2': {
    width: 8
  },
  'w-3': {
    width: 12
  },
  'w-4': {
    width: 16
  },
  'w-6': {
    width: 24
  },
  'w-8': {
    width: 32
  },
  'w-10': {
    width: 40
  },
  'w-12': {
    width: 48
  },
  'w-16': {
    width: 64
  },
  'w-24': {
    width: 96
  },
  'w-32': {
    width: 128
  },
  'w-48': {
    width: 192
  },
  'w-64': {
    width: 256
  },
  'w-auto': {
    width: 'auto'
  },
  'w-px': {
    width: 1
  },
  'w-1/2': {
    width: '50%'
  },
  'w-1/3': {
    width: '33.33333%'
  },
  'w-2/3': {
    width: '66.66667%'
  },
  'w-1/4': {
    width: '25%'
  },
  'w-3/4': {
    width: '75%'
  },
  'w-1/5': {
    width: '20%'
  },
  'w-2/5': {
    width: '40%'
  },
  'w-3/5': {
    width: '60%'
  },
  'w-4/5': {
    width: '80%'
  },
  'w-1/6': {
    width: '16.66667%'
  },
  'w-5/6': {
    width: '83.33333%'
  },
  'w-1/8': {
    width: '12.5%'
  },
  'w-7/8': {
    width: '87.5%'
  },
  'w-full': {
    width: '100%'
  },
  'w-screen': {
    width: '100vw'
  },
  'h-1/2': {
    height: '50%'
  },
  'h-1/3': {
    height: '33.33333%'
  },
  'h-2/3': {
    height: '66.66667%'
  },
  'h-1/4': {
    height: '25%'
  },
  'h-3/4': {
    height: '75%'
  },
  'h-1/5': {
    height: '20%'
  },
  'h-2/5': {
    height: '40%'
  },
  'h-3/5': {
    height: '60%'
  },
  'h-4/5': {
    height: '80%'
  },
  'h-1/6': {
    height: '16.66667%'
  },
  'h-5/6': {
    height: '83.33333%'
  },
  'h-1/8': {
    height: '12.5%'
  },
  'h-7/8': {
    height: '87.5%'
  },
  'h-full': {
    height: '100%'
  },
  'h-screen': {
    height: '100vh'
  }
}
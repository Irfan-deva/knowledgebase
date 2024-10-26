import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const sizes = {
  width,
  height,
  title: 32,
  h2: 24,
  h3: 18,
  body: 14,
  caption: 12,
  text: 16,
};

const spacing = {
  s: 8,
  m: 18,
  l: 24,
  xl: 40,
};
export { sizes, spacing }
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'v-enter-active': {
    'transition': 'opacity 1s'
  },
  'v-leave-active': {
    'transition': 'opacity 1s'
  },
  'v-enter': {
    'opacity': '0'
  },
  'v-leave-to': {
    'opacity': '0'
  }
});

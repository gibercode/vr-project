
import { StyleSheet } from 'react-360';

const styles = StyleSheet.create({
  blueCube: {
    color: 'blue',
    transform: [
      { translate: [1, -3, 2] }
    ]
  },
  greenCube: {
    color: 'green',
    transform: [
      { translate: [1, -30, 2] }
    ]
  }
});

export default styles;
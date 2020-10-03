
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
  },

  astronaut: {
    transform: [
      { rotateY: -4, rotateX: 120 }, 
      { scale: 6 }, 
      { translate: [1, -1, -5] } 
    ],
    width: 40
  }
});

export default styles;
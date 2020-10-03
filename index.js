import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  asset,
  VrButton,
  Environment,
  NativeModules
} from 'react-360';
import Entity from 'Entity';
import styles from './styles';

const { AudioModule } = NativeModules;

export default class VrScene extends React.Component {
  state = {
    show: 0
  }

  Interaction = () => {
    // AudioModule.playOneShot({
    //   source: asset('astronaut.mp3'),
    // });

    // return;
    // this.setState({ show: (this.state.show = true) });

    const { show } = this.state;

    if (show === 0) {
      this.setState({ show: (this.state.show = 1) });
      Environment.setBackgroundImage(asset('japan.jpg'))
    }

    if (show === 1) {
      this.setState({ show: (this.state.show = 2) });
      Environment.setBackgroundImage(asset('beach.jpg'))
    }

  }

  render() {
    return (
      <View >

        {
          this.state.show === 0 ?
            <View >
              <VrButton onClick={this.Interaction} >
                <Entity source={{ obj: asset('./cube.obj') }} style={styles.blueCube} />
              </VrButton>
            </View> : null
        }

        {
          this.state.show === 1 ?
          <View>
            <VrButton onClick={this.Interaction} title='hola' >
              <Entity source={{ obj: asset('./cube.obj') }} style={styles.greenCube} />
              <Entity source={{ obj: asset('./Goku.obj'),  mtl: asset('./Goku.mtl'), texture: asset('./goku') }} style={{ transform: [{ rotateY: -4, rotateX: 120 }, { scale: 0.5 }, { translate: [1, -10, -10] }], width: 400}} />
            </VrButton>
          </View>
            : null
        }

        {
          this.state.show === 2 ?
            <View>
              <Entity source={{ obj: asset('./Alien.obj'), mtl: asset('./Alien.mtl') }} style={{ transform: [{ rotateY: -16, rotateX: 120 }, { scale: 0.1 }, { translate: [11, -10, 1.5] }] }} />
              <Entity source={{ obj: asset('./Gorilla.obj'), mtl: asset('./Gorilla.mtl') }} style={{ transform: [{ rotateY: 1, rotateX: 100 }, { scale: 0.1 }, { translate: [7, -10, 1.5] }] }} />
              <Entity source={{ obj: asset('./Clown.obj'), mtl: asset('./Clown.mtl') }} style={{ transform: [{ rotateY: -4, rotateX: 120 }, { scale: 0.1 }, { translate: [1, -10, 1.5] }] }} />
              <Entity source={{ obj: asset('./Robot.obj'), mtl: asset('./Robot.mtl') }} style={{ transform: [{ rotateY: 8, rotateX: 100 }, { scale: 0.1 }, { translate: [-5, -10, 1.5] }] }} />
              <Entity source={{ obj: asset('./Elf.obj'), mtl: asset('./Elf.mtl') }} style={{ transform: [{ rotateY: 12, rotateX: 100 }, { scale: 0.1 }, { translate: [-10, -10, 1.5] }] }} />
            </View>
            : null
        }

        {/* <Entity source={{ obj: asset('./astronaut.obj'), mtl: asset('./astronaut.mtl')}} style={{transform: [{rotateY:10}, {scale:0.1}, {translate: [10, -1, 20] }]}}  /> */}
      </View>
    );
  }
};


AppRegistry.registerComponent('VrScene', () => VrScene);

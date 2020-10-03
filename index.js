import React, { useRef } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  asset,
  VrButton,
  Environment,
  NativeModules,
  Animated
} from 'react-360';
import Entity from 'Entity';
import styles from './styles';

const { AudioModule } = NativeModules;
const AnimatedEntity = Animated.createAnimatedComponent(Entity);

export default class VrScene extends React.Component {

  translation = new Animated.Value(0);

  state = {
    show: 0
  }

  componentDidMount() {
    this.SpacemanAnimation();
  }

  SpacemanAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.delay(500),
        Animated.timing(
          this.translation,
          {
            toValue: 0.5,
            duration: 1000,
          }
        ),
        Animated.timing(
          this.translation,
          {
            toValue: 0,
            duration: 1000,
          }
        ),
      ]),
      {}
    ).start();
  };

  Interaction = () => {
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

  Sound = (file, volume) => {
    AudioModule.playOneShot({
      source: asset(file),
      volume
    });
  }

  render() {
    return (
      <View >

        {
          this.state.show === 0 ?
            <View >
              <VrButton onClick={this.Interaction}  >
                <Entity source={{ obj: asset('./cube.obj') }} style={styles.blueCube} />
              </VrButton>

              <VrButton>
                <AnimatedEntity onClick={this.Sound('astronaut.mp3', 0.3)}
                  source={{ obj: asset('./astronaut/Astronaut.obj'), mtl: asset('./astronaut/Astronaut.mtl'), texture: asset('./astronaut') }}
                  style={{
                    transform: [
                      { rotateY: -10, rotateX: 120 },
                      { scale: 5.5 },
                      { translate: [1, -1, -5] },
                      { translateY: this.translation }
                    ],
                    width: 40
                  }} />
              </VrButton>

              <VrButton>
                <Entity source={{ obj: asset('./rocket/rocket.obj'), mtl: asset('./rocket/rocket.mtl'), texture: asset('./rocket') }} style={{ transform: [{ rotateY: 120, rotateX: 10 }, { scale: 1 }, { translate: [-15, 10, 40] }] }} />
              </VrButton>

              <VrButton>
                <Entity source={{ obj: asset('./asteroid/asteroid.obj'), mtl: asset('./asteroid/asteroid.mtl'), texture: asset('./asteroid') }} style={{ transform: [{ rotateY: -150, rotateX: 10 }, { scale: 0.1 }, { translate: [2000, -30, 1] }], width: 100 }} />
              </VrButton>
              <VrButton>
                <Entity source={{ obj: asset('./earth/earth.obj'), mtl: asset('./earth/earth.mtl'), texture: asset('./earth') }} style={{ transform: [{ rotateY: -90, rotateX: 10 }, { scale: 0.1 }, { translate: [2000, 150, 1] }], width: 300 }} />
              </VrButton>

            </View> : null
        }

        {
          this.state.show === 1 ?
            <View>
              <VrButton onClick={this.Interaction} title='hola' >
                <Entity source={{ obj: asset('./cube.obj') }} style={styles.greenCube} />
                <Entity source={{ obj: asset('./goku/Goku.obj'), mtl: asset('./goku/Goku.mtl'), texture: asset('./goku') }} style={{ transform: [{ rotateY: -4, rotateX: 120 }, { scale: 0.5 }, { translate: [1, -10, -10] }], width: 400 }} />
              </VrButton>
            </View>
            : null
        }

        {
          this.state.show === 2 ?
            <View>
              <Entity source={{ obj: asset('./cofunders/Alien.obj'), mtl: asset('./cofunders/Alien.mtl') }} style={{ transform: [{ rotateY: -16, rotateX: 120 }, { scale: 0.1 }, { translate: [11, -10, 1.5] }] }} />
              <Entity source={{ obj: asset('./cofunders/Gorilla.obj'), mtl: asset('./cofunders/Gorilla.mtl') }} style={{ transform: [{ rotateY: 1, rotateX: 100 }, { scale: 0.1 }, { translate: [7, -10, 1.5] }] }} />
              <Entity source={{ obj: asset('./cofunders/Clown.obj'), mtl: asset('./cofunders/Clown.mtl') }} style={{ transform: [{ rotateY: -4, rotateX: 120 }, { scale: 0.1 }, { translate: [1, -10, 1.5] }] }} />
              <Entity source={{ obj: asset('./cofunders/Robot.obj'), mtl: asset('./cofunders/Robot.mtl') }} style={{ transform: [{ rotateY: 8, rotateX: 100 }, { scale: 0.1 }, { translate: [-5, -10, 1.5] }] }} />
              <Entity source={{ obj: asset('./cofunders/Elf.obj'), mtl: asset('./cofunders/Elf.mtl') }} style={{ transform: [{ rotateY: 12, rotateX: 100 }, { scale: 0.1 }, { translate: [-10, -10, 1.5] }] }} />
            </View>
            : null
        }

        {/*   <Entity source={{ obj: asset('./astronaut.obj'), mtl: asset('./astronaut.mtl')}} style={{transform: [{rotateY:10}, {scale:0.1}, {translate: [10, -1, 20] }]}}  />  */}
      </View>
    );
  }
};


AppRegistry.registerComponent('VrScene', () => VrScene);

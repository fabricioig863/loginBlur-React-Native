import React from 'react';
import * as Styled from './styles';

import {
  add,
  Circle,
  LinearGradient,
  vec,
  sub,
  Fill,
  useLoop,
  mix,
  useComputedValue,
  BackdropBlur,
  Blur,
} from '@shopify/react-native-skia';

import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const c = vec(width / 2, (height / 2) * 1.5);
const r = c.x - 32;

export const MyBlur = () => {
  const progress = useLoop({duration: 5000});
  const start = useComputedValue(
    () => sub(c, vec(0, mix(progress.current, r, r))),
    [progress],
  );

  const end = useComputedValue(
    () => add(c, vec(0, mix(progress.current, r, r / 2))),
    [progress],
  );

  const radius = useComputedValue(
    () => mix(progress.current, r, r / 2),
    [progress],
  );

  return (
    <Styled.Wrapper>
      <Fill color={'#e5e8ef'} />
      <Circle c={c} r={radius}>
        <LinearGradient
          start={start}
          end={end}
          colors={['#CDC5FF', '#FFBBC2']}
        />
      </Circle>
      <BackdropBlur blur={20}>
        <Fill color={'#DFE3E610'} />
      </BackdropBlur>
    </Styled.Wrapper>
  );
};

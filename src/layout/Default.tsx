import * as React from 'react';
import {View, Text} from 'react-native';

type DefaultProps = {
  children: React.ReactNode;
};

export default function Default({children}: DefaultProps): JSX.Element {
  return <View style={{flex: 1}}>{children}</View>;
}

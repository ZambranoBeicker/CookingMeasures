import * as React from 'react';
import {Pressable, Text} from 'react-native/';
import * as styles from './styles';

const variants = {
  primary: 'black',
  secondary: '#C42069',
};

type AddButtonProps = {
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
};

export default function AddButton({
  onPress,
  variant,
  children,
}: AddButtonProps): JSX.Element {
  const bgColor: string =
    variant === 'secondary' ? variants.secondary : variants.primary;
  return (
    <Pressable
      onPress={() => {
        onPress();
      }}
      style={{...styles.button, backgroundColor: bgColor}}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
}

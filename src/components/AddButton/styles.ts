import {ViewStyle, TextStyle} from 'react-native';

const commonStyles: ViewStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
};

const buttonSize: number = 50;

export const container: ViewStyle = {
  paddingVertical: 8,
  position: 'absolute',
  width: '100%',
  bottom: '10%',
  ...commonStyles,
};

export const button: ViewStyle = {
  backgroundColor: 'black',
  width: buttonSize,
  height: buttonSize,
  paddingTop: 2,
  marginLeft: 'auto',
  marginRight: '10%',
  borderRadius: buttonSize,
  ...commonStyles,
};

export const text: TextStyle = {
  fontSize: 32,
  color: 'white',
};

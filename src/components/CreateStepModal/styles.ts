import {ViewStyle, TextStyle} from 'react-native';

const borderStyles: ViewStyle = {
  borderColor: 'black',
  borderWidth: 1,
};

const commonStyles: ViewStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
};

const buttonSize: number = 50;

export const container: ViewStyle = {
  marginTop: '50%',
  paddingVertical: 20,
  paddingHorizontal: 8,
  width: '85%',
  marginLeft: 'auto',
  marginRight: 'auto',
  borderRadius: 10,
  position: 'relative',
  zIndex: 10,
  backgroundColor: 'white',
};

export const modal: ViewStyle = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  backgroundColor: '#0005',
};

export const input: ViewStyle = {
  paddingHorizontal: 8,
  borderRadius: 8,
  ...borderStyles,
};

export const buttonText: TextStyle = {
  color: 'white',
};

export const button: ViewStyle = {
  paddingVertical: 8,
  paddingHorizontal: 20,
  marginHorizontal: 4,
  borderRadius: 4,
};

export const buttonContainer: ViewStyle = {
  marginTop: 16,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
};
export const label: TextStyle = {
  marginBottom: 8,
};
export const title: TextStyle = {
  fontSize: 24,
  textAlign: 'center',
  marginBottom: 24,
  fontWeight: 'bold',
};

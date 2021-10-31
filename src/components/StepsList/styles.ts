import {ViewStyle, TextStyle} from 'react-native';

const commonStyles: ViewStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
};

const buttonSize: number = 50;

export const container: ViewStyle = {
  padding: 8,
};

export const listContainer: ViewStyle = {
  padding: 8,
  borderColor: 'black',
  borderWidth: 1,
  borderRadius: 4,
};

export const listItem: ViewStyle = {
  padding: 8,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
};
export const title: TextStyle = {
  fontSize: 24,
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: 12,
};

export const itemText: TextStyle = {
  fontSize: 18,
};

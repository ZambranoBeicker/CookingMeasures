import {ViewStyle, TextStyle} from 'react-native';

const buttonSize: number = 50;

export const container: ViewStyle = {
  padding: 8,
};

export const listContainer: ViewStyle = {
  paddingVertical: 8,
  backgroundColor: 'white',
  borderRadius: 4,
  overflow: 'scroll',
};

export const listItem: ViewStyle = {
  paddingHorizontal: 16,
  paddingVertical: 8,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  borderBottomWidth: 1,
  borderColor: '#6F6F6F',
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

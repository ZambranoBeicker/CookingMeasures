import {ViewStyle, TextStyle} from 'react-native';

export const listContainer: ViewStyle = {
  paddingVertical: 8,
  backgroundColor: 'white',
  borderRadius: 4,
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

export const itemText: TextStyle = {
  fontSize: 18,
};

export const container: ViewStyle = {
  paddingVertical: 8,
};

export const text: TextStyle = {
  fontSize: 20,
  textAlign: 'center',
};

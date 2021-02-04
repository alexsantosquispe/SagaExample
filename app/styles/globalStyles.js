import { StyleSheet } from 'react-native';
import { Colors } from './colors';

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.backgroundColor
  },
  baseFlatList: {
    paddingHorizontal: 2
  },
  postItem: {
    padding: 16,
    marginTop: 4,
    marginBottom: 8,
    marginHorizontal: 6,
    borderRadius: 8,
    backgroundColor: Colors.lightBackground
  },
  taskItem: {
    width: '47%',
    paddingTop: 4,
    paddingBottom: 8,
    paddingHorizontal: 8,
    marginTop: 4,
    marginBottom: 8,
    marginHorizontal: 6,
    borderRadius: 4,
    backgroundColor: Colors.lightBackground
  },
  titleItem: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  subTitleItem: {
    fontSize: 17
  },
  textItem: {
    fontSize: 16
  },
  titleLayout: {
    paddingVertical: 0
  },
  iconLayout: {
    alignItems: 'flex-end'
  }
});

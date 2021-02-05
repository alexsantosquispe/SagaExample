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
    margin: 6,
    borderRadius: 5,
    backgroundColor: Colors.lightColor
  },
  taskItem: {
    width: '47%',
    paddingTop: 4,
    paddingBottom: 8,
    paddingHorizontal: 8,
    marginTop: 4,
    marginBottom: 8,
    marginHorizontal: 6,
    borderRadius: 5,
    backgroundColor: Colors.lightColor
  },
  userItem: {
    width: '47%',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 8,
    marginTop: 4,
    borderRadius: 5,
    marginHorizontal: 6,
    marginBottom: 8,
    backgroundColor: Colors.lightColor
  },
  userAvatar: {
    width: 80,
    height: 80,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    borderRadius: 40,
    backgroundColor: Colors.primaryColor
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 6
  },
  userName: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  userData: {
    width: '88%',
    marginLeft: 4
  },
  hyperlink: {
    color: Colors.primaryColor
  },
  userLetter: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.lightColor
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
  },
  centeredContainer: {
    width: '60%',
    alignItems: 'center'
  },
  emptyMessage: {
    fontSize: 20,
    textAlign: 'center',
    color: Colors.inactiveColor
  },
  logoContainer: {
    padding: 0
  },
  logo: {
    height: 40,
    width: '50%'
  }
});

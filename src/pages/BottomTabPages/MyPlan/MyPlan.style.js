import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderColor: 'black',
  },
  item_container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 15,
  },
  info_container: {
    marginLeft: 10,
  },
  label: {
    marginBottom: 3,
    fontWeight: 'bold',
  },
  repast: {
    marginBottom: 3,
  },
  date: {},
  remove_icon: {
    position: 'absolute',
    right: 25,
    top: 40,
  },
  nutrients: {
    fontWeight: '400',
    fontSize: 14,
    height: 25,
    padding: 1,
    marginTop: 0,
  },
});

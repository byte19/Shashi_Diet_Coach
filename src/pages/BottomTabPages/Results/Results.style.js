import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  charts_container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    marginTop: 30,
    marginBottom: 30,
  },
  charts_title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottomWidth: 0.5,
    marginHorizontal: 120,
    paddingBottom: 5,
    marginBottom: 5,
  },
  consumed_container: {
    borderRadius: 10,
    margin: 10,
    padding: 10,
    height: 300,
    borderWidth: 1,
  },
  consumed_title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottomWidth: 0.5,
    marginHorizontal: 100,
    paddingBottom: 5,
    marginBottom: 10,
  },
});

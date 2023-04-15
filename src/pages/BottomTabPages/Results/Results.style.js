import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  weekly_chart_container: {
    flex: 1,
    height: deviceSize.height / 3,
  },
  monthly_chart_container: {
    flex: 1,
    height: deviceSize.height / 3,
  },
  consumed_container: {
    // flex: 1,
    borderWidth: 1,
    margin: 5,
    height: deviceSize.height / 3,
  },
  consumed_title: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 5,
  },
});

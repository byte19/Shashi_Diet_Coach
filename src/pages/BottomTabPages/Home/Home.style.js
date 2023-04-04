import {StyleSheet} from 'react-native';

import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    alignItems: 'center',
    padding: 10,
    paddingTop: 15,
    borderBottomWidth: 1,
    borderColor: colors.logoGreen,
    marginHorizontal: 40,
  },
  header_text: {
    fontSize: 25,
    fontWeight: '400',
    color: colors.logoGreen,
  },
  create_container: {
    justifyContent: 'center',
    backgroundColor: colors.mattegreen,
    borderRadius: 15,
    margin: 10,
    marginTop: 20,
    paddingHorizontal: 15,
    paddingRight: 25,
    height: 70,
  },
  touchableOpacity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  create_title: {
    fontSize: 15,
    color: 'white',
  },
  plans_title: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottomWidth: 1,
    margin: 10,
    paddingBottom: 10,
    marginHorizontal: 80,
  },
  recommended_diet: {
    backgroundColor: colors.greenBlue,
    borderRadius: 10,
    height: 70,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    margin: 7,
    paddingTop: 22,
  },
});

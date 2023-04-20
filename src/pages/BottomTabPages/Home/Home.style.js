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
  plans_title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.titlesGray,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: colors.titlesGray,
    margin: 10,
    paddingBottom: 10,
    marginHorizontal: 80,
  },
  recommended_container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.darkGray,
    borderRadius: 10,
    height: 70,
    margin: 7,
  },
  recommended_image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    opacity: 0.3,
  },
  recommended_diet: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    position: 'absolute',
    color: 'white',
    flex: 1,
  },
});

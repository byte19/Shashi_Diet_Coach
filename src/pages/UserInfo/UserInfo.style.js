import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header_container: {
    alignItems: 'center',
    padding: 10,
    paddingTop: 30,
    marginBottom: 40,
    borderBottomWidth: 1,
    borderColor: colors.logoGreen,
    marginHorizontal: 40,
  },
  header_text: {
    fontSize: 25,
    fontWeight: '400',
    color: colors.logoGreen,
    marginBottom: 10,
  },
  top_text: {
    textAlign: 'center',
    margin: 10,
    marginHorizontal: 13,
    marginBottom: 50,
    fontSize: 18,
    fontStyle: 'italic',
  },
  gender_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  gender_info_containers: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  gender_text: {
    fontSize: 16,
    marginHorizontal: 5,
  },
  checkbox: {
    transform: [{scale: 1.2}],
  },
  input_container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 5,
    margin: 10,
  },
  input: {
    width: 115,
    borderColor: '#a0a0a0',
  },
  dropdown: {
    height: 50,
    borderColor: '#a0a0a0',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    margin: 10,
  },
  placeholder_style: {
    fontSize: 14,
  },
  selected_text_style: {
    // fontSize: 16,
    backgroundColor: '#eceff1',
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    height: 48,
    paddingTop: 13,
    marginLeft: -10,
    marginRight: 10,
    paddingLeft: 10,
  },
  button_container: {
    margin: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    width: 120,
  },
});

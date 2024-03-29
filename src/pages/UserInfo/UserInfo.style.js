// import {StyleSheet} from 'react-native';

// import colors from '../../styles/colors';

// export default StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'grey',
//   },
//   header_container: {
//     alignItems: 'center',
//     padding: 10,
//     paddingTop: 30,
//     marginBottom: 40,
//     borderBottomWidth: 1,
//     borderColor: colors.logoGreen,
//     marginHorizontal: 40,
//   },
//   header_text: {
//     fontSize: 25,
//     fontWeight: '400',
//     color: colors.logoGreen,
//     marginBottom: 10,
//   },
//   top_text: {
//     textAlign: 'center',
//     margin: 10,
//     marginHorizontal: 13,
//     marginBottom: 50,
//     fontSize: 18,
//     fontStyle: 'italic',
//   },
//   dropdown: {
//     height: 50,
//     borderColor: '#a0a0a0',
//     borderWidth: 1,
//     borderRadius: 15,
//     paddingHorizontal: 10,
//     marginHorizontal: 10,
//     margin: 10,
//   },
//   placeholder_style: {
//     fontSize: 14,
//   },
//   selected_text_style: {
//     backgroundColor: '#eceff1',
//     borderBottomLeftRadius: 15,
//     borderTopLeftRadius: 15,
//     height: 48,
//     paddingTop: 13,
//     marginLeft: -10,
//     marginRight: 10,
//     paddingLeft: 10,
//   },
//   button_container: {
//     margin: 10,
//     marginTop: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttons: {
//     width: 120,
//   },
// });

import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGray, // Now a light greenish yellow
  },
  header_container: {
    alignItems: 'center',
    padding: 10,
    paddingTop: 30,
    marginBottom: 40,
    borderBottomWidth: 1,
    borderColor: colors.matteblue, // Now a dark fuchsia
    marginHorizontal: 40,
  },
  header_text: {
    fontSize: 25,
    fontWeight: '400',
    color: colors.logoGreen, // Now a vibrant orange
    marginBottom: 10,
  },
  top_text: {
    textAlign: 'center',
    margin: 10,
    marginHorizontal: 13,
    marginBottom: 50,
    fontSize: 18,
    fontStyle: 'italic',
    color: colors.greenBlue, // Now a rich maroon, added for consistency
  },
  dropdown: {
    height: 50,
    borderColor: colors.mattegreen, // Now a bright yellow
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    margin: 10,
  },
  placeholder_style: {
    fontSize: 14,
    color: colors.titlesGray, // Now pink, for placeholder text specifically
  },
  selected_text_style: {
    backgroundColor: colors.brightgreen, // Now a deep purple
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
    backgroundColor: colors.greenBlue, // Now a rich maroon, to differentiate buttons
  },
});

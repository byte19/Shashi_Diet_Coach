import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../styles/colors';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4eee94',
  },
  top_container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    height: deviceSize.height / 4.3,
  },
  profile_image: {
    margin: 10,
    width: 120,
    height: 120,
    borderRadius: 40,
    marginLeft: 15,
    borderWidth: 1,
    borderColor: 'gray',
  },
  top_user_info_container: {
    padding: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.darkGray,
  },
  gender: {
    marginBottom: 8,
    fontSize: 14,
    color: colors.darkGray,
  },
  activity_title: {
    fontWeight: '500',
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginRight: 15,
    marginBottom: 3,
    fontSize: 16,
    color: colors.darkGray,
  },
  activity_text: {
    fontSize: 14,
    color: colors.darkGray,
  },
  icon_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    right: 10,
    top: 40,
    width: 80,
  },
  bottom_container: {
    flex: 1,
    backgroundColor: 'white',
    height: deviceSize.height / 1.35,
    width: deviceSize.width / 1,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    position: 'absolute',
    bottom: 0,
    elevation: 5,
  },
  bottom_top_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderColor: 'gray',
    paddingBottom: 10,
    margin: 15,
  },
  info_containers: {
    alignItems: 'center',
  },
  info_titles: {
    fontSize: 15,
    fontWeight: '500',
  },
  info_text: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.darkGray,
  },
});

import {Platform, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-ionicons';
import style from './style';

export const TabButton = (currentTab, setCurrentTab, title, icon) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (title == 'LogOut') {
        } else {
          setCurrentTab(title);
        }
      }}>
      <View
        style={[
          style.row,
          {backgroundColor: currentTab == title ? 'white' : 'transparent'},
        ]}>
        <Icon
          name={Platform.OS === 'ios' ? `ios-${icon}` : `md-${icon}`}
          size={25}
          color={currentTab == title ? 'black' : 'white'}
        />

        <Text
          style={[
            style.text,
            {color: currentTab == title ? '#2d4634' : 'white'},
          ]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

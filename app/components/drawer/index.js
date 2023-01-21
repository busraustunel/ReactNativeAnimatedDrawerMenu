import React, {useRef, useState} from 'react';
import {
  Animated,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import profile from '../../assets/img/profile.png';
import style from './style';
import {TabButton} from '../tab-button';
import Icon from 'react-native-ionicons';
export default function Drawer() {
  const [currentTab, setCurrentTab] = useState('Home');
  const [showMenu, setShowMenu] = useState(false);
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;

  return (
    <SafeAreaView style={style.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          Animated.timing(scaleValue, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }).start();
          Animated.timing(offsetValue, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }).start();
          setShowMenu(false);
        }}>
        <View style={style.container2}>
          <Image source={profile} style={style.image} />
          <Text style={style.text}>Büşra Üstünel</Text>
          <TouchableOpacity>
            <Text style={style.text2}>View Profile</Text>
          </TouchableOpacity>
          <View style={style.tabButtonContainer}>
            {TabButton(currentTab, setCurrentTab, 'Home', 'home')}
            {TabButton(currentTab, setCurrentTab, 'Search', 'search')}
            {TabButton(
              currentTab,
              setCurrentTab,
              'Notifications',
              'notifications',
            )}
            {TabButton(currentTab, setCurrentTab, 'Settings', 'settings')}
          </View>
          <View>
            {TabButton(currentTab, setCurrentTab, 'LogOut', 'log-out')}
          </View>
        </View>
      </TouchableWithoutFeedback>
      <Animated.View
        style={[
          style.animatedView,
          {
            borderRadius: showMenu ? 15 : 0,
            transform: [{scale: scaleValue}, {translateX: offsetValue}],
          },
        ]}>
        <TouchableOpacity
          onPress={() => {
            Animated.timing(scaleValue, {
              toValue: showMenu ? 1 : 0.88,
              duration: 300,
              useNativeDriver: true,
            }).start();

            Animated.timing(offsetValue, {
              toValue: showMenu ? 0 : 230,
              duration: 300,
              useNativeDriver: true,
            }).start();

            setShowMenu(!showMenu);
          }}>
          <Icon name={'menu'} style={style.icon} />
        </TouchableOpacity>
        <Text style={style.text3}>{currentTab}</Text>
      </Animated.View>
    </SafeAreaView>
  );
}

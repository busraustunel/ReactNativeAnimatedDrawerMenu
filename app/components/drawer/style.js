import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(114,46,122,0.63)',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  container2: {
    justifyContent: 'flex-start',
    padding: 15,
  },
  tabButtonContainer: {
    flexGrow: 1,
    marginTop: 30,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 10,
    marginTop: 10,
    alignSelf: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
    alignSelf: 'center',
  },
  text2: {
    marginTop: 6,
    color: 'white',
    alignSelf: 'center',
  },
  text3: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    paddingTop: 20,
  },
  animatedView: {
    flexGrow: 1,
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: 'black',
    marginTop: 40,
  },
  outsideArea: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'black',
    opacity: 0.5,
    zIndex: 1,
  },
});

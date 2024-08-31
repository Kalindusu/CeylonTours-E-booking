import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigation from './StackNavigation';
import React from 'react';
import { ModalPortal } from 'react-native-modals';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  return (
   <>
   <Provider store={store}>

   <StackNavigation/>
   <ModalPortal />
   </Provider>
  
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import { View, Text, SafeAreaView, Pressable } from 'react-native';
import styles from './styles';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const Detail = () => {

  const navigation = useNavigation();
  const { selectedImage } = useSelector((state: any) => state);

  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.title}> Image data </Text>
      <Text style={styles.text}> Author: { selectedImage?.author } </Text>
      <Text style={styles.text}> Width: { selectedImage?.width } </Text>
      <Text style={styles.text}> Height: { selectedImage?.height } </Text>
      <Text style={styles.text}> Url: { selectedImage?.url }</Text>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText} onPress={() => navigation.navigate('main')}> GO BACK! </Text>
      </Pressable>
    </SafeAreaView>
  )
};

export default Detail;
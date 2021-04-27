import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, Pressable, PixelRatio, Dimensions } from 'react-native';
import styles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { getImages, selectedImage, setPage } from '../../store/actions';
import { SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Item = ({ item, navigation, dispatch }: any) => {

  const ImageInformation = (item: any) => {
    dispatch(selectedImage(item));
    navigation.navigate('detail');
  }
  
  return (
    <TouchableOpacity style={{ width: '50%' }} onPress={() => ImageInformation(item)} >
      <Image source={{ uri: item?.download_url }} 
        style={{ 
          width:'100%', 
          height: PixelRatio.getPixelSizeForLayoutSize(90), 
          resizeMode: 'cover'}
        } 
        fadeDuration={300} />
    </TouchableOpacity>
  )
};

const loadImages = (dispatch: any, page: any) => {
  dispatch(setPage(page.page + 1));
}

const Main = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { images } = useSelector((state: any) => state);
  const { page } = useSelector((state: any) => state)

  useEffect(() => {
    if(!images.images) dispatch(getImages())
  }, [images.images])

  const renderItem = ({ item }: any) => (
    <Item
      item={item}
      navigation={navigation}
      dispatch={dispatch}
    />
  );

  return (
    <View style={styles.container} >
      <SafeAreaView style={styles.container}>
        {
          images?.images &&
          <FlatList
            horizontal={false}
            numColumns={2}
            data={images?.images}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            columnWrapperStyle={{ flexShrink: 1 }}
            extraData={images?.images}
            onEndReached={() => loadImages(dispatch, page)}
            onEndReachedThreshold={0.5}
          />
        }
      </SafeAreaView>
    </View>
  )
};

export default Main;
import {launchImageLibrary} from 'react-native-image-picker';
const ImagePikerFunc = async (setUri: (uri: any) => void) => {
  const result = await launchImageLibrary({
    mediaType: 'photo',
    selectionLimit: 1,
    includeBase64: true,
  });
  if (result.didCancel) {
    console.log('User cancelled image picker');
  } else if (result.error) {
    console.log('Image picker error', result.error);
  } else {
    const uri = result.assets[0].uri;
    setUri(uri);
  }
};

export default ImagePikerFunc;

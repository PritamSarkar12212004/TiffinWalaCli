import {launchImageLibrary} from 'react-native-image-picker';
import ImageCompresson from './ImageCompresson';
const SingleImgPicker = async ({setImage}: any) => {
  const result = await launchImageLibrary({
    mediaType: 'photo',
    includeBase64: false,
    selectionLimit: 1,
  });
  if (result.assets) {
    let compressImage = await ImageCompresson(result.assets[0].uri);
    setImage(compressImage);
  }
};
export default SingleImgPicker;

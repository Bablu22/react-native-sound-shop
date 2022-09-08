import * as Font from 'expo-font';

export default useFonts = async () =>
    await Font.loadAsync({
        "Manrope-Medium": require('../assets/fonts/Manrope-Medium.ttf'),
        "Manrope-Bold": require('../assets/fonts/Manrope-Bold.ttf'),
        "Manrope-Regular": require('../assets/fonts/Manrope-Regular.ttf'),
    });

import { Dimensions, Platform } from 'react-native';

// iPhoneX or iPhoneXS
const X_WIDTH = 375;
const X_HEIGHT = 812;

// iPhoneXR or iPhoneXS Max
const XR_WIDTH = 414;
const XR_HEIGHT = 896;

// screen
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export const isIphoneX = () => {
    return (
        Platform.OS === 'ios' &&
        ((SCREEN_HEIGHT === X_HEIGHT && SCREEN_WIDTH === X_WIDTH) ||
            (SCREEN_HEIGHT === X_WIDTH && SCREEN_WIDTH === X_HEIGHT) ||
            (SCREEN_HEIGHT === XR_HEIGHT && SCREEN_WIDTH === XR_WIDTH) ||
            (SCREEN_HEIGHT === XR_WIDTH && SCREEN_WIDTH === XR_HEIGHT))
    );
};

export const ifIphoneX = (iphoneXStyle, regularStyle) => {
    if (isIphoneX()) {
        return iphoneXStyle;
    }
    return regularStyle;
};

import { Dimensions,Platform,PixelRatio } from "react-native";

const {width:SCREEN_WIDTH}=Dimensions.get("window");
const scale=SCREEN_WIDTH/360;
export function pixelNormalize(size){
    const newsize=size * scale;
    if(Platform.OS==="android"){
        return Math.round(PixelRatio.roundToNearestPixel(newsize))-2
    }
}
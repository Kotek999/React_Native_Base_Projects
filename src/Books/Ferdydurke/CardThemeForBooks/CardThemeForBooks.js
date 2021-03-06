import * as React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { Box, View, AspectRatio } from "native-base";
import {
  DimensionsWidth,
  DimensionsHeight,
} from "../../../common/Dimensions/Dimensions";
import Copyright from "../../../common/CopyrightModule/Copyright";
import BackgroundScreen from "../../../common/BackgroundScreen/BackgroundScreen";
import BoxContainer from "./Box";
import CenterContainer from "./Center";
import StackContainer from "./Stack";
import isWEB from "../../../common/Resolutions/isWEB";

function CardThemeForBooks() {
  return (
    <BackgroundScreen
    // isScrollView = {true or false } - przywraca ogólny scroll
    >
      <View
        style={
          isWEB() && DimensionsHeight > 700 ? styles.margin : styles.container
        }
      >
        <Box alignItems="center">
          <BoxContainer>
            <Box>
              <CenterContainer />
              <AspectRatio
                w="100%"
                ratio={isWEB() && DimensionsHeight > 700 ? 0 : 16 / 9}
              >
                <ImageBackground
                  source={require("../../../assets/imageFD.jpg")}
                  alt="image"
                />
              </AspectRatio>
            </Box>
            <StackContainer />
            <Copyright />
          </BoxContainer>
        </Box>
      </View>
    </BackgroundScreen>
  );
}

export default CardThemeForBooks;

const styles = StyleSheet.create({
  container: {
    width: DimensionsWidth,
    height: DimensionsHeight,
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    marginTop: 25,
  },
  margin: {
    marginTop: 40,
  },
});

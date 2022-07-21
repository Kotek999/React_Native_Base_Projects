import * as React from "react";
import RightArrowIconEntypo from "react-native-vector-icons/Entypo";
import { pinkNavigateArrowColor } from "../Colors/colors";

const ArrowIcon = () => {
  return (
    <RightArrowIconEntypo
      name="paper-plane"
      size={24}
      color={pinkNavigateArrowColor}
    />
  );
};

export default ArrowIcon;
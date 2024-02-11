import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    height: 40,
    justifyContent: "center",
    width: 40,
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
});

export default styles;

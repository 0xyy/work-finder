import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    borderRadius: SIZES.medium,
    marginTop: SIZES.large,
    padding: SIZES.medium,
  },
  contentBox: {
    marginVertical: SIZES.small,
  },
  contextText: {
    color: COLORS.gray,
    fontFamily: FONT.regular,
    fontSize: SIZES.medium - 2,
    marginVertical: SIZES.small / 1.25,
  },
  headText: {
    color: COLORS.primary,
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
  },
});

export default styles;

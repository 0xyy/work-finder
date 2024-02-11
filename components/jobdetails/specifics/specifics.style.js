import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    borderRadius: SIZES.medium,
    marginTop: SIZES.large,
    padding: SIZES.medium,
  },
  pointDot: {
    backgroundColor: COLORS.gray2,
    borderRadius: 6,
    height: 6,
    marginTop: 6,
    width: 6,
  },
  pointText: {
    color: COLORS.gray,
    fontFamily: FONT.regular,
    fontSize: SIZES.medium - 2,
    marginLeft: SIZES.small,
  },
  pointWrapper: {
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: SIZES.small / 1.25,
  },
  pointsContainer: {
    marginVertical: SIZES.small,
  },
  title: {
    color: COLORS.primary,
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
  },
});

export default styles;

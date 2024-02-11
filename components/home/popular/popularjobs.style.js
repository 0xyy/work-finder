import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  cardsContainer: {
    marginTop: SIZES.medium,
  },
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerBtn: {
    color: COLORS.gray,
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
  },
  headerTitle: {
    color: COLORS.primary,
    fontFamily: FONT.medium,
    fontSize: SIZES.large,
  },
});

export default styles;

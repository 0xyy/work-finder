import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  footerContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    marginTop: SIZES.small,
  },
  loaderContainer: {
    marginTop: SIZES.medium,
  },
  noOfSearchedJobs: {
    color: COLORS.primary,
    fontFamily: FONT.medium,
    fontSize: SIZES.small,
    marginTop: 2,
  },
  paginationButton: {
    alignItems: "center",
    backgroundColor: COLORS.tertiary,
    borderRadius: 5,
    height: 30,
    justifyContent: "center",
    width: 30,
  },
  paginationImage: {
    height: "60%",
    tintColor: COLORS.white,
    width: "60%",
  },
  paginationText: {
    color: COLORS.primary,
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
  },
  paginationTextBox: {
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 2,
    height: 30,
    justifyContent: "center",
    width: 30,
  },
  searchTitle: {
    color: COLORS.primary,
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
  },
});

export default styles;

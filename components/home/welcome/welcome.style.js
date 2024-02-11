import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  searchBtn: {
    alignItems: "center",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    height: "100%",
    justifyContent: "center",
    width: 50,
  },
  searchBtnImage: {
    height: "50%",
    tintColor: COLORS.white,
    width: "50%",
  },
  searchContainer: {
    alignItems: "center",
    flexDirection: "row",
    height: 50,
    justifyContent: "center",
    marginTop: SIZES.large,
  },
  searchInput: {
    fontFamily: FONT.regular,
    height: "100%",
    paddingHorizontal: SIZES.medium,
    width: "100%",
  },
  searchWrapper: {
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    flex: 1,
    height: "100%",
    justifyContent: "center",
    marginRight: SIZES.small,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: FONT.medium,
    color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
  tabsContainer: {
    marginTop: SIZES.medium,
    width: "100%",
  },
  userName: {
    color: COLORS.secondary,
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
  },
  welcomeMessage: {
    color: COLORS.primary,
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    marginTop: 2,
  },
});

export default styles;

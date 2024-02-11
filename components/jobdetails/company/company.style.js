import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  companyInfoBox: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: SIZES.small / 2,
  },
  companyName: {
    color: COLORS.primary,
    fontFamily: FONT.medium,
    fontSize: SIZES.medium - 2,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: SIZES.medium,
  },
  jobTitle: {
    color: COLORS.primary,
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    textAlign: "center",
  },
  jobTitleBox: {
    marginTop: SIZES.small,
  },
  locationBox: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  locationImage: {
    height: 14,
    tintColor: COLORS.gray,
    width: 14,
  },
  locationName: {
    color: COLORS.gray,
    fontFamily: FONT.regular,
    fontSize: SIZES.medium - 2,
    marginLeft: 2,
  },
  logoBox: {
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: SIZES.large,
    height: 80,
    justifyContent: "center",
    width: 80,
  },
  logoImage: {
    height: "80%",
    width: "80%",
  },
});

export default styles;

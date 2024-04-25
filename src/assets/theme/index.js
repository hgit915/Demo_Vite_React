const theme = {
  // TODO: 切換主題
  color: {
    primaryDark: "#7B6651",
    primaryBase: "#BF9D7D",
    primary80: "#D0B79F",
    primary60: "#E1D1C2",
    primary40: "#F1EAE4",
    primaryTint: "#FAF7F5",
  },
  textColor: {
    // font
    backgroundColor: "#14F0A",
    blackDark: "#222222",
    black80: "#4B4B4B",
    black60: "#909090",
    black40: "#ECECEC",
    black10: "#F9F9F9",
    black0: "#FFFFFF",
    // success
    Success120: "#299f65",
    SuccessBase: "#52DD7E",
    Success20: "#BCFBBD",
    Success10: "#E8FEE7",
    // info
    Info120: "#1D66AC",
    InfoBase: "#3BADEF",
    Info20: "#B1EFFD",
    Info10: "#E6FBFE",
    // alert & error
    Error120: "#C22538",
    ErrorBase: "#DA3E51",
    Error20: "#F5CCD1",
    Error10: "#FDECEF",
  },
  mixins: {
    boxShadow: `
    transition: box-shadow 200ms ease;
    &:hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
    }`,
  },
};

export default theme;

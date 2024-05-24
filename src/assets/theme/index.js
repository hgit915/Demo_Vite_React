import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#BF9D7D', // 主色
      dark: '#7B6651', // hover
      contrastText: '#FFFFFF', // 字體
    },
    secondary: {
      main: '#FFFFFF', // 主色
      dark: '#7B6651',
      contrastText: '#BF9D7D',
    },
  },
  // TODO: 切換主題
  color: {
    primaryDark: '#7B6651',
    primaryBase: '#BF9D7D',
    primary80: '#D0B79F',
    primary60: '#E1D1C2',
    primary40: '#F1EAE4',
    primaryTint: '#FAF7F5',
  },
  textColor: {
    // font
    backgroundColor: '#14F0A',
    blackDark: '#222222',
    black80: '#4B4B4B',
    black60: '#909090',
    black40: '#ECECEC',
    black10: '#F9F9F9',
    white: '#FFFFFF',
    // success
    Success120: '#299f65',
    SuccessBase: '#52DD7E',
    Success20: '#BCFBBD',
    Success10: '#E8FEE7',
    // info
    Info120: '#1D66AC',
    InfoBase: '#3BADEF',
    Info20: '#B1EFFD',
    Info10: '#E6FBFE',
    // alert & error
    Error120: '#C22538',
    ErrorBase: '#DA3E51',
    Error20: '#F5CCD1',
    Error10: '#FDECEF',
  },
  mixins: {
    boxShadow: `
    transition: box-shadow 200ms ease;
    &:hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
    }`,
  },
  components: {
    RoomInfoTitle: `
      color: #222222;
      border-left: 5px solid #BF9D7D;
      padding-left: 15px;
    `,
    ContainerWrapper: `
      background-color: #FAF7F5;
      padding: 30px 0;
    
      .top,.bottom{
        margin-bottom: 30px;
        max-width: 1100px;
        margin: 0 auto;
      }
    
      .bottom { 
        display: flex;
        flex-direction: row;
        box-sizing: border-box;
        padding: 0px 60px;
        margin-top: 60px;
      }
    
      .top {
        font-size:32px;
        font-weight: bold;
      }
    `,
    RightBoxWrapper: `
      min-width: 300px;
      max-width: 350px;
      height: 100%;
      box-sizing: border-box;
      border-radius: 20px;
      background-color:white;
      padding: 30px;
      color: "#4B4B4B";
    `,
    LeftBoxWrapper: `
      margin-right: 70px;
      flex:1;  
    `,
  },
})

export default theme

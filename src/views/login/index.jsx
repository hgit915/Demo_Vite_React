import React, { memo } from "react";
import { LoginWrapper } from "./style";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  TextField,
  FormControlLabel,
  FormControl,
  InputLabel,
  InputAdornment,
  OutlinedInput,
  Checkbox,
  IconButton,
  Link,
} from "@mui/material";

const Login = memo(() => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <LoginWrapper>
      <div className="loginImg" />
      <div className="loginInfo">
        <p className="subTitle">
          享樂酒店，誠摯歡迎 <br />
          <span>立即開始旅程</span>
        </p>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          display="flex"
          flexDirection="column"
          gap={2}
          sx={{ m: "auto", width: "80%" }}
          justifyContent="center"
        >
          <TextField
            id="outlined-basic"
            label="email"
            variant="outlined"
            placeholder="abc@example.com"
          />
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <div className="hint">
            <FormControlLabel
              sx={{ width: "120px" }}
              control={<Checkbox />}
              label="記住帳號"
            />
            <Link href="/forgot">忘記密碼？</Link>
          </div>

          <Button variant="contained" size="large">
            會員登入
          </Button>

          <span className="regLink">
            沒有會員嗎?
            <Link href="/home">前往註冊</Link>
          </span>
        </Box>
      </div>
    </LoginWrapper>
  );
});

export default Login;

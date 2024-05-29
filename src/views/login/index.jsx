import react, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { AccountPageWrapper } from '@/components/AccountPage/style'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import OutlinedInput from '@mui/material/OutlinedInput'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import FormHelperText from '@mui/material/FormHelperText'
import { loginAction, setErrMsg } from '@/store/modules/user'

const Login = memo(() => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassWord] = useState('')
  const [emptyErr, setEmptyErr] = useState({ email: false, password: false })
  const { errMsg, isLogin } = useSelector(
    (state) => ({ isLogin: state.user.isLogin, errMsg: state.user.errMsg }),
    shallowEqual
  )
  const [errAllMsg, setAllMsg] = useState(errMsg)

  useEffect(() => {
    if (isLogin) {
      navigate('/home')
    }
  }, [isLogin])

  useEffect(() => {
    setAllMsg(errMsg)
  }, [errMsg])

  const handleSubmit = (e) => {
    e.preventDefault()
    // 清空狀態
    dispatch(setErrMsg(''))
    setEmptyErr((prev) => ({
      ...prev,
      email: false,
      password: false,
    }))

    // 驗證是否為空
    if (!email || !password) {
      setEmptyErr((prev) => ({
        ...prev,
        email: !email,
        password: !password,
      }))
      return
    }
    dispatch(loginAction({ email, password }))
  }
  return (
    !isLogin && (
      <AccountPageWrapper>
        <div className="sideImg" />
        <div className="formContent">
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
            sx={{ m: 'auto', width: '80%' }}
            justifyContent="center"
            onSubmit={handleSubmit}
          >
            <TextField
              id="outlined-basic"
              label="帳號"
              variant="outlined"
              placeholder="abc@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value.trim())}
              error={emptyErr.email || Boolean(errAllMsg)}
            />
            {emptyErr.email && <FormHelperText error>帳號不得為空</FormHelperText>}

            <FormControl variant="outlined" error={emptyErr.password || Boolean(errAllMsg)}>
              <InputLabel htmlFor="outlined-adornment-password">密碼</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword((prevShowPassword) => !prevShowPassword)}
                      onMouseDown={(e) => e.preventDefault()}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                value={password}
                onChange={(e) => {
                  setPassWord(e.target.value.trim())
                }}
              />
            </FormControl>
            {emptyErr.password && <FormHelperText error>密碼不得為空</FormHelperText>}
            <div className="hint">
              <FormControlLabel sx={{ width: '120px' }} control={<Checkbox defaultChecked={true} />} label="記住帳號" />
              <Link href="/forgot">忘記密碼？</Link>
            </div>

            {errAllMsg && (
              <FormHelperText className="allErrMsg" error>
                {errAllMsg}
              </FormHelperText>
            )}

            <Button variant="contained" size="large" type="submit" button="primary">
              會員登入
            </Button>
          </Box>
          <p className="regLink">
            沒有會員嗎?
            <Link href="#/sign">前往註冊</Link>
          </p>
        </div>
      </AccountPageWrapper>
    )
  )
})

export default Login

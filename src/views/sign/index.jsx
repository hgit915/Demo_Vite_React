import react, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AccountPageWrapper } from '@/components/AccountPage/style'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Box } from '@mui/material'
import { Button } from '@mui/material'
import { TextField } from '@mui/material'
import { FormControl } from '@mui/material'
import { InputLabel } from '@mui/material'
import { InputAdornment } from '@mui/material'
import { OutlinedInput } from '@mui/material'
import { IconButton } from '@mui/material'
import { Link } from '@mui/material'
import { FormHelperText } from '@mui/material'
import { Select } from '@mui/material'
import { MenuItem } from '@mui/material'

import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'

import 'dayjs/locale/zh-tw'
import dayjs from 'dayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

import { signUpAction, setErrMsg } from '@/store/modules/sign'
import { countryData, ZipCodeMap } from '@/utils/zipcodes'

const today = dayjs()
const Sign = memo(() => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // 進度條設定
  const [nextStep, setNextStep] = useState(0)
  const steps = ['輸入信箱及密碼', '填寫基本資料']

  // 欄位資料
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    checkPassWord: '',
    name: '',
    phone: '',
    birthday: '',
    country: '',
    city: '',
    address: '',
  })

  // 檢查欄位未填寫
  const initialState = {
    emailErr: false,
    pwdErr: false,
    checkPwdErr: '',
    nameErr: false,
    phoneErr: false,
    birthdayErr: false,
    countryErr: false,
    cityErr: false,
    addressErr: false,
  }
  const [errors, setErrors] = useState(initialState)
  const { allErrMsg, showFinal, isLogin } = useSelector((state) => ({
    allErrMsg: state.sign.errMsg,
    showFinal: state.sign.showFinal,
    isLogin: state.user.isLogin,
  }))

  useEffect(() => {
    if (isLogin) {
      navigate('/home')
    }
  }, [isLogin])

  // 顯示密碼否
  const [showPassword, setShowPassword] = useState('')
  const [showCheckPwd, setShowCheckPwd] = useState('')
  const [formatCity, setFormatCity] = useState('')

  const handleChangeCity = (countryName) => {
    const formatCity = ZipCodeMap.filter((value) => {
      return value.city === countryName
    }).map((value) => {
      return {
        zipcode: value.zipcode,
        detail: value.detail,
        city: value.county,
      }
    })
    setFormatCity(() => formatCity)
  }

  const handleFormChange = (fieldName, value) => {
    if (fieldName === 'birthday') value = new Date(value).toLocaleDateString()
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }))
  }
  const handleMouseDownPassword = (e) => e.preventDefault()
  const handleNextStep = (e) => {
    e.preventDefault()
    setErrors(initialState)
    if (
      !formData.email ||
      !formData.password ||
      !formData.checkPassWord ||
      formData.checkPassWord !== formData.password
    ) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        emailErr: !formData.email,
        pwdErr: !formData.password,
        checkPwdErr: !formData.checkPassWord
          ? '密碼不得為空'
          : formData.checkPassWord !== formData.password
          ? '密碼不一致，請重新確認'
          : '',
      }))
      return
    }
    setNextStep((nextStep) => nextStep + 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setErrMsg(''))
    setErrors(initialState)
    if (
      !formData.name ||
      !formData.phone ||
      !formData.birthday ||
      !formData.address ||
      !formData.country ||
      !formData.city
    ) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        nameErr: !formData.name,
        phoneErr: !formData.phone,
        birthdayErr: !formData.birthday,
        addressErr: !formData.address,
        countryErr: !formData.country,
        cityErr: !formData.city,
      }))
      return
    }

    dispatch(
      signUpAction({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        birthday: formData.birthday,
        address: {
          zipcode: formData.city,
          detail: formData.address,
        },
      })
    )
  }

  return (
    <AccountPageWrapper>
      <div className="sideImg" />
      <div className="formContent">
        <p className="subTitle">
          享樂酒店，誠摯歡迎 <br />
          <span>{steps.length === nextStep ? '註冊成功' : '立即註冊'}</span>
        </p>
        {steps.length !== nextStep && !showFinal && (
          <Box sx={{ width: '100%', marginBottom: '30px' }}>
            <Stepper activeStep={nextStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        )}
        {0 === nextStep && !showFinal && (
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
              id="signEmail"
              label="註冊信箱"
              variant="outlined"
              placeholder="abc@example.com"
              maxLength={50}
              autoComplete="username"
              value={formData.email}
              onChange={(e) => handleFormChange('email', e.target.value)}
              error={errors.emailErr}
              helperText={errors.emailErr ? '信箱不得為空' : ''}
            />

            <FormControl variant="outlined" error={Boolean(errors.pwdErr)}>
              <InputLabel htmlFor="signPwd">密碼</InputLabel>
              <OutlinedInput
                id="signPwd"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => {
                        setShowPassword((show) => !show)
                      }}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                maxLength={50}
                placeholder="請輸入8碼以上密碼"
                autoComplete="old-password"
                value={formData.password}
                onChange={(e) => handleFormChange('password', e.target.value)}
              />
              {errors.pwdErr && <FormHelperText error>密碼不得為空</FormHelperText>}
            </FormControl>

            <FormControl variant="outlined" error={Boolean(errors.checkPwdErr)}>
              <InputLabel htmlFor="checkPwd">確認密碼</InputLabel>
              <OutlinedInput
                id="checkPwd"
                type={showCheckPwd ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => {
                        setShowCheckPwd((show) => !show)
                      }}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showCheckPwd ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="確認密碼"
                maxLength={50}
                placeholder="請輸入8碼以上密碼"
                autoComplete="new-password"
                value={formData.checkPassWord}
                onChange={(e) => handleFormChange('checkPassWord', e.target.value)}
              />
              {errors.checkPwdErr && <FormHelperText error>{errors.checkPwdErr}</FormHelperText>}
            </FormControl>

            <Button
              variant="outlined"
              size="large"
              type="submit"
              button="primary"
              color="primary"
              onClick={handleNextStep}
            >
              下一步
            </Button>
          </Box>
        )}
        {/* step2 */}
        {1 === nextStep && !showFinal && (
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
              id="name"
              label="姓名"
              variant="outlined"
              placeholder="陳大明"
              maxLength={50}
              value={formData.name}
              onChange={(e) => handleFormChange('name', e.target.value)}
              error={errors.nameErr}
              helperText={errors.nameErr ? '姓名不得為空' : ''}
            />
            <TextField
              id="phone"
              label="手機"
              variant="outlined"
              placeholder="0912345678"
              maxLength={10}
              value={formData.phone}
              onChange={(e) => handleFormChange('phone', e.target.value)}
              error={errors.phoneErr}
              helperText={errors.phoneErr ? '手機不得為空' : ''}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="zh-tw">
              <DatePicker
                label="生日"
                format="YYYY/MM/DD"
                maxDate={today}
                minDate={dayjs('1911-01-01')}
                slotProps={{
                  textField: {
                    helperText: errors.birthdayErr ? '生日不得為空' : '',
                    error: errors.birthdayErr,
                  },
                }}
                onChange={(date) => handleFormChange('birthday', date)}
              />
            </LocalizationProvider>
            <Box display="flex" gap={2}>
              <FormControl sx={{ flex: 1 }} error={Boolean(errors.countryErr)}>
                <InputLabel id="country">行政區</InputLabel>
                <Select
                  labelId="country"
                  id="country"
                  value={formData.country}
                  onChange={(e) => {
                    handleFormChange('country', e.target.value)
                    handleChangeCity(e.target.value)
                  }}
                  autoWidth
                  label="行政區"
                >
                  {countryData.map((value, index) => (
                    <MenuItem key={index} value={value}>
                      {value}
                    </MenuItem>
                  ))}
                </Select>
                {errors.countryErr && <FormHelperText>行政區不得為空</FormHelperText>}
              </FormControl>
              <FormControl sx={{ flex: 1 }} error={Boolean(errors.cityErr)}>
                <InputLabel id="city">鄉鎮</InputLabel>
                <Select
                  labelId="city"
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleFormChange('city', e.target.value)}
                  autoWidth
                  label="鄉鎮"
                >
                  <MenuItem key="none" value="0" disabled>
                    請先選擇行政區
                  </MenuItem>
                  {formatCity &&
                    formatCity.map((value, index) => (
                      <MenuItem key={index} value={value.zipcode}>
                        {value.city}
                      </MenuItem>
                    ))}
                </Select>
                {errors.cityErr && <FormHelperText>鄉鎮不得為空</FormHelperText>}
              </FormControl>
            </Box>
            <TextField
              id="address"
              variant="outlined"
              placeholder="請輸入詳細地址"
              value={formData.address}
              onChange={(e) => handleFormChange('address', e.target.value.toString())}
              error={errors.addressErr}
              helperText={errors.addressErr ? '地址不得為空' : ''}
            />
            {allErrMsg && (
              <FormHelperText className="allErrMsg" error>
                請重新確認：{allErrMsg}
              </FormHelperText>
            )}
            <Box display="flex" justifyContent=" space-between">
              <Button
                variant="outlined"
                size="large"
                type="submit"
                button="primary"
                color="primary"
                onClick={(e) => {
                  e.preventDefault()
                  setNextStep((nextStep) => nextStep - 1)
                }}
              >
                上一步
              </Button>
              <Button variant="contained" size="large" type="submit" button="primary" color="primary">
                完成註冊
              </Button>
            </Box>
          </Box>
        )}

        {!showFinal && (
          <p className="regLink">
            已有會員嗎?
            <Link href="#/login">前往登入</Link>
          </p>
        )}

        {/* 註冊成功 */}
        {showFinal && (
          <Button
            sx={{
              display: 'block',
              m: '0 auto',
              width: '80%',
              lineHeight: '30px',
              textAlign: 'center',
            }}
            variant="contained"
            href="#/login"
          >
            前往登入
          </Button>
        )}
      </div>
    </AccountPageWrapper>
  )
})

export default Sign

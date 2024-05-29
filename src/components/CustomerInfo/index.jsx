import react, { memo, useImperativeHandle, forwardRef, useState } from 'react'

import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'

import { countryData, ZipCodeMap } from '@/utils/zipcodes'

const CustomerInfo = memo(
  forwardRef((props, ref) => {
    // 給予父組件使用
    useImperativeHandle(ref, () => ({
      checkForm,
      setFormValue,
    }))
    const [formatCity, setFormatCity] = useState('')

    // 輸入欄位初始化
    const initValue = {
      email: '',
      name: '',
      phone: '',
      country: '',
      city: '',
      address: '',
    }
    const [formData, setFormData] = useState(initValue)

    // 錯誤訊息初始化
    const initialState = {
      emailErr: false,
      nameErr: false,
      phoneErr: false,
      countryErr: false,
      cityErr: false,
      addressErr: false,
    }
    const [errors, setErrors] = useState(initialState)

    // 用行政區篩選出鄉鎮
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

    // 輸入欄位變化塞值
    const handleFormChange = (fieldName, value) => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [fieldName]: value,
      }))
    }

    // [給予外部組件使用]驗證欄位
    const checkForm = () => {
      let returnObj = {
        userInfo: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: {
            zipcode: formData.city,
            detail: formData.address,
          },
        },
        isError: false,
      }
      setErrors(initialState)
      if (
        !formData.name ||
        !formData.email ||
        !formData.phone ||
        !formData.address ||
        !formData.country ||
        !formData.city
      ) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          nameErr: !formData.name,
          emailErr: !formData.email,
          phoneErr: !formData.phone,
          addressErr: !formData.address,
          countryErr: !formData.country,
          cityErr: !formData.city,
        }))
        returnObj.isError = true
      }
      return returnObj
    }

    // [給予外部組件使用] 塞值至相對應欄位
    const setFormValue = (fieldNames) => {
      if (!fieldNames) {
        handleChangeCity('')
        setFormData(initValue)
        return
      }
      // 帶入鄉鎮的 options
      handleChangeCity(fieldNames.country)
      setFormData((prevFormData) => ({
        ...prevFormData,
        ...fieldNames,
      }))
    }

    return (
      <>
        <Box component="form" noValidate autoComplete="off" display="flex" flexDirection="column" gap={2}>
          <TextField
            id="name"
            label="姓名"
            variant="outlined"
            placeholder="請輸入姓名"
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
            placeholder="請輸入手機"
            maxLength={10}
            value={formData.phone}
            onChange={(e) => handleFormChange('phone', e.target.value)}
            error={errors.phoneErr}
            helperText={errors.phoneErr ? '手機不得為空' : ''}
          />
          <TextField
            id="signEmail"
            label="電子信箱"
            variant="outlined"
            placeholder="abc@example.com"
            maxLength={50}
            autoComplete="username"
            value={formData.email}
            onChange={(e) => handleFormChange('email', e.target.value)}
            error={errors.emailErr}
            helperText={errors.emailErr ? '信箱不得為空' : ''}
          />

          <Box display="flex" gap={2}>
            <FormControl sx={{ flex: 1 }} error={Boolean(errors.countryErr)}>
              <InputLabel id="country">地址</InputLabel>
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
        </Box>
      </>
    )
  })
)

export default CustomerInfo

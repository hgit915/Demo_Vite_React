/**
 * 加上 comma、幣別
 * @param {*} price
 * @param {*} showCurrency
 * @returns
 */

export const toCommas = (price = 0, showCurrency) => {
  const formatOptions = {
    maximumFractionDigits: 0, // 將小數部分截斷為 0
  }
  if (showCurrency) {
    formatOptions.style = 'currency'
    formatOptions.currency = 'TWD'
  }
  const formattedString = price.toLocaleString('zh-TW', formatOptions)
  return formattedString
}

/**
 * 解析 URL 參數
 * @param {*}
 * @returns
 */
export const parseParams = (paramsString) => {
  const paramsArray = paramsString.split('&')
  const paramsObj = {}
  paramsArray.forEach((param) => {
    const [key, value] = param.split('=')
    paramsObj[key] = value
  })
  return paramsObj
}

/**
 * 轉換星期
 * @param formatDate : 2024-05-21
 * @returns string: (二)
 */
export const dayOfWeek = (formatDate) => {
  var day_list = ['日', '一', '二', '三', '四', '五', '六']

  var date = new Date(formatDate)
  var day = date.getDay() // or "new Date().getDay()";

  return `(${day_list[day]})`
}

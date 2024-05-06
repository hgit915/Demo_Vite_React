/**
 * 加上 comma、幣別
 * @param {*} price
 * @param {*} showCurrency
 * @returns
 */

export const toCommas = (price, showCurrency) => {
  const formatOptions = {
    maximumFractionDigits: 0, // 將小數部分截斷為 0
  };
  if (showCurrency) {
    formatOptions.style = "currency";
    formatOptions.currency = "TWD";
  }
  const formattedString = price.toLocaleString("zh-TW", formatOptions);
  return formattedString;
};

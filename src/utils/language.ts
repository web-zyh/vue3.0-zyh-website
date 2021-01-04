/**
 * 获取浏览器语言
 */
export function getBowserLanguage () {
    return navigator.languages
      ? navigator.languages[0]
      : (navigator.language);
}
  

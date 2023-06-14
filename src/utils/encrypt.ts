import CryptoJS from "crypto-js";

// AES 加密方法
// word是加密内容，keyStr是秘钥
// ECB：加密算法，padding：对齐方式
// ciphertext：16进制加密，不加此方法就是Base64加密
export function encrypt(word: string, keyStr: string) {
	// console.log(1,word)
	// console.log(2,keyStr)
  var key = CryptoJS.enc.Utf8.parse(keyStr);
  var srcs = CryptoJS.enc.Utf8.parse(word);
	// console.log(3,key)
	// console.log(4,srcs)
  var encrypted = CryptoJS.AES.encrypt(srcs, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
	// console.log(5,encrypted)
	// console.log(5,encrypted.toString())
  return encrypted.toString();
}

//解密
export function decrypt(word: string, keyStr: string) {
  var key = CryptoJS.enc.Utf8.parse(keyStr);
  let base64 = CryptoJS.enc.Base64.parse(word);
  let src = CryptoJS.enc.Base64.stringify(base64);
  var decrypt = CryptoJS.AES.decrypt(src, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return decrypt.toString(CryptoJS.enc.Utf8);
}

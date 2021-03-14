module.exports = function check(str, bracketsConfig) {
  let a=str.length;
  let b=bracketsConfig.length;
  if (a%2==1) {//тк скобок должно быть по 2
    return false;
  }
  var NewArr = str.split('');//разбиваем строку на массив, чтобы использовать функции массива
    for (let i = 0; i < a; i++) {
      for (let j = 0; j < a; j++) {
        for (let k = 0; k < b; k++) {
        if (NewArr[j] == bracketsConfig[k][0] && NewArr[j + 1] == bracketsConfig[k][1])//[][0]-открывающая скобка [][1]-закрывающая скобка
        NewArr.splice(j, 2)//если пара нашлась, удаляем ее
      }
    }
  }
  return (NewArr.length==0)?true:false
}

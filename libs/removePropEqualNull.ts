export const RemovePropEqualNull = (object:any):any => {
  const copyObject = Object.assign({},object);
  for (let prop in copyObject) {
    if (copyObject[prop] === null) {
      delete copyObject[prop];
    }
  }
  return copyObject;
}

export const ReplacePropEqualNull = (object:any, symbol: any):any => {
  const copyObject = Object.assign({},object);
  for (let prop in copyObject) {
    if (copyObject[prop] === null) {
      copyObject[prop] = symbol
    }
  }
  return copyObject;
}

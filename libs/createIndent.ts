//xs
// sm
// md
// lg

/**
 * @param aliases
 * @return
 * @desc
 * */
export const createIndent = (aliases: string[]) => (props: any) => {
  let result: any = {};
  const mediaQueryMap: string[] = ['', 'sm-', 'md-', 'lg-'];

  aliases.forEach((alias) => {
    if (props[alias]) {
      if (Array.isArray(props[alias])) {
        mediaQueryMap.forEach((media: string, index: number) => {
          if (index < props[alias].length) {
            result[`${alias}-${media}${props[alias][index]}`] = true;
          }
        })
      } else {
        result = {
          [`${alias}-${props[alias]}`]: true,
          ...result,
        }
      }
    }
  });
  return result;

};


export const createIndentMargin = createIndent(['mt', 'mr', 'mb', 'ml']);
export const createIndentPadding = createIndent(['pt', 'pr', 'pb', 'pl']);

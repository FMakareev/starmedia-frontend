import memo from "fast-memoize";


export const memoSpliceArray = memo((formats: any[], start: number, deleteCount: number) => {
  return Object.assign([],formats).splice(start, deleteCount);
});


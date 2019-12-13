import * as React from "react";


export const useAccordion = (initialState: number[] = []) => {
  const [isOpen, setOpen] = React.useState<number[]>(initialState);

  const toggle = (index: number) => {
    if (isOpen.includes(index)) {
      setOpen(isOpen.filter((item: number) => index != item))
    } else {
      setOpen([...isOpen, index])
    }
  };
  return {isOpen, toggle}
}

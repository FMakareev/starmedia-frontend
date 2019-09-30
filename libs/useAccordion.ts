import * as React from "react";


export const useAccordion = () => {
  const [isOpen, setOpen] = React.useState<number[]>([]);

  const toggle = (index: number) => {
    if (isOpen.includes(index)) {
      setOpen(isOpen.filter((item: number) => index != item))
    } else {
      setOpen([...isOpen, index])
    }
  };
  return {isOpen, toggle}
}

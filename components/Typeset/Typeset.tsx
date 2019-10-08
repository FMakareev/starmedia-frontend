import * as React from 'react';
import ReactHtmlParser from "react-html-parser";

interface ITypesetProps {
  content: string;
  [prop: string]: any
}

const Typeset: React.FC<ITypesetProps> = (
  {
    content,
  }
) => {
  return (
    <div className="typeset">
      {
        ReactHtmlParser(content)
      }
    </div>
  );
};

export default Typeset;

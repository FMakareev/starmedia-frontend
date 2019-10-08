import * as React from 'react';

interface ICustomCursorProps {
  [prop: string]: any
}

const CustomCursor: React.FC<ICustomCursorProps> = ({children}) => {

  const CursorRef = React.useRef(null);
  const ContainerRef = React.useRef(null);
  React.useEffect(() => {
    if(typeof window !== undefined){
      // @ts-ignore
      window.customCursor = {
        clientX: 0,
        clientY: 0,
      }
    }
    // @ts-ignore
    if (ContainerRef && ContainerRef.current) {
      // @ts-ignore
      ContainerRef.current.addEventListener('touchmove', (e: any) => {
        if (e) {
          // @ts-ignore
          window.customCursor.clientX = e.clientX;
          // @ts-ignore
          window.customCursor.clientY = e.clientY;
        }
      }, true);
      // @ts-ignore
      ContainerRef.current.addEventListener('mousemove', (e: any) => {
        if (e) {
          // @ts-ignore
          window.customCursor.clientX = e.clientX;
          // @ts-ignore
          window.customCursor.clientY = e.clientY;
        }
      }, true);
      // @ts-ignore
      ContainerRef.current.ondragstart = function () {
        return false;
      };

    }

    const render = () => {
      if (CursorRef && CursorRef.current) {
        // @ts-ignore
        CursorRef.current.style.transform = `translate(${window.customCursor.clientX - 32}px, ${window.customCursor.clientY - 32}px)`;
      }
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);

  }, []);


  return <div
    ref={ContainerRef}
    className={'cursor_container'}
  >
    {children}
    <div
      ref={CursorRef}
      className={'cursor'}
    >
      <img src="/static/images/drag_cursor.svg" alt=""/>
    </div>
  </div>
};

export default CustomCursor;

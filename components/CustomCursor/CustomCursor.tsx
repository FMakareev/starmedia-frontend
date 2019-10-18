import * as React from 'react';
import classNames from 'classnames';

interface ICustomCursorProps {
  [prop: string]: any
}

const CustomCursor: React.FC<ICustomCursorProps> = (
  {
    children,
    hiddenCursor = false,
    // @ts-ignore
    setHiddenCursor,
  }
) => {

  const CursorRef = React.useRef(null);
  const ContainerRef = React.useRef(null);
  React.useEffect(() => {
    if (typeof window !== undefined) {
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
        console.log(e);
        if (e) {

          e.path.find((className: any) => {
            // setHiddenCursor(false)
            if (className.className
              && typeof className.className === 'string'
              && className.className.indexOf('watch-online') > 0) {
              if (setHiddenCursor && !setHiddenCursor) {
                setHiddenCursor(true)
              }
              console.log(className.className);
            } else if (setHiddenCursor && setHiddenCursor) {
              setHiddenCursor(false)

            }
            // watch-online
          })
          // @ts-ignore
          window.customCursor.clientX = e.clientX;
          // @ts-ignore
          window.customCursor.clientY = e.clientY;
        }
      }, false);
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
    className={classNames('cursor_container', {
      'cursor_container-hidden': hiddenCursor,
    })}
  >
    {children}
    {
      !hiddenCursor && <div
				ref={CursorRef}
				className={'cursor'}
			>
				<img src="/static/images/drag_cursor.svg" alt=""/>
			</div>
    }

  </div>
};

export default CustomCursor;

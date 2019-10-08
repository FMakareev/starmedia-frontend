import * as React from 'react';
import {ProjectsMock} from "../../../mock";
import Col from "../../../components/Col/Col";
import SectionMainTitle from "./SectionMainTitle";
import SectionMainWatchOnline from "./SectionMainWatchOnline";
import {Project} from "../../../types/types";
import Link from "next/link";
// @ts-ignore
import Slider from "react-slick";
import ProjectCard from "../../../components/ProjectCard/ProjectCard";

interface ISectionMainBottomProps {
    [prop:string]: any
}
const settings = {
  className: "slider variable-width",
  dots: false,
  infinite: false,
  arrows: false,
  centerMode: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true
};
const SectionMainBottom: React.FC<ISectionMainBottomProps> = (
  {
    currentSlide,
    setNewSlideIndex,
    title,
    animatedText,
  }
) => {
  const [disabled, setDisabledEvent] = React.useState(false);

  const ref = React.useRef(null);

  React.useEffect(() => {

    if (typeof window !== undefined) {
      let isDown: boolean = false;
      let isMoved: boolean = false;
      // @ts-ignore
      ref.current.addEventListener('mousemove', () => {
        if (isDown) {
          setDisabledEvent(true);
          isMoved = true;
        }
      });
      // @ts-ignore
      ref.current.addEventListener('mousedown', () => {
        isDown = true;
      });
      // @ts-ignore
      ref.current.addEventListener('mouseup', (e) => {
        if (isMoved && isDown || isDown) {
          setDisabledEvent(false);
          isDown = false;
          isMoved = false;
        }
      });
    }

  }, []);

  return (
       <div ref={ref} className="section-main_bottom">

         <Slider
           initialSlide={currentSlide}
           afterChange={(index: any) => {
             if (index < ProjectsMock.length) {
               setNewSlideIndex(index);
             }
           }}
           {...settings}
         >
           <Col
             key={0}
             className={'section-main_bottom-left'}>
             <SectionMainTitle
               title={title}
               animatedText={animatedText}
             />
             <SectionMainWatchOnline/>
           </Col>
           {
             ProjectsMock.map((item: Project, index: number) =>
               <Col
                 key={index+1}
                 className={'section-main_slide-project'}
               >
                 <Link href={`/project/slug`}>
                   <ProjectCard
                     disabled={disabled}
                     href={`/project/slug`} key={index} withInfo={false} {...item}/>
                 </Link>
               </Col>
             )
           }
         </Slider>

       </div>
       );
};

export default SectionMainBottom;

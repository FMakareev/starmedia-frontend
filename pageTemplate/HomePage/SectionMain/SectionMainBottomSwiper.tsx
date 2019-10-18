import * as React from 'react';
import Col from "../../../components/Col/Col";
import SectionMainTitle from "./SectionMainTitle";
import SectionMainWatchOnline from "./SectionMainWatchOnline";
import {Project} from "../../../types/projectTypes";
import Link from "next/link";
// @ts-ignore
import Slider from "react-slick";
import ProjectCard from "../../../components/ProjectCard/ProjectCard";
import ReactIdSwiper, {SwiperInstance} from 'react-id-swiper';

interface ISectionMainBottomProps {
  [prop: string]: any
}

const params = ({onSlideChange}: any) => ({
  slidesPerView: 'auto',
  freeMode: false,
  centeredSlides: false,
  freeModeMomentum: true,
  spaceBetween: 0,
  getSwiper: (swiper: SwiperInstance) => {
    swiper && swiper.on('slideChange', () => {
      onSlideChange && onSlideChange(swiper.activeIndex)
    });

    swiper && swiper.on('touchMove', (event: any) => {
      // @ts-ignore
      window.customCursor.clientX = event.clientX;
      // @ts-ignore
      window.customCursor.clientY = event.clientY;
    })
  }
});

const SectionMainBottom: React.FC<ISectionMainBottomProps> = (
  {
    title,
    animatedText,
    setNewSlideIndex,
    projectList,
    setHiddenCursor,
  }
) => {
  const [disabled] = React.useState(false);

  const swiperConfig: any = params({
    onSlideChange: (index: any) => {
      if (projectList && index < projectList.length) {
        setNewSlideIndex(index);
      }
    }
  });

  React.useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth > -768) {
        swiperConfig.slidesOffsetAfter = window.innerWidth - 780;
        window.addEventListener('resize', () => {
          swiperConfig.slidesOffsetAfter = window.innerWidth - 780;
        });
      }
    }
  }, []);
  return (
    <div className="section-main_bottom">
      <ReactIdSwiper
        // @ts-ignore
        slidesOffsetAfter={780}
        {...swiperConfig}
      >
        {
          projectList
          && [undefined, ...projectList].map((item: Project, index: number) => {
            if (index === 0) {
              return ( <Col
                key={0}
                className={'section-main_bottom-left'}
                pb={20}
              >
                <SectionMainTitle
                  title={title}
                  animatedText={animatedText}
                />
                <SectionMainWatchOnline
                  onMouseEnter={() => {
                    console.log('onMouseEnter', setHiddenCursor);
                    setHiddenCursor(true)
                  }}
                  onMouseLeave={() => {
                    console.log('onMouseLeave', setHiddenCursor);
                    setHiddenCursor(false)
                  }}
                />
              </Col>)
            }

            return (<Col
              key={index + 1}
              className={'section-main_slide-project'}
            >
              <Link href={`/project/${item.slug}`}>
                <ProjectCard
                  disabled={disabled}
                  href={`/project/${item.slug}`} key={index} withInfo={false} {...item}/>
              </Link>
            </Col>)
          })
        }
      </ReactIdSwiper>

    </div>
  );
};

export default SectionMainBottom;

import {
  communicationArray,
  etcSkillArray,
  frontendSkillArray,
  versionControlSkillArray,
} from '@/model/Skill';
import { useDeviceSelector } from '@/store/device/Selector';
import { usePagePositionSelector } from '@/store/pagePosition/Selector';
import { HideScrollbarStyle } from '@/style/common.style';
import { mobileMedia, tabletMedia } from '@/style/deviceWidth';
import { ReactElement, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled, { css } from 'styled-components';
import Tab from '../../common/Tab';
import SkillGraph from './SkillGraph';

const Skill = (): ReactElement => {
  const pagePosition = usePagePositionSelector();
  const { isMobile } = useDeviceSelector();
  const skillRef = useRef<HTMLDivElement | null>(null);
  const [progressStart, setProgressStart] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    if (pagePosition === 'skill' && skillRef.current) {
      skillRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [pagePosition]);

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true, // 기본 : false
  });

  useEffect(() => {
    if (inView) setProgressStart(true);
  }, [inView]);

  const tabs = ['FRONTEND', 'VERSION-CONTROL', 'COMMUNICATION', 'ETC'];
  const skillArray = [
    frontendSkillArray,
    versionControlSkillArray,
    communicationArray,
    etcSkillArray,
  ];

  return (
    <DIV_SkillWrap className="section " ref={skillRef}>
      <div className="section-title" ref={ref}>
        기술스택
      </div>
      <DIV_ContentSection className={isMobile ? '' : 'content-max'}>
        <Tab
          styles={[
            isMobile
              ? css`
                  width: 100%;
                  height: 100%;
                  flex-wrap: nowrap;
                  overflow-x: auto;
                  ${HideScrollbarStyle}
                `
              : css``,
          ]}
          items={tabs}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <div className={`graph-part ${isMobile ? 'content-max' : ''}`}>
          {skillArray[activeIndex].map((skill, idx) => (
            <SkillGraph
              start={progressStart}
              key={idx}
              skill={skill}
              idx={idx}
            />
          ))}
        </div>
      </DIV_ContentSection>
    </DIV_SkillWrap>
  );
};

const DIV_SkillWrap = styled.div``;
const DIV_ContentSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;

  .graph-part {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 46%);
    justify-content: center;
    grid-row-gap: 4rem;
    grid-column-gap: 8%;
  }
  ${tabletMedia} {
    .graph-part {
      grid-template-columns: repeat(2, 46%);
      grid-column-gap: 8%;
    }
  }
  ${mobileMedia} {
    .tabs {
      padding: 0 40px 2px;
    }
    .graph-part {
      grid-template-columns: repeat(1, 100%);
      grid-row-gap: 4rem;
    }
  }
`;
export default Skill;

import {
  communicationArray,
  etcSkillArray,
  frontSkillArray,
  versionControlSkillArray,
} from '@/model/Skill';
import { ReactElement, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import Tab from './common/Tab';
import SkillGraph from './part/SkillGraph';

const Skill = (): ReactElement => {
  const [progressStart, setProgressStart] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true, // 기본 : false
  });

  useEffect(() => {
    if (inView) setProgressStart(true);
  }, [inView]);

  const tabs = ['FRONTEND', 'VERSION-CONTROL', 'COMMUNICATION', 'ETC'];
  const skillArray = [
    frontSkillArray,
    versionControlSkillArray,
    communicationArray,
    etcSkillArray,
  ];

  return (
    <a id="skill">
      <DIV_Skill className="section content-max" ref={ref}>
        <div className="section-title">기술스택</div>
        <DIV_GraphPart>
          <Tab
            items={tabs}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
          <div className="graph-part">
            {skillArray[activeIndex].map((skill, idx) => (
              <SkillGraph
                start={progressStart}
                key={idx}
                skill={skill}
                idx={idx}
              />
            ))}
          </div>
        </DIV_GraphPart>
      </DIV_Skill>
    </a>
  );
};

const DIV_Skill = styled.div``;
const DIV_GraphPart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 50px;

  .graph-part {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 46%);

    justify-content: center;

    align-items: center;

    grid-row-gap: 4rem;
    grid-column-gap: 6rem;
  }
`;
export default Skill;

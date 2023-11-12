import { skillArray } from '@/model/Skill';
import { ReactElement, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import SkillGraph from './part/SkillGraph';

const Skill = (): ReactElement => {
  const [progressStart, setProgressStart] = useState<boolean>(false);

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true, // 기본 : false
  });

  useEffect(() => {
    // 예를 들어
    if (inView) setProgressStart(true);
  }, [inView]);

  return (
    <DIV_Skill className="section content-max" ref={ref}>
      <div className="section-title">기술스택</div>
      <DIV_GraphPart>
        <div className="graph-part">
          {skillArray.map((skill, idx) => (
            <SkillGraph start={progressStart} key={idx} skill={skill} />
          ))}
        </div>
      </DIV_GraphPart>
    </DIV_Skill>
  );
};

const DIV_Skill = styled.div``;
const DIV_GraphPart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  .graph-part {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 46%);
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;

    grid-row-gap: 4rem;
    grid-column-gap: 6rem;
  }
`;
export default Skill;

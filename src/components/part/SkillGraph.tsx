/* eslint-disable @typescript-eslint/no-explicit-any */
import { Theme } from '@/style/Theme';
import { ReactElement } from 'react';
import styled from 'styled-components';

interface SkillType {
  name: string;
  icon: string;
  level: number;
  text: string;
}
interface SkillGraphProps {
  skill: SkillType;
  idx: number;
  start: boolean;
}
const SkillGraph = (props: SkillGraphProps): ReactElement => {
  return (
    <DIV_SkillGraph idx={props.idx + 1} level={props.skill.level}>
      <img src={props.skill.icon} />
      <div className="bar-part">
        <div className="skill-name">{props.skill.name}</div>
        <div className="graph">
          <div
            className={`progress ${props.start ? 'active' : ''} ${
              props.skill.name
            }`}
          ></div>
        </div>
        <div className="text">{props.skill.text}</div>
      </div>
    </DIV_SkillGraph>
  );
};

interface StyledSkillGraphProps {
  idx: number;
  level: number;
}

const DIV_SkillGraph = styled.div<StyledSkillGraphProps>`
  display: flex;
  gap: 20px;
  img {
    width: 60px;
    height: fit-content;
  }
  .bar-part {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 15px;
    .skill-name {
      ${Theme.Typography.subtitle1};
      ${Theme.Typography.extraBold};
      ${Theme.Typography.fontHeading};
    }
    .text {
      width: 100%;
      ${Theme.Typography.body1};
      ${Theme.Typography.regular};

      white-space: pre-line;
      word-break: keep-all;
    }
    .graph {
      background: #e2e8f0;
      border-radius: 6px;
      position: relative;
      width: 100%;
      height: 12px;
      overflow: hidden;
      .progress {
        background: #495fef;
        position: absolute;
        left: 0px;
        top: 0px;
        bottom: 0px;
        width: 0;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

        &.active {
          background: #495fef;
          position: absolute;
          left: 0px;
          top: 0px;
          bottom: 0px;
          transition-delay: 0s;
          transition-property: width;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: ${({ idx }) => `${idx * 0.25}s`};
          width: ${({ level }) => `${level}%`};
        }
      }
    }
  }
`;

export default SkillGraph;

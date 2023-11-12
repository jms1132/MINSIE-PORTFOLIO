/* eslint-disable @typescript-eslint/no-explicit-any */
import { Theme } from '@/style/Theme';
import { ReactElement } from 'react';
import styled from 'styled-components';

interface SkillType {
  name: string;
  icon: string;
  text: string;
}
interface SkillGraphProps {
  skill: SkillType;
  start: boolean;
}
const SkillGraph = (props: SkillGraphProps): ReactElement => {
  const random = (length = 8) => {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let str = '';

    for (let i = 0; i < length; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return str;
  };

  return (
    <DIV_SkillGraph>
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
        <div className="text">{random(100)}</div>
      </div>
    </DIV_SkillGraph>
  );
};

const DIV_SkillGraph = styled.div`
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
      ${Theme.Typography.bold};
    }
    .text {
      width: 100%;
      white-space: pre-line;
      word-break: break-all;
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
        transition: width 0.75s;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        &.active {
          background: #495fef;
          position: absolute;
          left: 0px;
          top: 0px;
          bottom: 0px;
          transition-delay: 0s;
          transition-property: width;
          transition-timing-function: var(
            --chakra-transition-easing-ease-in-out
          );
          &.HTML {
            width: 90%;
            transition-duration: 0.25s;
          }
          &.CSS {
            width: 90%;
            transition-duration: 0.5s;
          }
          &.JAVASCRIPT {
            width: 80%;
            transition-duration: 0.75s;
          }
          &.JQUERY {
            width: 70%;
            transition-duration: 0.75s;
          }
          &.REACT {
            width: 80%;
            transition-duration: 1s;
          }
          &.REDUX {
            width: 60%;
            transition-duration: 1.25s;
          }
          &.TYPESCRIPT {
            width: 60%;
            transition-duration: 1.5s;
          }
          &.STORYBOOK {
            width: 50%;
            transition-duration: 1.75s;
          }
          &.GIT {
            width: 80%;
            transition-duration: 2s;
          }
          &.GITHUB {
            width: 80%;
            transition-duration: 2.25s;
          }
          &.BITBUCKET {
            width: 80%;
            transition-duration: 2.5s;
          }
          &.JIRA {
            width: 80%;
            transition-duration: 2.75s;
          }
          &.ZEPLIN {
            width: 50%;
            transition-duration: 3s;
          }
          &.FIGMA {
            width: 70%;
            transition-duration: 3.25s;
          }
          &.POSTMAN {
            width: 50%;
            transition-duration: 3.5s;
          }
        }
      }
    }
  }
`;

export default SkillGraph;

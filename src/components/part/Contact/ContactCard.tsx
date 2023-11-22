import { Theme } from '@/style/Theme';
import { ReactElement } from 'react';
import styled from 'styled-components';

interface Info {
  icon: string;
  name: string;
  content: string;
}

interface ContactProps {
  info: Info;
}

const ContactCard = (props: ContactProps): ReactElement => {
  return (
    <DIV_ContactCard>
      <img className="icon" src={props.info.icon}></img>
      <div className="info">
        <div className="title">{props.info.name}</div>
        <div className="content">{props.info.content}</div>
      </div>
    </DIV_ContactCard>
  );
};

const DIV_ContactCard = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  gap: 8%;
  padding: 40px 8%;
  box-shadow: rgba(149, 160, 165, 0.2) 0px 8px 24px;
  border-radius: 8px;

  transition-property: transform, opacity, box-shadow;

  transition-duration: 0.25s;
  transition-timing-function: ease-in-out;
  cursor: default;
  @media (hover: hover) {
    &:hover {
      transform: translateY(-10px);
      box-shadow: 0px 8px 24px #fe9a2e;
      /* box-shadow: 0px 8px 24px #626567; */
    }
  }
  .icon {
    width: 43px;
    height: 43px;
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .title {
      font-size: 18px;
    }
    .content {
      ${Theme.Typography.subtitle1};
    }
  }
`;
export default ContactCard;

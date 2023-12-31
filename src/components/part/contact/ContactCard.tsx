import Link from '@/components/common/Link';
import { CopyButton } from '@/components/common/button';
import { Theme } from '@/style/Theme';
import { HoverDefaultstyle } from '@/style/common.style';
import { mobileMedia } from '@/style/deviceWidth';
import { MouseEventHandler, ReactElement } from 'react';
import styled from 'styled-components';

interface Info {
  icon: string;
  name: string;
  content: string;
}

interface ContactProps {
  info: Info;
  handleClickCopy: MouseEventHandler;
}

const ContactCard = (props: ContactProps): ReactElement => {
  return (
    <DIV_ContactCard>
      <img className="icon" src={props.info.icon}></img>
      <div className="info">
        <div className="title">{props.info.name}</div>
        <div className="content">
          {props.info.name === 'PHONE' ? (
            <Link
              href={props.info.name === 'PHONE' ? `tel:010-3914-6562` : `#`}
            >
              {props.info.content}
              <img
                className="ico-call"
                src="./images/common/icon-call.svg"
                alt=""
              />
            </Link>
          ) : (
            <>
              {props.info.content}
              {props.info.name === 'EMAIL' && (
                <CopyButton value={props.info.content}>
                  <img
                    onClick={props.handleClickCopy}
                    className="ico-copy"
                    src="./images/common/icon-copy.svg"
                    alt=""
                  />
                </CopyButton>
              )}
            </>
          )}
        </div>
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

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 8px 24px ${Theme.Color.primary};
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
      font-size: 20px;
    }
    .content {
      ${Theme.Typography.subtitle1};
      display: flex;
      align-items: center;
      gap: 10px;
      a {
        display: flex;
        align-items: end;
        gap: 10px;
        .ico-call {
          width: 32px;
          ${HoverDefaultstyle}
        }
      }
      .ico-copy {
        width: 24px;
        cursor: pointer;
        ${HoverDefaultstyle}
      }
    }
  }

  ${mobileMedia} {
    padding: 10% 8%;
    .icon {
      width: 10%;
    }
    .info {
      .title {
        font-size: 4.5vw;
      }
      .content {
        font-size: 4.5vw;
        word-break: break-all;
      }
    }
  }
`;
export default ContactCard;

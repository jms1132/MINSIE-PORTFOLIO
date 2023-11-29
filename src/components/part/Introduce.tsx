import { usePagePositionSelector } from '@/store/pagePosition/Selector';
import { Theme } from '@/style/Theme';
import { fadeInUp } from '@/style/common.style';
import { mobileMedia, tabletMedia } from '@/style/deviceWidth';
import { ReactElement, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { styled } from 'styled-components';

const Introduce = (): ReactElement => {
  const pagePosition = usePagePositionSelector();
  const introduceRef = useRef<HTMLDivElement | null>(null);
  const [fadeUpStart, setFadeUpStart] = useState<boolean>(false);

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true, // 기본 : false
  });

  useEffect(() => {
    if (pagePosition === 'introduce' && introduceRef.current) {
      introduceRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [pagePosition]);

  useEffect(() => {
    if (inView) setFadeUpStart(true);
  }, [inView]);

  return (
    <DIV_IntroduceWrap className="section introduce" ref={introduceRef}>
      <DIV_ContentSection className="content-max" ref={ref}>
        <div className="title">
          <div>안녕하세요.</div>
          <div>3년차 프론트엔드 개발자</div>
          <div>
            <span>정민지</span>입니다.
          </div>
        </div>
        <hr className="divider"></hr>
        <div className="sub-title">
          <div className={`${fadeUpStart ? 'animate' : ''}`}>
            생산성 있는 개발과 가독성 있는 코드를 지향합니다.
            <br />
            매우 꼼꼼한 성격, 마지막까지 확인하는 습관.
            <br />
            그리고 협업이 강점인 개발자입니다.
          </div>
        </div>
      </DIV_ContentSection>
    </DIV_IntroduceWrap>
  );
};

const DIV_IntroduceWrap = styled.div`
  &.introduce {
    background:
      linear-gradient(
        180deg,
        rgba(112, 93, 80, 0.8) 0,
        rgba(112, 93, 80, 0.8) 90%
      ),
      url('./images/common/bg-main.jpg') 50% no-repeat;

    background-size: cover;
    padding-top: 170px;
  }

  ${tabletMedia} {
    &.introduce {
      padding-top: 170px !important;
    }
  }

  ${mobileMedia} {
    &.introduce {
      padding-top: 150px !important;
    }
  }
`;

const DIV_ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  .divider {
    width: 60px;
    height: 0;
    margin: 90px auto 50px;
    border: none;
    border-top: 3px solid ${Theme.Color.primary};
    opacity: 1;
  }
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${Theme.Color.black};
    div:first-child {
      padding-bottom: 80px;
      font-size: 30px;
      color: hsla(0, 0%, 100%, 0.7);
    }
    div:nth-child(2n) {
      padding-bottom: 30px;
      font-size: 40px;
      color: hsla(0, 0%, 100%, 0.7);
    }
    div:nth-child(3n) {
      font-size: 80px;
      color: ${Theme.Color.white};
      ${Theme.Typography.extraBold};
    }
    span {
      color: ${Theme.Color.primary};
    }
  }
  .sub-title {
    color: hsla(0, 0%, 100%, 0.75);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    word-break: keep-all;
    ${Theme.Typography.h3};
    > div {
      ${fadeInUp};
    }
  }

  ${tabletMedia} {
    .title {
      div:first-child {
        font-size: 26px;
      }
      div:nth-child(2n) {
        font-size: 30px;
      }
      div:nth-child(3n) {
        font-size: 60px;
      }
    }
    .sub-title {
      font-size: 20px;
    }
  }
  ${mobileMedia} {
    .title {
      div:first-child {
        font-size: 7vw;
      }
      div:nth-child(2n) {
        font-size: 6vw;
      }
      div:nth-child(3n) {
        font-size: 12vw;
      }
    }
    .sub-title {
      font-size: 20px;
    }
  }
`;
export default Introduce;

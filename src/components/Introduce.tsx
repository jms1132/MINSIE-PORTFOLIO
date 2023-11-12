import useOnView from '@/hooks/useOnView';
import { fadeInUp } from '@/style/Styled';
import { Theme } from '@/style/Theme';
import { ReactElement, useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';

let isPreloaded = false;

const Introduce = (): ReactElement => {
  const targetRef = useRef<HTMLDivElement>(null);
  const animateRef = useRef<HTMLDivElement>(null);

  const [showSuspended, setShowSuspended] = useState(false);
  const animateOnView = useOnView({
    onlyOnce: true,
    target: animateRef,
  });

  const animate = animateOnView ? 'animate' : '';

  const onView = useOnView({
    target: targetRef,
    onlyOnce: true,
    options: {
      rootMargin: '50px',
    },
  });

  if (onView || showSuspended) {
    isPreloaded = true;
  }

  useEffect(() => {
    if (isPreloaded) {
      return;
    }
    if (onView || showSuspended) {
      isPreloaded = true;
    }
  }, [onView, showSuspended]);

  useEffect(() => {
    setTimeout(() => {
      setShowSuspended(true);
      isPreloaded = true;
    }, Number(10000));
  }, []);

  return (
    <DIV_Introduce className="introduce" ref={targetRef}>
      <div className={`contents content-max`}>
        <div className="title">
          <div>안녕하세요.</div>
          <div>3년차 프론트엔드 개발자</div>
          <div>
            <span>정민지</span>입니다.
          </div>
        </div>
        <hr className="divider"></hr>
        <div className="sub-title" ref={animateRef}>
          <div className={`${animate}`}>
            생산성 있는 개발과 가독성 있는 코드를 지향합니다.
            <br />
            매우 꼼꼼한 성격, 마지막까지 확인하는 습관.
            <br />
            그리고 협업이 강점인 개발자입니다.
          </div>
        </div>
      </div>
    </DIV_Introduce>
  );
};

const DIV_Introduce = styled.div`
  &.introduce {
    background: linear-gradient(
        180deg,
        rgba(112, 93, 80, 0.8) 0,
        rgba(112, 93, 80, 0.8) 90%
      ),
      url('./images/main-bg.jpg') 50% no-repeat;
    background-size: cover;
    padding: 170px 0 100px;

    .contents {
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
        border-top: 3px solid #fe9a2e;
        opacity: 1;
      }
      .title {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        color: #000000;
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
          color: #ffffff;
          ${Theme.Typography.extraBold};
        }
        span {
          color: #fe9a2e;
        }
      }
      .sub-title {
        color: hsla(0, 0%, 100%, 0.75);
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;

        ${Theme.Typography.h3};
        > div {
          ${fadeInUp};
        }
      }
    }
  }
`;
export default Introduce;

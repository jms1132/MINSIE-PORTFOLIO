import { contactArray } from '@/model/Contact';
import { usePagePositionSelector } from '@/store/pagePosition/Selector';
import { Theme } from '@/style/Theme';
import { tabletMedia } from '@/style/deviceWidth';
import { ReactElement, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';
import { styled } from 'styled-components';
import ContactCard from './ContactCard';

const Contact = (): ReactElement => {
  const pagePosition = usePagePositionSelector();
  const contactRef = useRef<HTMLDivElement | null>(null);
  const [typeStart, setTypeStart] = useState<boolean>(false);

  useEffect(() => {
    if (pagePosition === 'contact' && contactRef.current) {
      contactRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [pagePosition]);

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true, // 기본 : false
  });

  useEffect(() => {
    if (inView) setTypeStart(true);
  }, [inView]);

  return (
    <DIV_ContactWrap className="section content-max" ref={contactRef}>
      <div className="section-title" ref={ref}>
        연락처
      </div>
      <DIV_ContentSection>
        {typeStart && (
          <TypeAnimation
            className="question"
            sequence={['"사용자를 위한 서비스 개발이란 무엇일까?"']}
            speed={10}
            style={{ display: 'inline-block', wordBreak: 'keep-all' }}
          />
        )}
        <div className="answer">
          <p>안녕하세요. 개발자 정민지입니다.</p>
          <p>
            신입 개발자로 시작해서 어느새 3년이 넘은 지금, 다시 한 번 올바른
            개발의 방향에 대해서 생각해보게 되었습니다.
          </p>
          <p>
            무엇보다 중요한 것은, 사용자의 불편함이 없는 서비스를 만드는 것.
            <br />
            흔한 페이지 이동 하나에서조차 자연스럽게 이어지는, 사용자가 쓰기
            편한 서비스가 좋은 IT 서비스라고 생각합니다.
          </p>
          <p>
            <span className="underline">`마지막으로 한번 더 확인`</span> 이라는
            생각을 통해 코드의 안전성과 서비스의 탄탄함에 기여해 왔습니다.
            <br />
            문제에서 기회를 포착하고,{' '}
            <span className="underline">해결을 통한 성취감</span>을 좋아합니다.
          </p>
          <p>
            늘 사용자의 관점에서 바라보며 개발해왔던 저의 성장 가능성을 믿고
            이끌어 주실 회사를 찾고 있습니다.
          </p>
        </div>
      </DIV_ContentSection>
      <DIV_CardSection>
        {contactArray.map((info, idx) => (
          <ContactCard key={idx} info={info} />
        ))}
      </DIV_CardSection>
    </DIV_ContactWrap>
  );
};

const DIV_ContactWrap = styled.div``;

const DIV_ContentSection = styled.div`
  padding-bottom: 100px;
  .underline {
    background-image: linear-gradient(90deg, #95dac1, #fffd7f);
    background-position: bottom;
    background-size: 100% 30%;
    background-repeat: no-repeat;
  }
  .question {
    font-family: 'GyeonggiBatang';
    ${Theme.Typography.h2};
    margin-bottom: 30px;

    &.animate {
      width: 36ch;
      overflow: hidden;
      white-space: pre-line;
      border-right: 2px solid;
      animation: typing 2s steps(30, end) forwards, blinking 0.75s infinite;
    }
  }
  .answer {
    ${Theme.Typography.regular};
    ${Theme.Typography.subtitle2};
    word-break: keep-all;
  }

  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes blinking {
    0% {
      border-right-color: transparent;
    }
    50% {
      border-right-color: orange;
    }
    100% {
      border-right-color: transparent;
    }
  }
`;

const DIV_CardSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 48%);
  justify-content: center;
  grid-row-gap: 2rem;
  grid-column-gap: 4%;
  > div {
    &:nth-child(2),
    &:nth-child(3) {
      .content {
        font-weight: 900;
      }
    }
  }

  ${tabletMedia} {
    grid-template-columns: repeat(1, 100%);
    grid-row-gap: 3rem;
  }
  ${tabletMedia} {
    grid-row-gap: 2rem;
  }
`;
export default Contact;

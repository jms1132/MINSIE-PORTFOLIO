import { contactArray } from '@/model/Contact';
import { Theme } from '@/style/Theme';
import { ReactElement, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import ContactCard from './part/ContactCard';

const Contact = (): ReactElement => {
  const params = useParams();
  const contactRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.location.hash.includes('contact')) {
      contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [params]);

  return (
    <DIV_Contact ref={contactRef} className="section content-max">
      <div className="section-title">연락처</div>
      <DIV_Footer>
        <div className="question">
          "사용자를 위한 서비스 개발이란 무엇일까?"
        </div>
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
      </DIV_Footer>
      <DIV_CardSection>
        {contactArray.map((info, idx) => (
          <ContactCard key={idx} info={info} />
        ))}
      </DIV_CardSection>
    </DIV_Contact>
  );
};

const DIV_Contact = styled.div``;

const DIV_Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding-bottom: 100px;
  .underline {
    background-image: linear-gradient(90deg, #95dac1, #fffd7f);
    background-position: bottom;
    background-size: 100% 30%;
    background-repeat: no-repeat;
  }
  .question {
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: 0.15em solid orange; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    animation: typing 2.5s steps(40, end), blink-caret 0.75s step-end infinite;
    font-family: 'SeoulHangangEB';
    font-size: 25px;
    margin-bottom: 30px;
    width: fit-content;
  }
  .answer {
    ${Theme.Typography.regular};
    ${Theme.Typography.subtitle2};
  }

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: orange;
    }
  }
`;

const DIV_CardSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  > div {
    transition-property: box-shadow, transform;
    transition-duration: 0.25s;
    transition-timing-function: ease-in-out;
    cursor: default;
    @media (hover: hover) {
      &:hover {
        transform: translateY(-10px);
        box-shadow: 0px 8px 24px #fe9a2e;
      }
    }
    &:nth-child(2),
    &:nth-child(3) {
      .content {
        font-weight: 900;
      }
    }
  }
`;
export default Contact;

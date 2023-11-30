import Assets from '@/assets/Assets';
import { usePagePositionSelector } from '@/store/pagePosition/Selector';
import { Theme } from '@/style/Theme';
import { mobileMedia, tabletMedia } from '@/style/deviceWidth';
import { ReactElement, useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import Icon from '../common/Icon';
import Link from '../common/Link';

const Career = (): ReactElement => {
  const pagePosition = usePagePositionSelector();
  const careerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (pagePosition === 'career' && careerRef.current) {
      careerRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [pagePosition]);

  return (
    <DIV_CareerWrap className="section" ref={careerRef}>
      <div className="section-title">Career</div>
      <DIV_ContentSection className="content-max">
        <div className="icon-wrap">
          <Link href="https://about.stunning.kr/" target="_blank">
            <img src="./images/common/icon-stunning-logo.png" alt="" />
          </Link>
          <Link href="https://www.loud.kr/" target="_blank">
            <img src="./images/common/icon-loud-logo.png" alt="" />
          </Link>
          <Link href="https://notefolio.net/" target="_blank">
            <img src="./images/common/icon-notefolio-logo.png" alt="" />
          </Link>
        </div>

        <div className="content">
          <div className="company-name">STUNNING</div>
          <div className="period">2020.08 ~ 현재</div>
          <div className="description">
            <div className="stunning service">
              <p>
                라우드소싱과 노트폴리오가 합병되어 `스터닝`이 탄생하였고 합병
                전부터 라우드소싱 개발팀으로 근무하여 현재는 라우드소싱과
                노트폴리오 서비스 개발에 둘다 참여하고 있습니다.
              </p>
              <p>
                <b>라우드소싱</b>은 디자인이 필요한 의뢰자와 다수의 디자이너를
                연결해주는 디자인 크라우드소싱 서비스 플랫폼입니다. (ex. 공모전
                방식의 콘테스트, 디자이너 1:1매칭, 마켓 서비스)
              </p>
              <p>
                <b>노트폴리오</b>는 10만 창작자 회원을 가지고 있는 국내 최대의
                포트폴리오 플랫폼입니다.(ex. 포트폴리오, 채용, 교육, 아티클)
              </p>
            </div>
            <div className="loud service">
              <Link
                href="https://www.loud.kr/"
                className="sub-company-name"
                target="_blank"
              >
                라우드소싱
                <Icon asset={Assets.arrowBold16}></Icon>
              </Link>
              <li>
                PHP + JS를 기반으로 했던 환경에서 Go + React + Typescript로
                이루어진 환경으로 라우드소싱 서비스를 프론트서버 gelato와
                백엔드서버 dantats로 나누는 <b>마이그레이션</b> 하는 작업에
                참여하였습니다.
              </li>
              <li>
                기존 PHP로 구현되었던 콘테스트 서비스 및 여러 서비스 페이지들을
                <b>React + Typescript로 안정적으로 구현 및 유지보수</b> 하는
                작업과 더불어 사이트 전체의 <b>UI 리뉴얼</b>을 진행하였습니다.
              </li>
              <li>
                또한 신규 기획이었던{' '}
                <b>
                  마켓 서비스, 1:1 의뢰 서비스, 채팅 서비스, 쿠폰 서비스 및
                  아임포트 본인 인증과 카카오톡, 네이버, 구글 로그인 기능과 toss
                  페이먼츠 api를 통한 결제 및 관련된 Admin 페이지
                </b>
                를 구현하였습니다.
              </li>
              <li>
                <b>
                  재사용 컴포넌트 및 각 서비스 별 디자인을 다르게 구현하기 위한
                  별도의 subModule
                </b>
                을 두어 사용하였고 react-query를 위해{' '}
                <b>api 전용 client subModule</b>을 분리해 사용하였습니다.
              </li>
              <li>
                클라이언트들이 원하는 <b>랜딩페이지</b>를 구현하여
                제공하였습니다.
              </li>
            </div>
            <div className="notefolio service">
              <Link
                href="https://notefolio.net/"
                className="sub-company-name"
                target="_blank"
              >
                노트폴리오
                <Icon asset={Assets.arrowBold16}></Icon>
              </Link>
              <li>
                노트폴리오 <b>UI 리뉴얼 작업</b>에 참여하여 메인페이지 및
                카테고리 개선 작업을 진행했습니다.
              </li>
              <li>
                신규 성장/커뮤니티 서비스 개발을 위해{' '}
                <b>
                  기획 단계부터 참여하여 데이터 모델링, ui 구현, 결제 및 Admin
                  페이지까지 프론트 작업 전체
                </b>
                를 담당하였습니다.
              </li>
            </div>
          </div>
        </div>
      </DIV_ContentSection>
    </DIV_CareerWrap>
  );
};

const DIV_CareerWrap = styled.div`
  background: ${Theme.Color.gray300};
  background-color: rgba(0, 0, 0, 0.05);
`;

const DIV_ContentSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 80px;
  width: 90% !important;
  .icon-wrap {
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
    > a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 180px;
      aspect-ratio: 1;
      background-color: ${Theme.Color.white};
      border-radius: 50%;
      border: 1px solid ${Theme.Color.gray400};
      img {
        width: 120px;
      }
    }
  }
  .content {
    padding: 40px 0 40px 80px;
    border-left: 1px solid ${Theme.Color.gray400};
    .company-name {
      font-family: 'GmarketSansBold';
      ${Theme.Typography.h2};
    }

    .period {
      ${Theme.Typography.subtitle2};
      color: ${Theme.Color.gray700};
      padding-bottom: 30px;
    }
    .description {
      .service {
        word-break: keep-all;
        padding-bottom: 20px;
        ${Theme.Typography.subtitle2};
        &.stunning {
        }

        &.loud,
        &.notefolio {
          .sub-company-name {
            padding: 0 0 10px;
            ${Theme.Typography.h3};
            font-family: 'GmarketSansBold';
            display: flex;
            align-items: center;
            gap: 5px;
          }
        }

        p,
        li {
          font-family: 'GmarketSansLight';
          padding-bottom: 10px;
        }
        li {
          list-style-position: inside;
          text-indent: -20px;
        }
      }
    }
  }

  ${tabletMedia} {
    width: 100% !important;
    gap: 50px;
    .icon-wrap {
      padding: 20px 0;

      > a {
        width: 120px;

        img {
          width: 80px;
        }
      }
    }
    .content {
      padding: 20px 0 20px 50px;
    }
  }

  ${mobileMedia} {
    flex-direction: column;
    gap: 20px;

    .icon-wrap {
      margin: 0 auto;
      flex-direction: row;
      align-items: center;
      justify-self: center;
    }
    .content {
      padding: 20px 0;
      border: none;
      .loud,
      .notefolio {
        padding-left: 20px;
      }
    }
  }
`;
export default Career;

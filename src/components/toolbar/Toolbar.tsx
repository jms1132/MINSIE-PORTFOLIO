import styled from 'styled-components';
interface ToolbarProps {
  mobileColored: boolean;
}
const Toolbar = (props: ToolbarProps) => {
  return (
    <DIV_Toolbar>
      <div className={`toolbar-row ${props.mobileColored ? 'm-colored' : ''}`}>
        <div className="toolbar-title">MINSIE.</div>
        <div className="toolbar-menu">
          <div>소개</div>
          <div>기술스택</div>
          <div>포트폴리오</div>
          <div>연락처</div>
        </div>
      </div>
    </DIV_Toolbar>
  );
};

const DIV_Toolbar = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 30px 60px;
  margin: 0 auto;

  .toolbar-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: hsla(0, 0%, 100%, 0.7);
    .toolbar-title {
      cursor: pointer;
      font-family: 'Open Sans, GmarketSansBold, sans-serif';
      font-weight: 700;
      font-size: 40px;
    }
    .toolbar-menu {
      display: flex;
      gap: 40px;
      > * {
        font-size: 18px;
        cursor: pointer;
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
`;
export default Toolbar;

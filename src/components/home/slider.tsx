import { css } from "@emotion/react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { useState } from "react";
import { theme } from "../../themes/theme";
import {
  AxisPlane,
  ClickBox,
  Container,
  Plane,
  RotateContainer,
} from "../../styles/home/slider";
import useFetch from "../../hooks/useFetch";

interface IImage {
  img: string;
  title: string;
  description: string;
}

function Slider() {
  const [randomColor, setRandomColor] = useState(theme.backgroundColor);
  const [deg, setDeg] = useState(0);
  const {
    data: projects,
    loading: loadingProjects,
    error: errorProjects,
  } = useFetch("", "/api/images/active?limit=8");

  const randomColorProducer = () => {
    const bgColor = ["#020314", "#5932E6", "#8631E6", "#161370", "#364B92"];
    setRandomColor(bgColor[Math.floor(Math.random() * 4)]);
  };
  const onClickRight = () => {
    setDeg((prev) => prev - 45);
    randomColorProducer();
  };
  const onClickLeft = () => {
    setDeg((prev) => prev + 45);
    randomColorProducer();
  };

  const forLoop = (Z: number) => {
    let loopPseudo = "";
    for (let i = 1; i < 9; i++) {
      loopPseudo += `
        &:nth-of-type(${i}) {
          transform: rotateY(${i * 45}deg) translateZ(${Z}px);
        }
      `;
    }
    return css`
      ${loopPseudo}
    `;
  };
  return (
    <Container bgColor={randomColor}>
      <h2 className="title">프로젝트 결과물</h2>
      <RotateContainer>
        {loadingProjects ? (
          <div>로딩중...</div>
        ) : errorProjects ? (
          <div>{errorProjects} 에러가 발생했습니다.</div>
        ) : (
          <AxisPlane deg={deg}>
            {projects?.map((item: IImage, index: number) => (
              <Plane forLoop={forLoop} key={index}>
                <div className="rotate__title">{item.title}</div>
                <img
                  src={item?.img}
                  alt={`project${index}`}
                  className="rotate__img"
                />
              </Plane>
            ))}
          </AxisPlane>
        )}
      </RotateContainer>
      <ClickBox>
        <div onClick={onClickLeft} className="click">
          <DoubleArrowIcon sx={{ fontSize: 40 }} />
        </div>
        <div className="takealook">더보기</div>
        <div onClick={onClickRight} className="click">
          <DoubleArrowIcon sx={{ fontSize: 40 }} />
        </div>
      </ClickBox>
    </Container>
  );
}
export default Slider;

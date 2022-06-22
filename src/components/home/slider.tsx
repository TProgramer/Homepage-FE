import { css } from "@emotion/react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { useEffect, useState } from "react";
import { theme } from "../../themes/theme";
import {
  AxisPlane,
  ClickBox,
  Container,
  Plane,
  RotateContainer,
} from "../../styles/home/slider";

interface IImage {
  img: string;
  title: string;
  description: string;
}

function Slider() {
  const [randomColor, setRandomColor] = useState(theme.backgroundColor);
  const [projects, setProjects] = useState<IImage[]>();
  const [deg, setDeg] = useState(0);

  useEffect(() => {
    (async () => {
      const res = await (await fetch("api/images/active?limit=8")).json();
      setProjects(res);
    })();
  }, []);
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
        <AxisPlane deg={deg}>
          {projects?.map((item, index) => {
            return (
              <Plane forLoop={forLoop} key={index}>
                <div className="rotate__title">{item.title}</div>
                <img
                  src={item?.img}
                  alt={`project${index}`}
                  className="rotate__img"
                />
              </Plane>
            );
          })}
        </AxisPlane>
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

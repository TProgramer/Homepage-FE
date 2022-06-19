import { css } from "@emotion/react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { useEffect, useState } from "react";
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
  const [projects, setProjects] = useState<IImage[]>();
  const [deg, setDeg] = useState(0);

  useEffect(() => {
    (async () => {
      const res = await (await fetch("api/images/active?limit=8")).json();
      setProjects(res);
    })();
  }, []);

  const onClickRight = () => {
    setDeg((prev) => prev - 45);
  };
  const onClickLeft = () => {
    setDeg((prev) => prev + 45);
  };

  const forLoopDeskTop = () => {
    let loopPseudo = "";
    for (let i = 1; i < 9; i++) {
      loopPseudo += `
        &:nth-of-type(${i}) {
          transform: rotateY(${i * 45}deg) translateZ(550px);
        }
      `;
    }
    return css`
      ${loopPseudo}
    `;
  };
  const forLoopTablet = () => {
    let loopPseudo = "";
    for (let i = 1; i < 9; i++) {
      loopPseudo += `
        &:nth-of-type(${i}) {
          transform: rotateY(${i * 45}deg) translateZ(350px);
        }
      `;
    }
    return css`
      ${loopPseudo}
    `;
  };
  const forLoopMobile = () => {
    let loopPseudo = "";
    for (let i = 1; i < 9; i++) {
      loopPseudo += `
        &:nth-of-type(${i}) {
          transform: rotateY(${i * 45}deg) translateZ(200px);
        }
      `;
    }
    return css`
      ${loopPseudo}
    `;
  };
  return (
    <Container>
      <h2 className="title">프로젝트 결과물</h2>
      <RotateContainer>
        <AxisPlane deg={deg}>
          {projects?.map((item, index) => {
            return (
              <Plane
                forLoopDeskTop={forLoopDeskTop}
                forLoopTablet={forLoopTablet}
                forLoopMobile={forLoopMobile}
                key={index}
              >
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

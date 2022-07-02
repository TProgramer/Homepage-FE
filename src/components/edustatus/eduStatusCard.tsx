import { StyledCard } from "../../styles/eduStatus/eduStatus";

interface ListProps {
  list: {
    imgUrl: string;
    course_name: string;
    type: string;
    generation: number;
    tech1?: string;
    tech2?: string;
    tech3?: string;
  };
}
const EduStatusCard = ({ list }: ListProps) => {
  return (
    <StyledCard url={list.imgUrl} type={list.type}>
      <div className="image"></div>
      <div className="content">
        <div className="left_content">
          <div className="content_name">{list.course_name}</div>
          <div className="content_tech">
            {list.tech1 && `#${list.tech1}`} {list.tech2 && `#${list.tech2}`}{" "}
            {list.tech3 && `#${list.tech3}`}
          </div>
        </div>
        <div className="right_content">
          <div className="content_degree">{`${list.generation}기`}</div>
          <div className="content_type">{list.type}</div>
        </div>
      </div>
    </StyledCard>
  );
};

export default EduStatusCard;

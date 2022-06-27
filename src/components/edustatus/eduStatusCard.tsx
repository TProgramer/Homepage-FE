import { StyledCard } from "../../styles/eduStatus/eduStatus";

interface ListProps {
  list: {
    imgUrl: string;
    name: string;
    type: string;
    degree: Number;
    tech: string[];
  };
  select: string;
}
const EduStatusCard = ({ list, select }: ListProps) => {
  return (
    <StyledCard url={list.imgUrl} type={list.type}>
      <div className="image"></div>
      <div className="content">
        <div className="left_content">
          <div className="content_name">{list.name}</div>
          <div className="content_tech">
            {list.tech.map((item) => `#${item} `)}
          </div>
        </div>
        <div className="right_content">
          <div className="content_degree">{`${list.degree}기`}</div>
          <div className="content_type">{list.type}</div>
        </div>
      </div>
    </StyledCard>
  );
};

export default EduStatusCard;

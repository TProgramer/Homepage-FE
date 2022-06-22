import { StyledCard } from "../../styles/eduStatus/eduStatus";

interface ListProps {
  list: {
    imgUrl: string;
    name: string;
    type: string;
    degree: Number;
    tech: string[];
  };
}
const EduStatusCard = ({ list }: ListProps) => {
  console.log(list);
  return (
    <StyledCard url={list.imgUrl}>
      <div className="image"></div>
      <div className="content">
        <div className="content_name">{list.name}</div>
        <div className="content_degree">{`${list.degree}차`}</div>
        <div className="content_tech">{list.type}</div>
        <div className="content_type">
          {list.tech.map((item) => `#${item} `)}
        </div>
      </div>
    </StyledCard>
  );
};

export default EduStatusCard;

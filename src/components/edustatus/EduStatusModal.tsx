import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  ModalForm,
  ModalAddCircleOutlineOutlinedIcon,
} from "../../styles/eduStatus/eduStatus";

export interface IModalInputType {
  imgUrl: string;
  course_name: string;
  type: string;
  generation: number;
  tech1?: string;
  tech2?: string;
  tech3?: string;
}
interface SubmitFunc {
  plusCard: (data: IModalInputType) => void;
  closeModal: () => void;
}
const EduStatusModal = ({ plusCard, closeModal }: SubmitFunc) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IModalInputType>();
  const [count, setCount] = useState<number>(0);
  const onClickType = () => setCount(count + 1);
  const onSubmit = (data: IModalInputType) => {
    plusCard(data);
    alert("추가완료");
    closeModal();
  };
  return (
    <ModalForm onSubmit={handleSubmit(onSubmit)} count={count}>
      <p>스터디 카드 추가</p>
      <input
        {...register("imgUrl", { required: true })}
        type="text"
        className="image"
        placeholder="image url"
      />
      <input
        {...register("course_name", { required: true })}
        type="text"
        className="course_name"
        placeholder="course name"
      />
      <div className="generation_type">
        <input
          {...register("generation", { required: true })}
          type="number"
          className="generation_input"
          placeholder=""
        />
        <span>기</span>
        <select {...register("type", { required: true })} className="type">
          <option value="">분류</option>
          <option value="Web">웹</option>
          <option value="Android">안드로이드</option>
          <option value="etc">기타</option>
        </select>
      </div>
      <div className="all_tech">
        <span className="maintext">기술스택</span>
        <div onClick={onClickType} className="plusbtn">
          <ModalAddCircleOutlineOutlinedIcon count={count} />
        </div>
        <div className="techbox1">
          <span>#</span>
          <input {...register("tech1")} type="text" className="tech1" />
        </div>
        <div className="techbox2">
          <span>#</span>
          <input {...register("tech2")} type="text" className="tech2" />
        </div>
        <div className="techbox3">
          <span>#</span>
          <input {...register("tech3")} type="text" className="tech3" />
        </div>
      </div>
      <button className="submit">등록하기</button>
    </ModalForm>
  );
};

export default EduStatusModal;

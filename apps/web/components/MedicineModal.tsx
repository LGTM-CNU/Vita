import Image from "next/image";
import styled from "styled-components";
import Modal from "./Modal";
import medicineImg from "../public/medicine1.png";
import { Medicine } from "../type/alarm";
import React, { useState, SetStateAction, Dispatch } from "react";

interface MedicineModal {
  index?: number;
  type: "edit" | "new";
  isOpened: boolean;
  medicine?: Medicine;
  onClose: () => void;
  setMedicines: Dispatch<SetStateAction<Medicine[]>>;
}

const MedicineModal: React.FC<MedicineModal> = ({
  index,
  type,
  isOpened,
  medicine,
  onClose,
  setMedicines,
}) => {
  const [morningAlarm, setMorningAlarm] = useState<String>(
    medicine?.alarm.morning || "아침"
  );
  const [eveningAlarm, setEveningAlarm] = useState<String>(
    medicine?.alarm.evening || "점심"
  );
  const [afternoonAlarm, setAfternoonAlarm] = useState<String>(
    medicine?.alarm.afternoon || "저녁"
  );
  const [medicineType, setMedecineType] = useState<String>(
    medicine?.type || ""
  );
  const [description, setDescription] = useState<String | undefined>(
    medicine?.description
  );

  const onChangeMorningHandler = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setMorningAlarm(e.target.value);
  const onChangeEveningHandler = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setEveningAlarm(e.target.value);
  const onChangeAfternoonHandler = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setAfternoonAlarm(e.target.value);

  const isSelected = (
    time: "morning" | "evening" | "afternoon",
    value: string
  ) => {
    if (!medicine) return false;
    if (time === "morning") return value === medicine?.alarm.morning;
    else if (time === "evening") return value === medicine?.alarm.evening;
    else if (time === "afternoon") return value === medicine?.alarm.afternoon;
  };

  const onConfirm = () => {
    setMedicines((oldState) => [
      ...oldState.filter((value, i) => index !== i),
      {
        type: medicineType,
        description: description,
        thumbnail: "medicine1.png",
        alarm: {
          morning: morningAlarm,
          evening: eveningAlarm,
          afternoon: afternoonAlarm,
        },
      } as Medicine,
    ]);
    onClose();
  };

  return (
    <Modal
      type={type}
      isOpened={isOpened}
      onClose={onClose}
      onConfirm={onConfirm}
    >
      <Container>
        <Main>
          <Image src={medicineImg} width={200} height={200} alt={"medicine"} />
          <Detail>
            <input placeholder="약 이름" defaultValue={medicine?.type} />
            <textarea
              placeholder="약에 대한 설명"
              defaultValue={medicine?.description}
            />
          </Detail>
        </Main>

        <Select onChange={onChangeMorningHandler}>
          <option>아침</option>
          <option selected={isSelected("morning", "06:00")}>06:00</option>
          <option selected={isSelected("morning", "07:00")}>07:00</option>
          <option selected={isSelected("morning", "08:00")}>08:00</option>
          <option selected={isSelected("morning", "09:00")}>09:00</option>
          <option selected={isSelected("morning", "10:00")}>10:00</option>
          <option selected={isSelected("morning", "11:00")}>11:00</option>
        </Select>
        <Select onChange={onChangeEveningHandler}>
          <option>점심</option>
          <option selected={isSelected("evening", "12:00")}>12:00</option>
          <option selected={isSelected("evening", "13:00")}>13:00</option>
          <option selected={isSelected("evening", "14:00")}>14:00</option>
          <option selected={isSelected("evening", "15:00")}>15:00</option>
          <option selected={isSelected("evening", "16:00")}>16:00</option>
        </Select>
        <Select onChange={onChangeAfternoonHandler}>
          <option>저녁</option>
          <option selected={isSelected("afternoon", "17:00")}>17:00</option>
          <option selected={isSelected("afternoon", "18:00")}>18:00</option>
          <option selected={isSelected("afternoon", "19:00")}>19:00</option>
          <option selected={isSelected("afternoon", "20:00")}>20:00</option>
          <option selected={isSelected("afternoon", "21:00")}>21:00</option>
          <option selected={isSelected("afternoon", "22:00")}>22:00</option>
          <option selected={isSelected("afternoon", "23:00")}>23:00</option>
        </Select>

        <Date>
          <Day>월</Day>
          <Day>화</Day>
          <Day>수</Day>
          <Day>목</Day>
          <Day>금</Day>
          <Day>토</Day>
          <Day>일</Day>
        </Date>
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 3rem;
  padding-top: 2rem;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  /* padding: 2rem; */

  margin-right: 2rem;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;

  margin: 1rem;

  input {
    font-size: 1.6rem;
    margin-bottom: 1rem;
    outline: none;
  }

  textarea {
    font-size: 1.6rem;
    outline: none;
  }
`;

const Date = styled.div`
  display: flex;
  width: 100%;

  justify-content: space-around;
  align-items: center;

  margin-top: 2rem;
  margin-bottom: 2rem;

  gap: 1rem;
`;

const Day = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.8rem;

  background: orange;
  color: white;
`;

const Select = styled.select`
  margin: 0 auto;
  height: 4rem;
  margin-bottom: 1rem;

  width: 70%;

  font-size: 1.6rem;
`;

export default MedicineModal;

import Image from "next/image";
import styled from "styled-components";
import Modal from "./Modal";
import medicineImg from "../public/medicine1.png";
import { Medicine } from "../type/alarm";
import React, { useState, SetStateAction, Dispatch, useId, useEffect } from "react";
import fetcher from "../util/fetcher";
import { useRecoilValue } from "recoil";
import { userIdState } from "../store/userId";

interface MedicineModal {
  id: String;
  type: "edit" | "new";
  isOpened: boolean;
  medicine?: Medicine;
  onClose: () => void;
  setMedicines: Dispatch<SetStateAction<Medicine[]>>;
}

const DAYS = ["월", "화", "수", "목", "금", "토", "일"];
const MORNING_TIMES = ["아침", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00"];
const EVENING_TIMES = ["점심", "12:00", "13:00", "14:00", "15:00", "16:00"];
const AFTERNOON_TIMES = ["저녁", "17:00", "18:00", "19:00", "20:00", "21:00", "23:00"];

const MedicineModal: React.FC<MedicineModal> = ({ type, isOpened, medicine, onClose, setMedicines, id }) => {
  const [morningAlarm, setMorningAlarm] = useState<String | undefined>();
  const [eveningAlarm, setEveningAlarm] = useState<String | undefined>();
  const [afternoonAlarm, setAfternoonAlarm] = useState<String | undefined>();
  const [medicineType, setMedecineType] = useState<string | undefined>();
  const [description, setDescription] = useState<string | undefined>();
  const [repeat, setRepeat] = useState<boolean[]>(Array(7).fill(false));
  const userId = useRecoilValue(userIdState);

  useEffect(() => {
    setMorningAlarm(medicine?.morning);
    setEveningAlarm(medicine?.evening);
    setAfternoonAlarm(medicine?.afternoon);
    setMedecineType(medicine?.type);
    setDescription(medicine?.description);
  }, [medicine]);

  const onChangeMorningHandler = (e: React.ChangeEvent<HTMLSelectElement>) => setMorningAlarm(e.target.value);
  const onChangeEveningHandler = (e: React.ChangeEvent<HTMLSelectElement>) => setEveningAlarm(e.target.value);
  const onChangeAfternoonHandler = (e: React.ChangeEvent<HTMLSelectElement>) => setAfternoonAlarm(e.target.value);

  const isSelected = (time: "morning" | "evening" | "afternoon", value: string) => {
    if (!medicine) return false;
    if (time === "morning") return value === morningAlarm;
    else if (time === "evening") return value === eveningAlarm;
    else if (time === "afternoon") return value === afternoonAlarm;
  };

  const onDayClickHandler = (e: any) => {
    setRepeat(repeat.map((day, index) => (index == e.target.value ? !day : day)));
  };

  const onConfirm = async () => {
    const newMedicine = {
      id: id,
      type: medicineType,
      description: description,
      thumbnail: "medicine1.png",
      morning: morningAlarm === "아침" ? null : morningAlarm,
      evening: eveningAlarm === "점심" ? null : eveningAlarm,
      afternoon: afternoonAlarm === "저녁" ? null : afternoonAlarm,
      ownerId: userId,
    } as Medicine;

    if (type === "edit") {
      setMedicines((oldState) => [...oldState.map((value) => (value.id !== id ? value : newMedicine))]);
      await fetcher("patch", `/medicines/${id}`, newMedicine);
    } else if (type === "new") {
      setMedicines((oldState) => [...oldState, newMedicine]);
      await fetcher("post", "/medicines", { ...newMedicine });
    }
    onClose();
  };

  const onTypeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => setMedecineType(e.target.value);

  const onDescriptionChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value);

  return (
    <Modal type={type} isOpened={isOpened} onClose={onClose} onConfirm={onConfirm}>
      <Container>
        <Main>
          <Image src={medicineImg} width={200} height={200} alt={"medicine"} />
          <Detail>
            <input placeholder="약 이름" value={medicineType} onInput={onTypeInputHandler} />
            <textarea placeholder="약에 대한 설명" value={description} onInput={onDescriptionChangeHandler} />
          </Detail>
        </Main>

        <Select onChange={onChangeMorningHandler}>
          {MORNING_TIMES.map((time) => (
            <option selected={isSelected("morning", time)}>{time}</option>
          ))}
        </Select>
        <Select onChange={onChangeEveningHandler}>
          {EVENING_TIMES.map((time) => (
            <option selected={isSelected("evening", time)}>{time}</option>
          ))}
        </Select>
        <Select onChange={onChangeAfternoonHandler}>
          {AFTERNOON_TIMES.map((time) => (
            <option selected={isSelected("afternoon", time)}>{time}</option>
          ))}
        </Select>
        <Date>
          {DAYS.map((day, index) => (
            <Day selected={repeat[index]} value={index} onClick={onDayClickHandler}>
              {day}
            </Day>
          ))}
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

const Day = styled.button<{ selected: boolean }>`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.8rem;
  border: none;

  background-color: ${({ selected }) => (selected ? "#ED9752" : "#F3CE5C")};
  color: white;
`;

const Select = styled.select`
  margin: 0 auto;
  height: 4rem;
  margin-bottom: 1rem;

  width: 70%;

  font-size: 1.6rem;
`;

export default React.memo(MedicineModal);

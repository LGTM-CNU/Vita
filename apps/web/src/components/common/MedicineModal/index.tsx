import React, { useState, SetStateAction, Dispatch, useEffect } from "react";
import { useRecoilValue } from "recoil";
import Image from "next/image";

import Modal from "@/common/Modal";
import medicineImg from "@/public/medicine1.png";
import { binaryToRepeatArray, repeatArrayToBinary } from "@/util/binary";
import { Medicine } from "@/type/alarm";
import fetcher from "@/util/fetcher";
import { userIdState } from "@/store/userId";
import { Container, Main, Detail, Select, Day, Date } from "./styles";

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
    if (medicine) setRepeat(binaryToRepeatArray(medicine.repeat));
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
      repeat: repeatArrayToBinary(repeat),
    } as Medicine;

    if (type === "edit") {
      setMedicines((oldState) => [...oldState.map((value) => (value.id !== id ? value : newMedicine))]);
      await fetcher("patch", `/medicines/${id}`, newMedicine);
    } else if (type === "new") {
      setMedicines((oldState) => [...oldState, newMedicine]);
      await fetcher("post", "/medicines", { ...newMedicine });
    }
    console.log(repeatArrayToBinary(repeat).toString(2));
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

export default React.memo(MedicineModal);

import { Dispatch, SetStateAction, useCallback, useState, useEffect } from "react";
import Image from "next/image";
import uuid from "react-uuid";

import MedicineModal from "@/components/common/MedicineModal";
import medicineImg from "@/public/medicine1.png";
import { Medicine } from "@/type/alarm";
import { Container, Wrapper } from "./styles";

interface MedicineProps {
  setMedicines: Dispatch<SetStateAction<Medicine[]>>;
  index: number;
}

const NewCard: React.FC<MedicineProps> = ({ setMedicines, index }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [id, setId] = useState<String>(uuid());

  useEffect(() => {
    setId(uuid());
  }, [index]);

  const onClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <Container>
      <Wrapper index={index} onClick={() => setIsModalOpen(true)}>
        <Image src={medicineImg} width={100} height={100} alt="medicine" />
        <p>추가하기</p>
      </Wrapper>
      <MedicineModal id={id} type={"new"} isOpened={isModalOpen} onClose={onClose} setMedicines={setMedicines} />
    </Container>
  );
};

export default NewCard;

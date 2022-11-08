import Image from "next/image";
import { useState, Dispatch, SetStateAction } from "react";

import MedicineModal from "@/common/MedicineModal";
import { Medicine } from "@/type/alarm";
import { Container, Wrapper, Title, Detail } from "./styles";

interface MedicineProps {
  index: number;
  medicine: Medicine;
  setMedicines: Dispatch<SetStateAction<Medicine[]>>;
}

const MedicineCard: React.FC<MedicineProps> = ({ medicine, index, setMedicines }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const onClose = () => setIsModalOpen(false);

  return (
    <Container>
      <Wrapper index={index} onClick={() => setIsModalOpen(true)}>
        <Image src={require(`../../../public/${medicine.thumbnail}`)} width={100} height={100} alt="medicine" />
        <Title>{medicine.type}</Title>
        {medicine.morning != null && <Detail>{`아침: ${medicine.morning}`}</Detail>}
        {medicine.evening != null && <Detail>{`점심: ${medicine.evening}`}</Detail>}
        {medicine.afternoon != null && <Detail>{`저녁: ${medicine.afternoon}`}</Detail>}
      </Wrapper>
      <MedicineModal
        id={medicine.id}
        type="edit"
        isOpened={isModalOpen}
        medicine={medicine}
        onClose={onClose}
        setMedicines={setMedicines}
      />
    </Container>
  );
};

export default MedicineCard;

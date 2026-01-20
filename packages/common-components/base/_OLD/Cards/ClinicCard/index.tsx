import { Column, Row } from "../../base/containers/Flex";
import { ImageBox } from "../../base/images/ImageBox";
import Text from "../../base/text/Text_2";
import { PiMapPin } from "react-icons/pi";
import { SelectableCard } from "../../base/cards/Card";
// TODO: Fix import path - import { IClinicModel } from "src/constants/models";

type IClinicCard = {
  data: IClinicModel;
  selected?: boolean;
  onSelect?: () => void;
};

const ClinicCard = (props: IClinicCard) => {
  const { data, selected, onSelect } = props;
  return (
    <SelectableCard selected={selected} onClick={onSelect}>
      <ImageBox src={data.avatarUrl || ""} />
      <Text fs="lg">{data.name}</Text>
      <Row flexY="center">
        <PiMapPin size={32} className="text-blue-500" />
        <Column flexX="start" gap={0}>
          <Text fo="50" fs="sm">
            {data.distance}
          </Text>
          <Text fo="60">{data.address}</Text>
        </Column>
      </Row>
    </SelectableCard>
  );
};

export default ClinicCard;

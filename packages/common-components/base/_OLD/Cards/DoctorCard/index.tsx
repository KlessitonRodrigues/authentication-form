import { Column, Row } from "../../base/containers/Flex";
import { RoundedImageBox } from "../../base/images/ImageBox";
import Text from "../../base/text/Text_2";
import { SelectableCard } from "../../base/cards/Card";
// TODO: Fix import path - import { IDoctorModel } from "src/constants/models";

type IDoctorCard = {
  data?: IDoctorModel;
  selected?: boolean;
  onSelect?: () => void;
};

const DoctorCard = (props: IDoctorCard) => {
  const { data, selected, onSelect } = props;

  return (
    <SelectableCard selected={selected} onClick={onSelect}>
      <Row>
        <RoundedImageBox src={data?.avatarUrl || ""} className="max-w-16" />
        <Column flexX="start" gap={0}>
          <Text fs="lg">{data?.name}</Text>
          <Text fs="sm" fo="60">
            {data?.specialty}
          </Text>
        </Column>
      </Row>
      <Row gap={1} className="mt-4">
        <Text tag="span" fo="50">
          A partir de
        </Text>
        <Text fo="80" fc="blue">
          R$ {data?.price}
        </Text>
      </Row>
    </SelectableCard>
  );
};

export default DoctorCard;

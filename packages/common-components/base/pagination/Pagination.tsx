import { Button } from "../buttons/Button";
import { Row } from "../containers/Flex";
import { Icons } from "../icons/IconMap";
import { Text } from "../text/Text";

interface PaginationProps {
  currentPage: number;
  lastPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination = (props: PaginationProps) => {
  const { currentPage, lastPage, onPageChange } = props;

  return (
    <Row flexX="end">
      <Button
        ghost
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Icons icon="caretLeft" size="16" />
      </Button>
      <Button size="sm" color="primary">
        <Text bold>{currentPage}</Text>
      </Button>
      <Button
        ghost
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === lastPage}
      >
        <Icons icon="caretRight" size="16" />
      </Button>
      <Button
        ghost
        size="sm"
        onClick={() => onPageChange(currentPage + 5)}
        disabled={currentPage + 5 > lastPage}
      >
        <Icons icon="skipRight" size="16" />
      </Button>
      <Button
        ghost
        size="sm"
        onClick={() => onPageChange(lastPage)}
        disabled={currentPage === lastPage}
      >
        <Icons icon="caretLineRight" size="16" />
      </Button>
    </Row>
  );
};

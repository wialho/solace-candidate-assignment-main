import { Button } from "./ui/button";
import {
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from "react-icons/hi2";

export interface IPageGroupProps {
  page: number;
  recordsDisplay: number;
  limit: number;
  onClick: (e: number) => void;
}

export const PageGroup = ({
  page,
  recordsDisplay,
  limit,
  onClick,
}: IPageGroupProps) => {
  return (
    <div className="flex flex-row align-bottom gap-1 justify-end">
      {page !== 0 && (
        <Button onClick={() => onClick(0)}>
          <HiOutlineChevronDoubleLeft />
        </Button>
      )}
      {page !== 0 && (
        <Button onClick={() => onClick(page - 1)}>
          <HiOutlineChevronLeft />
        </Button>
      )}
      {recordsDisplay === limit && (
        <Button onClick={() => onClick(page + 1)}>
          <HiOutlineChevronRight />
        </Button>
      )}
    </div>
  );
};

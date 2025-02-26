import React from "react";
import ReactPaginate from "react-paginate";
import { Button, Box } from "@chakra-ui/react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
interface PaginationProps {
  pageCount: number;
  onPageChange: (selected: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ pageCount, onPageChange }) => {
  return (
    <Box display="flex" justifyContent="end" mt={4}>
      <ReactPaginate
        previousLabel={
          <Button colorScheme="blue">
            <MdKeyboardArrowLeft />
          </Button>
        }
        nextLabel={
          <Button colorScheme="blue">
            <MdKeyboardArrowRight />
          </Button>
        }
        breakLabel="..."
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        onPageChange={(event) => onPageChange(event.selected)}
        containerClassName="pagination flex gap-4 justify-center items-center"
        activeClassName="active bg-[#F6F6F6] px-3 rounded-md py-1"
      />
    </Box>
  );
};

export default Pagination;

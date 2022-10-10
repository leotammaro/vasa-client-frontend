import {
  Flex,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Image,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import React from "react";
import { useTable } from "react-table";
import ellipsis from "../assets/ellipsis.svg";

function TableData({ data, columns }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      {data.length > 0 && (
        <Flex justifyContent={"center"} w="100%" minW={600} paddingTop={10}>
          <Table
            {...getTableProps()}
            minW={600}
            w="100%"
            cellSpacing={0}
            borderRadius={16}
          >
            <Thead bg="#F9F9F9" w="100%" h={56}>
              {
                // Loop over the header rows
                headerGroups.map((headerGroup) => (
                  // Apply the header row props
                  <Tr {...headerGroup.getHeaderGroupProps()}>
                    {
                      // Loop over the headers in each row
                      headerGroup.headers.map((column) => (
                        // Apply the header cell props
                        <Th
                          {...column.getHeaderProps()}
                          fontSize={12}
                          padding={0}
                        >
                          {
                            // Render the header
                            column.render("Header")
                          }
                        </Th>
                      ))
                    }
                    <Th></Th>
                  </Tr>
                ))
              }
            </Thead>
            <Tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <Tr {...row.getRowProps()}>
                    {row.cells.map((cell, index) => {
                      return (
                        <Td
                          key={index}
                          {...cell.getCellProps()}
                          padding={15}
                          textAlign="center"
                          fontSize={12}
                        >
                          {cell.render("Cell")}
                        </Td>
                      );
                    })}
                    <Td>
                      <Menu>
                        <MenuButton
                          _hover={{ cursor: "pointer", opacity: 1 }}
                          _active={{ opacity: 1 }}
                          opacity={0.5}
                          as={Button}
                          rightIcon={<Image src={ellipsis} w={15} h={15} />}
                          border="none"
                          background="none"
                        />
                        <MenuList fontSize={12} zIndex={100}>
                          <MenuItem margin={3} padding={5}>
                            Editar
                          </MenuItem>
                          <MenuItem margin={3} padding={5}>
                            Borrar
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </Flex>
      )}
    </>
  );
}

export default TableData;

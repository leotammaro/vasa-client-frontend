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
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useTable } from "react-table";
import ellipsis from "../assets/ellipsis.svg";
import empty from "../assets/empty.svg";

function TableData({ tableData, columnsData }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns: columnsData, data: tableData });

  return (
    <>
      {tableData.length > 0 ? (
        <Flex justifyContent={"center"} w="100%" minW={600} paddingTop={10}>
          <Table
            {...getTableProps()}
            minW={500}
            w="100%"
            cellSpacing={0}
            borderRadius={16}
          >
            <Thead bg="#F9F9F9" w="100%" h={15}>
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
                          textAlign="center"
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
                        <MenuList
                          fontSize={10}
                          zIndex={100}
                          minWidth="100px"
                          maxW={"150px"}
                          gap={3}
                        >
                          <MenuItem borderRadius={7} border="none">
                            Editar
                          </MenuItem>
                          <MenuItem borderRadius={7} border="none">
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
      ) : (
        <Flex direction="column" alignItems="center">
          <Image src={empty} height={100} />
          <Text>No se encontraron resultados</Text>
        </Flex>
      )}
    </>
  );
}

export default TableData;

import { Flex, Spinner } from "@chakra-ui/react";
import React from "react";
import InputSearch from "./InputSearch";
import TableData from "../Table";
import debounce from "lodash.debounce";

function TableFiltering({
  placeholder,
  setNewData,
  getValue,
  dataTable,
  dataColumns,
  value,
  children,
  deleteValue,
}) {
  const [inputValue, setInputValue] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  const debounceKeyPhrase = React.useMemo(
    () =>
      debounce((value) => {
        setLoading(true);
        getValue(value).then((response) => {
          setNewData(response);
          setLoading(false);
        });
      }, 500),
    []
  );

  React.useEffect(() => {
    debounceKeyPhrase(inputValue);
    return () => {
      debounceKeyPhrase.cancel();
    };
  }, [inputValue, debounceKeyPhrase]);

  const tableData = React.useMemo(() => {
    return dataTable(value);
  }, [value]);

  return (
    <Flex direction="column" margin={20}>
      <Flex justifyContent="flex-end" gap={5}>
        {children}
        <InputSearch
          placeholder={placeholder}
          setInputValue={setInputValue}
          inputValue={inputValue}
        />
      </Flex>

      {!loading ? (
        <TableData
          columnsData={dataColumns}
          tableData={tableData}
          setNewData={setNewData}
          deleteValue={deleteValue}
        />
      ) : (
        <Spinner alignSelf="center" marginTop={10} />
      )}
    </Flex>
  );
}

export default TableFiltering;

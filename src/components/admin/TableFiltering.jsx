import { Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import InputSearch from "./InputSearch";
import TableData from "../Table";
import debounce from "lodash.debounce";

function TableFiltering({
  placeholder,
  setValue,
  getValue,
  dataTable,
  dataColumns,
  value,
}) {
  const [inputValue, setInputValue] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  const debounceKeyPhrase = React.useMemo(
    () =>
      debounce((value) => {
        setLoading(true);
        getValue(value).then((response) => {
          setValue(response);
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
      <InputSearch
        placeholder={placeholder}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
      {!loading && (
        <TableData columnsData={dataColumns} tableData={tableData} />
      )}
    </Flex>
  );
}

export default TableFiltering;

import { Collapse, Table } from "antd";
import { useState, useEffect, useRef } from "react";
import EditableCell from "./EditableCell";
import TableColumns from "../utils/TranslateTable/columns";
import {
  updateMultipleValues,
  updateSingleValue,
  createDataPoint,
} from "../utils/TranslateTable/functions";

const { Panel } = Collapse;
const QuestionField = ({ questions, questionsTranslated, handleUpdate }) => {
  const [dataSource, setDataSource] = useState([]);
  function handleChange(value, index, valueEdited, indexForMultiple) {
    if (valueEdited !== "values" && valueEdited !== "options") {
      updateSingleValue(valueEdited, questionsTranslated, index, value);
    } else {
      updateMultipleValues(
        valueEdited,
        questionsTranslated,
        index,
        value,
        indexForMultiple
      );
    }
    handleUpdate([...questionsTranslated]);
  }
  const columns = TableColumns().map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleChange: handleChange,
      }),
    };
  });
  let dataPoint = useRef([]);
  const components = {
    body: {
      cell: EditableCell,
    },
  };

  useEffect(() => {
    questions.forEach((question, index) => {
      dataPoint.current.push(createDataPoint(question, index));
    });
  }, [questions]);

  useEffect(() => {
    setDataSource(dataPoint.current);
  }, []);

  return (
    <Collapse>
      {questions.map((question, index) =>
        question.type === "hidden" ? (
          ""
        ) : (
          <Panel header={question.key} key={index}>
            <Table
              components={components}
              columns={columns}
              dataSource={dataSource[index]}
            />
          </Panel>
        )
      )}
    </Collapse>
  );
};

export default QuestionField;

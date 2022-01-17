import { Collapse, Table } from "antd";

import TableColumns from "../utils/TranslateTable/columns";
import {
  updateMultipleValues,
  updateSingleValue,
  createDataPoint,
} from "../utils/TranslateTable/functions";

const { Panel } = Collapse;
const QuestionField = ({ questions, questionsTranslated, handleUpdate }) => {
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
  const columns = TableColumns(handleChange);
  return (
    <Collapse>
      {questions.map((question, index) =>
        question.type === "hidden" ? (
          ""
        ) : (
          <Panel header={question.key} key={index}>
            <Table
              columns={columns}
              dataSource={createDataPoint(question, index)}
            />
          </Panel>
        )
      )}
    </Collapse>
  );
};

export default QuestionField;

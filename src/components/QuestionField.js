import { Collapse, Table, Input, Col } from "antd";

function updateSingleValue(valueEdited, questionsTranslated, index, value) {
  if (valueEdited.startsWith("v_regex")) {
    questionsTranslated[index]["v_regex"]["err"] = value;
  } else if (valueEdited.startsWith("v_required")) {
    questionsTranslated[index]["v_required"]["err"] = value;
  } else if (valueEdited.startsWith("v_numeric")) {
    questionsTranslated[index]["v_numeric"]["err"] = value;
  } else {
    questionsTranslated[index][valueEdited] = value;
  }
}
function updateMultipleValues(
  valueEdited,
  questionsTranslated,
  index,
  value,
  valueAt
) {
  if (valueEdited === "values") {
    questionsTranslated[index][valueEdited][valueAt] = value;
  }
}
function createDataPoint(question, index) {
  let dataPoint = [];
  if (question.hint !== undefined) {
    dataPoint.push({
      key: 1,
      currentValue: `${question.hint}`,
      question: { ...question },
      type: "Hint",
      valueEdited: "hint",
      index: index,
    });
  }
  if (question.v_required !== undefined) {
    dataPoint.push({
      key: 2,
      currentValue: `${question.v_required.err}`,
      question: { ...question },
      type: "Required Message",
      valueEdited: "v_required.err",
      index: index,
    });
  }
  if (question.v_numeric !== undefined) {
    dataPoint.push({
      key: 3,
      currentValue: `${question.v_numeric.err}`,
      question: { ...question },
      type: "Invalid Number input message",
      valueEdited: "v_numeric.err",
      index: index,
    });
  }
  if (question.v_regex !== undefined) {
    dataPoint.push({
      key: 4,
      currentValue: `${question.v_regex.err}`,
      question: { ...question },
      type: "Invalid input message",
      valueEdited: "v_regex.err",
      index: index,
    });
  }
  if (question.type === "spinner") {
    dataPoint.push({
      key: 5,
      type: "Drop down values",
      currentValue: [question.values],
      valueEdited: "values",
      index: index,
    });
  }
  return dataPoint;
}
const { Panel } = Collapse;
const QuestionField = ({ questions, questionsTranslated, handleUpdate }) => {
  function handleChange(value, index, valueEdited, indexForMultiple) {
    if (valueEdited !== "values") {
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

  const columns = [
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Current Value",
      dataIndex: "currentValue",
      key: "currentValue",
      render: (text, record) => {
        return (
          <>
            {Array.isArray(record.currentValue) ? (
              <ol>
                {record.currentValue[0].map((item, id) => (
                  <li key={id}>{item}</li>
                ))}
              </ol>
            ) : (
              <p>{record.currentValue}</p>
            )}
          </>
        );
      },
    },
    {
      title: "Translation",
      key: "translation",
      dataIndex: "translation",
      render: (text, record) => {
        return (
          <>
            {Array.isArray(record.currentValue) ? (
              <ol>
                {record.currentValue[0].map((item, id) => (
                  <li key={id}>
                    <Col span={5}>
                      <Input
                        type="text"
                        name={record.type}
                        placeholder={item}
                        onChange={(e) =>
                          handleChange(
                            e.target.value,
                            record.index,
                            record.valueEdited,
                            id
                          )
                        }
                      />
                      <br />
                    </Col>
                  </li>
                ))}
              </ol>
            ) : (
              <Input
                type="text"
                name={record.type}
                placeholder={record.currentValue}
                onChange={(e) =>
                  handleChange(e.target.value, record.index, record.valueEdited)
                }
              />
            )}
          </>
        );
      },
    },
  ];
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

import { Collapse } from "antd";

const { Panel } = Collapse;
const QuestionField = ({ questions }) => {
  return (
    <Collapse>
      {questions.map((question, index) =>
        question.type === "hidden" ? (
          ""
        ) : (
          <Panel header={question.key} key={index}>
            {question.hint}
          </Panel>
        )
      )}
    </Collapse>
  );
};

export default QuestionField;

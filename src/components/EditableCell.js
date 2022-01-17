import { Input, Col } from "antd";

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleChange,
  ...restProps
}) => {
  let childNode = children;

  if (editable) {
    childNode = Array.isArray(record.currentValue) ? (
      <ol>
        {record.currentValue[0].map((item, itemId) => (
          <li key={itemId}>
            <Col span={12}>
              <Input
                type="text"
                name={record.type}
                placeholder={record.valueEdited === "values" ? item : item.text}
                onChange={(e) =>
                  handleChange(
                    e.target.value,
                    record.index,
                    record.valueEdited,
                    itemId
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
    );
  }
  return <td {...restProps}>{childNode}</td>;
};

export default EditableCell;

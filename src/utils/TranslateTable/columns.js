import { Col, Input } from "antd";

const columns = (handleChange) => {
  return [
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
                  <li key={id}>
                    {record.valueEdited === "values" ? item : item.text}
                  </li>
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
                {record.currentValue[0].map((item, itemId) => (
                  <li key={itemId}>
                    <Col span={12}>
                      <Input
                        type="text"
                        name={record.type}
                        placeholder={
                          record.valueEdited === "values" ? item : item.text
                        }
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
            )}
          </>
        );
      },
    },
  ];
};

export default columns;

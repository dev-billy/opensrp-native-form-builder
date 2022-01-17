const columns = () => {
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
      editable: true,
    },
  ];
};

export default columns;

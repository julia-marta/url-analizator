export const getHostTableData = (data) => {
  const tableData = data.reduce((acc, item, i) => {
    for (const key in item) {
      acc.push({ key: key + i, th: key, td: item[key] });
    }
    return acc;
  }, []);

  return tableData;
};

export const getTechTableData = (data) => {
  const tableData = data.reduce((acc, item, i) => {
    for (const key in item) {
      let finalObj = {
        key: key + i,
        th: key === "name" ? item[key] : key,
        td:
          key === "name"
            ? null
            : Array.isArray(item[key])
            ? item[key].join(", ")
            : item[key]
            ? item[key]
            : "-",
        colspan: key === "name" ? 2 : null,
      };
      acc.push(finalObj);
    }
    return acc;
  }, []);

  return tableData;
};

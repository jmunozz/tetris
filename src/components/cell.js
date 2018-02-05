const Cell = (cell) => {

  const {empty} = cell;
  const cellStyle = {
    border: "solid gray 1px",
    width: "20px",
    height: "20px",
    display: "flex",
    borderRadius: "0",
    margin: "0",
  };

  if (empty) { 
    cellStyle.backgroundColor = "LightSkyBlue"; 
    cellStyle.border = "4px solid aqua"; 
    cellStyle.borderBottom = "4px solid DarkCyan "; 
    cellStyle.borderLeft = "4px solid DarkCyan";
  }

  return <div style={cellStyle}></div>
}

export default Cell;

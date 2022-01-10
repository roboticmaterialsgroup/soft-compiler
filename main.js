//Table means  generation of Booleantable with 1 and 0
//Graph means the pnematic wiring diagram

currentNum = 2;

function main() {
  createTable(currentNum);
}

async function applyBooleanSimplifier(aExpr) {
  link =
    "https://mfkfrh58c2.execute-api.us-east-2.amazonaws.com/deployer?expr=" +
    aExpr;
  const response = await fetch(link, {
    mode: "cors",
  });
  var result = await response.json();
  document.getElementById("booleanExpression").value= result;
  console.log(result);
  console.log("=========="+document.getElementById("booleanExpression").value);
  orSplit(result);
}

function orSplit(expr) {
  var graph = document.getElementById("graph");
  expr = expr.split("|");
  cursed = [];
  for (var i = 0; i < expr.length; i++) {
    result = andSplit(expr[i].replace(")", "").replace("(", ""));
    console.log(result);
    cursed.push(result);
	console.log("===result === "+result);
  }

  // console.log(cursed);

  // console.log(tables);

  while (cursed.length > 1) {
    newTables = [];
    for (var i = 0; i < cursed.length - 1; i += 2) {
      vMergedTable = vMerger(cursed[i], cursed[i + 1]);
      andTable = hMerger(vMergedTable, OrGrapher());
      newTables.push(andTable);
	  console.log("=====andTable =="+andTable);
    }

    if (cursed.length % 2 == 1) {
      newTables.push(cursed[cursed.length - 1]);
    }
    cursed = newTables;
  }
  for (var i = 0; i < cursed.length; i++) {
    graph.appendChild(cursed[i]);
  }
}

function andSplit(expr) {
  expr = expr.split("&");
  tables = [];
  for (var i = 0; i < expr.length; i++) {
    currExpr = expr[i];
    if (currExpr.includes("~")) {
      tables.push(
        hMerger(letterGrapher(currExpr.replace("~", "")), notGrapher())
      );
    } else {
      tables.push(letterGrapher(currExpr));
    }
  }

  while (tables.length > 1) {
    newTables = [];
    for (var i = 0; i < tables.length - 1; i += 2) {
      vMergedTable = vMerger(tables[i], tables[i + 1]);
      andTable = hMerger(vMergedTable, andGrapher());
      newTables.push(andTable);
    }

    if (tables.length % 2 == 1) {
      newTables.push(tables[tables.length - 1]);
    }
    tables = newTables;
  }

  return tables[0];
}

function hMerger(left, right) {
  var table = document.createElement("table");
  // table.style.float = "right";
  var row = table.insertRow();
  var cell1 = row.insertCell();
  var cell2 = row.insertCell();
  cell1.appendChild(left);
  cell2.appendChild(right);
  return table;
}
function vMerger(up, down) {
  var table = document.createElement("table");
  table.style.float = "right";
  var row1 = table.insertRow();
  var cell1 = row1.insertCell();
  cell1.appendChild(up);
  var row2 = table.insertRow();
  var cell2 = row2.insertCell();
  cell2.appendChild(down);
  return table;
}

function notGrapher() {
  var table = document.createElement("table");
  table.style.float = "right";
  var row = table.insertRow();
  var cell = row.insertCell();
  var img = new Image();
  img.src = "letters/Not.png";
  img.style.height = "100px";
  img.style.width = "200px";
  cell.appendChild(img);
  return table;
}

function letterGrapher(expr) {
  var table = document.createElement("table");
  table.style.float = "right";
  var row = table.insertRow();
  var cell = row.insertCell();
  var img = new Image();
  img.src = "letters/" + expr + ".png";
  // THIS ISN'T SPAGHETT CODE AT ALL
  // img.src = "letters/B.png";
  img.style.height = "100px";
  img.style.width = "100px";
  cell.appendChild(img);
  return table;
}

function andGrapher() {
  var table = document.createElement("table");
  table.style.float = "right";
  var row = table.insertRow();
  var cell = row.insertCell();
  var img = new Image();
  img.src = "letters/And.png";
  img.style.height = "200px";
  img.style.width = "100px";
  cell.appendChild(img);
  return table;
}

function OrGrapher() {
  var table = document.createElement("table");
  table.style.float = "right";
  var row = table.insertRow();
  var cell = row.insertCell();
  var img = new Image();
  img.src = "letters/Or.png";
  img.style.height = "200px";
  img.style.width = "100px";
  cell.appendChild(img);
  return table;
}


//   cell.rowSpan = span;
//   var img = new Image();
//   img.src = path;
//   img.style.height = "112px";
//   img.style.width = "150px";
//   cell.appendChild(img);

// GRAPHER

// GRAPHER
// function orSplitGrapher(expr) {
//   orSplit = expr.split("|");
//   for (var i = 0; i < orSplit.length; i++) {
//     andSplitGrapher(orSplit[i].replace(")", "").replace("(", ""));
//   }

//   // orSplitGrapher(orSplit);
// }

// // function orSplitGrapher(orSplit) {
// //   var graph = document.getElementById("graph");
// //   var table = document.createElement("table");
// //   var row = table.insertRow();
// //   format1by1(row, "letters/A.png");
// //   format1by1(row, "letters/A.png");

// //   graph.appendChild(table);
// // }

// function andSplitGrapher(andString) {
//   var graph = document.getElementById("graph");
//   var table = document.createElement("table");
//   table.style.borderCollapse = "collapse";

//   andSplit = andString.split("&");
//   for (var i = 0; i < andSplit.length; i++) {
//     var row = table.insertRow();
//     var cell = row.insertCell();
//     if (i % 2 == 0) {
//       cell.appendChild(notSplitGrapher(andSplit[i], "down"));
//       // var cell = row.insertCell();
//       // cell.rowSpan = 2;
//       // cell.appendChild(formatGate(row, "letters/And.png"));
//     } else {
//       cell.appendChild(notSplitGrapher(andSplit[i], "up"));
//     }
//   }

//   for (var i = 0; i < Math.floor(Math.sqrt(andSplit.length)); i++) {
//     var rowSpan = 2 * i + 1;
//     // ADD CONNECTIONS
//     for (var j = 0; j < table.rows.length; j += 2 ** i) {
//       if (j % 2 == 0) {
//         // formatVLine(table.rows[j], rowSpan, "letters/Line.png");
//         formatGate(table.rows[j], rowSpan + 1, "letters/And.png");
//       } else {
//         // formatVLine(table.rows[j], rowSpan, "letters/Line.png");
//       }
//     }
//     // ADD AND GATES
//     // for (var j = 0; j < table.rows.length; j += )

//     // var secondStart = 1;
//     // var cell = table.rows[0].insertCell();
//     // cell.rowSpan = rowspan;
//   }
//   // for ()

//   console.log(Math.floor(Math.sqrt(andSplit.length)));

//   graph.appendChild(table);
// }

// function formatGate(row, span, path) {
//   var cell = row.insertCell();
//   cell.rowSpan = span;
//   var img = new Image();
//   img.src = path;
//   img.style.height = "112px";
//   img.style.width = "150px";
//   cell.appendChild(img);
// }

// function notSplitGrapher(notString, dir) {
//   var table = document.createElement("table");
//   table.style.borderCollapse = "collapse";
//   var row = table.insertRow();
//   table.style.float = "right";

//   format1by1(row, "letters/A.png");
//   if (notString.includes("~")) {
//     formatConnector(row, 1, "letters/Not.png");
//   }

//   // if (dir == "down") {
//   //   formatConnector(row, "letters/Down.png");
//   // } else if (dir == "up") {
//   //   formatConnector(row, "letters/Up.png");
//   // }
//   return table;
//   // graph.appendChild(table);
// }

// function formatConnector(row, span, path) {
//   var cell = row.insertCell();
//   cell.rowSpan = span;
//   var img = new Image();
//   img.src = path;
//   img.style.height = (span * 100).toString() + "px";
//   img.style.width = "150px";
//   cell.appendChild(img);
// }

// function formatVLine(row, span, path) {
//   var cell = row.insertCell();
//   cell.rowSpan = span;
//   var img = new Image();
//   img.src = path;
//   img.style.height = "50px";
//   img.style.width = "10px";
//   cell.appendChild(img);
// }

// function format1by1(row, path) {
//   var cell = row.insertCell();
//   var img = new Image();
//   img.src = path;
//   img.style.height = "50px";
//   img.style.width = "80px";
//   cell.appendChild(img);
// }

// GRAPHER

function onClickGenerateButton() {


  var table = document.getElementById("table");
  var graph = document.getElementById("graph");
	graph.innerHTML = "";

  var col = table.rows[1].cells.length - 1;
  var strBuilder = "";
  for (var i = 1; i < table.rows.length; i++) {
    var selection = table.rows[i].cells[col].childNodes[0];
    if (selection.style.backgroundColor.toString() == "rgb(187, 199, 164)") {
      if (strBuilder != "") {   
        strBuilder += "or";
      }
      strBuilder += getBooleanExpr(table.rows[i], col);
    }
  }
  applyBooleanSimplifier(strBuilder);
}

function getBooleanExpr(row, col) {
  const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var boolBuilder = "";
  for (var i = 0; i < col; i++) {
    var bool = row.cells[i].childNodes[0].textContent;
    if (bool == "1") {
      if (boolBuilder != "") {
        boolBuilder += "and";
      } else {
        boolBuilder += "(";
      }
      boolBuilder += ALPHABET.charAt(i);
    } else {
      if (boolBuilder != "") {
        boolBuilder += "and";
      } else {
        boolBuilder += "(";
      }
      boolBuilder += "not" + ALPHABET.charAt(i);
    }
  }
  if (boolBuilder != "") {
    boolBuilder += ")";
  }
  return boolBuilder;
}

function createTable(tableRowNum) {
  removeExistingTable();
  // var body = document.body;
  var body = document.getElementById("tableDiv");
  var table = document.createElement("table");
  table.setAttribute("id", "table");
  table.style.width = "1000px";
  table.style.borderCollapse = "collapse";
  table.style.marginLeft = "auto";
  table.style.marginRight = "auto";
  table.style.marginTop = "auto";
  table.style.marginBottom = "auto";

  addTableHeaders(table, tableRowNum);
  addTableBinaries(table, tableRowNum);

  body.appendChild(table);
}

function addTableBinaries(table, tableRowNum) {
  var counter = 0;

  for (var i = 0; i < Math.pow(2, tableRowNum); i++) {
    var row = table.insertRow();
    // row.style.display = "inline-block";
    // row.style.height = "30px";

    var binary = (counter >>> 0).toString(2);
    while (binary.length < tableRowNum) {
      binary = "0" + binary;
    }
    for (var j = 0; j < tableRowNum; j++) {
      var rowCell = row.insertCell();
      rowCell.appendChild(document.createTextNode(binary.charAt(j)));
      formatBinaryCell(rowCell, counter, tableRowNum, j);
    }
    var rowCell = row.insertCell();

    // rowCell.innerHTML = '<input type ="text">';
    // rowCell.style.textAlign = "center";
    addResultOptions(rowCell);
    formatBinaryCell(rowCell, counter, tableRowNum, -1);
    counter++;
  }
}

function addResultOptions(cell) {
  var ld = document.createElement("div");
  var rd = document.createElement("div");

  formatResultOptions(ld);
  formatResultOptions(rd);

  ld.innerHTML = '<p class = "optionText" id = "1">1</p>';
  rd.innerHTML = '<p class = "optionText" id = "0">0</p>';

  assignResultCellFunctionality(ld, rd);

  cell.appendChild(ld);
  cell.appendChild(rd);
}

function assignResultCellFunctionality(ld, rd) {
  ld.onclick = ldOnClick;
  rd.onclick = rdOnClick;
}

function ldOnClick(e) {
  if (e.target.style.backgroundColor.toString() != "rgb(187, 199, 164)") {
    this.parentNode.childNodes[1].style.backgroundColor = this.style.backgroundColor;
    e.target.style.backgroundColor = "#BBC7A4";
  }
}

function rdOnClick(e) {
  if (e.target.style.backgroundColor.toString() != "rgb(187, 199, 164)") {
    this.parentNode.childNodes[0].style.backgroundColor = this.style.backgroundColor;
    e.target.style.backgroundColor = "#BBC7A4";
    e.target.style.borderRadius = "inherit";
  }
}

function formatResultOptions(el) {
  el.style.display = "inline-block";
  el.style.width = "50%";
  el.style.textAlign = "center";
  el.style.boxSizing = "border-box";
}

function addTableHeaders(table, tableRowNum) {
  const ALPHABET = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
  var row = table.insertRow();
  for (var i = 0; i < tableRowNum; i++) {
    var rowCell = row.insertCell();
    rowCell.appendChild(document.createTextNode(ALPHABET.charAt(i)));
    formatHeader(rowCell, i, tableRowNum);
  }
  var rowCell = row.insertCell();
  rowCell.appendChild(document.createTextNode("Output"));
  formatHeader(rowCell, -1, tableRowNum);
}

function removeExistingTable() {
  var existingTable = document.getElementById("table");
  if (existingTable != null) {
    existingTable.remove();
  }
}

function formatBinaryCell(rowCell, counter, tableRowNum, index) {
  var cellWidth = 10 / (tableRowNum + 1);
  rowCell.style.width = cellWidth + "px";
  rowCell.style.textAlign = "center";
  rowCell.style.fontFamily = "Arial";
  // rowCell.style.padding = "8px";

  if (index != -1) {
    rowCell.style.padding = "4px";
  } else {
    rowCell.style.padding = "0px";
    rowCell.style.margin = "0px";
  }

  if (counter % 2 == 0) {
    rowCell.style.backgroundColor = "#F2F5EA";
  } else {
    rowCell.style.backgroundColor = "#D6DBD2";
  }

  if (counter + 1 == Math.pow(2, tableRowNum) && index == 0) {
    rowCell.style.borderRadius = "0 0 0 10px";
  } else if (counter + 1 == Math.pow(2, tableRowNum) && index == -1) {
    rowCell.style.borderRadius = "0 0 10px 0";
  }

  if (index + 1 == tableRowNum) {
    rowCell.style.borderRight = "2px solid white";
  }
}

function formatHeader(rowCell, index, tableRowNum) {
  rowCell.style.backgroundColor = "#4A8FE7";
  // rowCell.style.border = "2px solid #4A8FE7";
  rowCell.style.fontSize = "24px";
  rowCell.style.color = "white";
  rowCell.style.textAlign = "center";
  rowCell.style.fontFamily = "Arial";

  var cellWidth = 300 / (tableRowNum + 1);
  rowCell.style.width = cellWidth + "px";

  // rowCell.style.width = "300px";
  rowCell.style.padding = "5px";
  if (index == 0) {
    rowCell.style.borderRadius = "10px 0 0 0";
  } else if (index == -1) {
    rowCell.style.borderRadius = "0 10px 0 0";
  }
}

function onClickDecreaseButton() {
  if (currentNum > 1) {
    currentNum--;
    createTable(currentNum);
  }
}

function onClickIncreaseButton() {
  currentNum++;
  createTable(currentNum);
}

// Assuming you want to merge cells
function MergeCellsInRow(rowToMerge) {
    const rows = document.querySelectorAll('.row');
    const cellsToMerge = rows[rowToMerge].querySelectorAll('.cell');
  
    // Remove existing cells in the row
    cellsToMerge.forEach(cell => {
      cell.remove();
    });
  
    // Create a new merged cell
    const newRow = document.createElement('div');
    newRow.classList.add('row');
  
    const mergedCell = document.createElement('div');
    mergedCell.classList.add('cell', 'merged-cell');
    mergedCell.textContent = longCat;
  
    newRow.appendChild(mergedCell);
  
    // Insert the new row with the merged cell
    const grid = document.querySelector('.grid');
    grid.insertBefore(newRow, rows[rowToMerge+1]); 
    mergeRow ++;
}

const cellCount = [];

function RowToSpan(x) {
  const table = document.getElementById('gridID');
  /* const iRows = table.getElementsByTagName('cell');
  let cellCount = document.getElementById('cell1');
  const firstCell = document.getElementById('cell1');
  console.log();
  firstCell.colSpan(4); */
  var dd = document.getElementById("cell0").colSpan = "4";
  var ee = document.getElementById("cell0");
  ee.textContent="abracadabra";
  console.log(ee);
/* console.log(cellCount);

  if (table && table.rows.length > 0) {
    const firstRow = table.rows[0];

    if (firstRow && firstRow.cells.length > 0) {
      const firstCell = firstRow.cells[0];
      firstCell.colSpan = 4; // Set the colspan attribute for the first cell
    } else {
      console.error('No cells found in the first row.');
    }
  } else {
    console.error('Table with ID "gridID" not found or has no rows.');
  } */
}


function deleteRow(x) {
var rowCollection = document.getElementsByClassName('row');
  if ( x >= 0) {
    var table = document.getElementById("<%= grid.ClientID %>");
    console.log(table.rowIndex);
/*     var rowDel = rowCollection[x]; // Access the specific row by index 'x'
    console.log(rowDel);
    rowDel.parentNode.removeChild(rowDel); // Remove the specific row element */
  } else {
    console.log('Row index out of range or negative');
  }
}
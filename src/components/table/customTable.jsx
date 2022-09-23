import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";

function CustomTable(props) {
	const [rowsPerPage, setRowsPerPage] = React.useState(5);

	const {rows, columns, enableSelectionOnRowClick, enableCheckBox} = props;
	console.log(columns);
	console.log(rows);
	return (
		<div style={{ height: 400, width: "100%"}}>
			<DataGrid
				rows={rows}
				columns={columns}
				pageSize={rowsPerPage}
				onPageSizeChange={(newPageSize) => setRowsPerPage(newPageSize)}
				rowsPerPageOptions={[5, 10, 25, 100]}
				checkboxSelection = {enableCheckBox}
				disableSelectionOnClick = {!enableSelectionOnRowClick}
				// rowHeight={50}
				getRowHeight={() => "auto"}
				disableColumnMenu={true}
			/>
			{/*<button onClick={handleChangeRowsPerPage}>ddd</button>*/}
		</div>
	);
}
// To define the data type of the prop for prop validation in react.
CustomTable.propTypes = {
	rows: PropTypes.array, // The row items of the table should come in the form of an array of objects.
	columns: PropTypes.array,
	enableSelectionOnRowClick: PropTypes.bool,
	enableCheckBox: PropTypes.bool
};

export default CustomTable;
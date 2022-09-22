import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";

function CustomTable(props) {
	const [rowsPerPage, setRowsPerPage] = React.useState(5);

	const {rows, columns} = props;
	console.log(columns);
	return (
		<div style={{ height: 400, width: "100%" }}>
			<DataGrid
				rows={rows}
				columns={columns}
				pageSize={rowsPerPage}
				onPageSizeChange={(newPageSize) => setRowsPerPage(newPageSize)}
				rowsPerPageOptions={[5, 10, 25, 100]}
				checkboxSelection = {true}
			/>
			{/*<button onClick={handleChangeRowsPerPage}>ddd</button>*/}
		</div>
	);
}
// To define the data type of the prop for prop validation in react.
CustomTable.propTypes = {
	rows: PropTypes.array, // The row items of the table should come in the form of an array of objects.
	columns: PropTypes.array
};

export default CustomTable;
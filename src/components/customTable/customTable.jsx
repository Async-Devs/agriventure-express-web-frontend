import * as React from "react";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import PropTypes from "prop-types";

/**
 * CustomTable component.
 *
 * @props Defined below in propTypes
 * @returns {React.ReactElement} DataGrid Component.
 */
function CustomTable(props) {
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	const [filterModel, setFilterModel] = React.useState();
	const {rows, columns, enableSelectionOnRowClick, enableCheckBox} = props;

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
				getRowHeight={({ id}) => {
					if (id % 2 === 0) {
						return null;
					}
					return null;
				}}
				disableColumnMenu={true}
				components={{
					Toolbar: GridToolbar,
				}}
				filterModel={filterModel}
				onFilterModelChange={(newFilterModel) => setFilterModel(newFilterModel)}
			/>
		</div>
	);
}
// To define the data type of the prop for prop validation in react.
CustomTable.propTypes = {
	/** The row items of the customTable should come in the form of an array of objects*/
	rows: PropTypes.array,
	/** The columns should be an array of objects */
	columns: PropTypes.array,
	/** The ability to make the row body clickable to make a selection*/
	enableSelectionOnRowClick: PropTypes.bool,
	/** Enable the checkbox column in the customTable*/
	enableCheckBox: PropTypes.bool
};

export default CustomTable;
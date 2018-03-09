import React from 'react';
import ReactTable from 'react-table'

const columns = [
    // {accessor: 'id', Header: 'User ID'},
    {accessor: 'firstName', Header: 'Name'},
    {accessor: 'email', Header: 'Email'},
    {accessor: 'department', Header: 'Department'},
    {accessor: 'position', Header: 'Title'}
];


// TODO: This needs to be connected to the retux store

// named export is for testing b/c it's not connected to the store
const UserTable = (props) => (

    <div style={{margin: '20px'}}>
        <ReactTable
            data={props.users}
            columns={columns}
            defaultSorted={[
                {
                    id: "firstName",
                    desc: false
                }
            ]}
            resizable={false}
            defaultPageSize={10}
            className="-striped -highlight"

            // https://github.com/react-tools/react-table#custom-props
            getTrProps={(state, rowInfo, column, instance) => (
                {
                    onClick: () => props.openUserDetailsModal(rowInfo.original)
                }
            )}
            // Component={()=> console.log('hey')}
        />
    </div>
);

export default UserTable;
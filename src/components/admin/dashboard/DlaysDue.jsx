import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, Paper } from '@mui/material';

const DlaysDue = () => {
  // Define columns for the Data Grid
  const columns = [
    {
      field: 'caseNumber',
      headerName: 'Case Number',
      width: 180,
      editable: false,
    },
    {
      field: 'caseTitle',
      headerName: 'Case Title',
      width: 250,
      editable: false,
    },
    {
      field: 'hearingDate',
      headerName: 'Hearing Date',
      width: 150,
      editable: false,
    },
    {
      field: 'adjournments',
      headerName: 'No. of Adjournments',
      width: 200,
      editable: false,
    },
    {
      field: 'reason',
      headerName: 'Reason for Last Adjournment',
      width: 280,
      editable: false,
    },
    {
      field: 'nextAction',
      headerName: 'Next Action',
      width: 150,
      editable: false,
      renderCell: (params) => (
        <strong style={{ color: '#1976d2' }}>
          {params.value}
        </strong>
      ),
    },
  ];

  // Sample data based on the provided content
  const rows = [
    {
      id: 1,
      caseNumber: 'CR/138/2025/DEL/056',
      caseTitle: 'Rajesh Sharma v. Anil Kumar',
      hearingDate: 'June 10, 2025',
      adjournments: '0 (pre-trial stage)',
      reason: 'N/A (summons issuance pending)',
      nextAction: 'Action',
    },
    {
      id: 2,
      caseNumber: 'CR/138/2025/DEL/056',
      caseTitle: 'Rajesh Sharma v. Anil Kumar',
      hearingDate: 'June 10, 2025',
      adjournments: '0 (pre-trial stage)',
      reason: 'N/A (summons issuance pending)',
      nextAction: 'Action',
    },
  ];

  return (
    <section>
      <div className='w-full space-top'>

        <h2 className='text-2xl lg:text-3xl font-semibold mb-2  pb-4 lg:pb-6'>
          Delays Due to Unnecessary Adjournments
        </h2>
        <Paper >


          <DataGrid
            rows={rows}

          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5, 10, 25]}
          disableRowSelectionOnClick
          sx={{
            border: 0,
            '& .MuiDataGrid-cell': {
              borderBottom: '1px solid #e0e0e0',
            },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: '#1976d2',
              borderBottom: '2px solid #e0e0e0',
            },
            '& .MuiDataGrid-footerContainer': {
              borderTop: '1px solid #e0e0e0',
            },
            '& .MuiDataGrid-columnHeaderRow': {
              backgroundColor: 'green',
            }, 
            }}


          />
        </Paper>
      </div>
    </section>
  );
};

export default DlaysDue;

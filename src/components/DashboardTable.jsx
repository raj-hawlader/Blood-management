import React from 'react';
import { Table, Button, message } from 'antd';
import axios from 'axios';

const DashboardTable = ({ data, onDelete }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/donors/${id}`);
      message.success('Donor deleted successfully');
      if (onDelete) onDelete(id);
    } catch (error) {
      message.error('Failed to delete donor');
      console.error('Delete error:', error);
    }
  };

  const columns = [
    // ... existing columns ...
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Button 
          type="primary" 
          danger 
          onClick={() => handleDelete(record.id)}
        >
          Delete
        </Button>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default DashboardTable; 
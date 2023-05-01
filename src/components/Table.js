import React, { useState } from 'react';

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>URL</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const { linkData, removeLink, searchTerm } = props;

  const filteredData = linkData.filter((link) => {
    return link.name.includes(searchTerm) || link.URL.includes(searchTerm);
  });

  const rows = filteredData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>
          <a href={row.URL}>{row.URL}</a>
        </td>
        <td>
          <button onClick={() => props.removeLink(index)}>Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

const Table = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={handleSearchChange} 
        placeholder="Search by name or URL" 
      />
      <table>
        <TableHeader />
        <TableBody 
          linkData={props.linkData} 
          removeLink={props.removeLink} 
          searchTerm={searchTerm} 
        />
      </table>
    </div>
  );
};

export default Table;

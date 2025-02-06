import React from 'react'

const Table = ( {columns, data, className}) => {
  return (
 
    <div className={`overflow-x-auto   text-sm ${className}`}>
       <table className="table ">
       <thead>
        <tr>
            {columns?.map((col, colIndex)=>(
                <th key={colIndex}>
                    {col.header}
                </th>
            ))}
        </tr>
       </thead>
       <tbody>
        {data?.map((row, rowIndex)=>(
            <tr key={rowIndex}>
                {columns?.map((col, colIndex)=>(
                    <td key={colIndex}>
                        {row[col.tag]}
                    </td>
                ))}
            </tr>
        ))}
       </tbody>
       </table>
    </div>
  )
}

export default Table

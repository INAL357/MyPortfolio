import React from "react";

const TableData = () => {
  const users = [
    {
      id: 1,
      col1: "USER NAME",
      col2: "INAL MENDONCA",
    },
    {
      id: 2,
      col1: "ROLE",
      col2: "SOFTWARE DEVELOPER / TESTING",
    },
    {
      id: 3,
      col1: "LOCATION",
      col2: "OUD METHA, DUBAI",
    },
    {
      id: 4,
      col1: "STATUS",
      col2: "OPEN",
    },
  ];

  return (
    <tbody>
      {users.map((data) => (
        <tr
          key={data.id}
          className="border-b border-slate-700 last:border-b-0"
        >
          {/* Left column */}
          <td
            className="
              w-1/3
              py-4
              text-sm
              tracking-wider
              text-slate-500
            "
          >
            {data.col1}
          </td>

          {/* Right column */}
          <td
            className="
              py-4
              text-right
              text-sm
              tracking-wider
              text-slate-200
            "
          >
            {data.col2}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableData;
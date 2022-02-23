import React from "react";
import { Stub } from "components/Stub";
import "./style.scss";

export const SkeletonTable = () => {
  return (
    <div className="SkeletonTable">
      <table>
        <thead>
          <tr>
            <th>
              <Stub height={2} width={2} />
            </th>
            <th>
              <Stub height={2} />
            </th>
            <th>
              <Stub height={2} />
            </th>
            <th>
              <Stub height={2} />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td width={40}>
              <Stub height={2} width={2} />
            </td>
            <td>
              <Stub height={2} />
            </td>
            <td>
              <Stub height={10} />
            </td>
            <td>
              <Stub height={2} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

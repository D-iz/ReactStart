import React from "react";
import "./style.scss";
import TableRow from "./TableRow";
import Checkbox from "components/Checkbox";
import { ICreative } from "redux/_global/ICreative";
import { CREATIVES_TABLE_HEADER } from "constants/environment";
import { ICreativesTableProps } from "components/CreativesTable/ICreativesTableProps";

const CreativesTable = ({
  creatives,
  allCheckboxState,
  campaignsOptions,
  allCheckboxHandler,
}: ICreativesTableProps) => {
  return (
    <div className="CreativesTable">
      <table>
        <thead>
          <tr>
            <th>
              <Checkbox
                checked={allCheckboxState}
                onChange={allCheckboxHandler}
              />
            </th>
            {CREATIVES_TABLE_HEADER.map((i) => (
              <th key={i}>
                <b>{i}</b>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {creatives.map((item: ICreative) => (
            <TableRow
              key={item.id}
              item={item}
              campaignsOptions={campaignsOptions}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CreativesTable;

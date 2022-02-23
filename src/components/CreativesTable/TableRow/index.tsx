import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CampaignsSelect from "components/CampaignsSelect";
import Checkbox from "components/Checkbox";
import Link from "components/Link";
import Img from "components/Img";
import {
  ICreativeCampaignsPayload,
  ICreativeCheckPayload,
} from "redux/creatives/initialState";
import { ITableRowProps } from "components/CreativesTable/TableRow/ITableRowProps";
import { CREATIVES } from "redux/creatives/actionTypes";
import { ICreative } from "redux/_global/ICreative";
import { IOption } from "redux/_global/IOption";
import "./style.scss";
import ReactTooltip from "react-tooltip";

const TableRow = ({ item, campaignsOptions }: ITableRowProps) => {
  const dispatch = useDispatch();
  const [checkboxState, setCheckboxState] = useState(item.checked);
  const setCheckboxStateCreative = (payload: ICreativeCheckPayload) =>
    dispatch({ type: CREATIVES.SET_CHECKBOX_STATE, payload });
  const setCampaignsSelected = (payload: ICreativeCampaignsPayload) =>
    dispatch({ type: CREATIVES.SET_CAMPAIGNS_SELECTED, payload });
  const checkboxHandler = (item: ICreative) => () => {
    const payload: ICreativeCheckPayload = {
      creativeId: item.id,
      checked: !item.checked,
    };
    setCheckboxStateCreative(payload);
    setCheckboxState(!checkboxState);
  };
  const campaignsHandler = (selectedCampaigns: IOption[]) => {
    const payload: ICreativeCampaignsPayload = {
      creativeId: item.id,
      campaigns: selectedCampaigns,
    };
    setCampaignsSelected(payload);
  };
  const campaignsList = item.campaigns.map((i) => i.label);
  return (
    <tr className="TableRow">
      <td>
        <Checkbox
          checked={item.checked ?? false}
          onChange={checkboxHandler(item)}
        />
      </td>
      <td>
        <Link href={item.url}>{item.name}</Link>
      </td>
      <td>
        <Link href={item.url}>
          <Img src={item.preview_url} />
        </Link>
      </td>
      <td className="TableRow__select">
        <span data-tip={campaignsList}>{item.campaigns.length} campaigns</span>
        <CampaignsSelect
          options={campaignsOptions}
          campaignsHandler={campaignsHandler}
          selected={item.selectedCampaigns ?? []}
        />
        <ReactTooltip
          className="reactTooltip"
          globalEventOff="click"
          html={true}
        />
      </td>
    </tr>
  );
};

export default TableRow;

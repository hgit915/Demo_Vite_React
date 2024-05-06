import PropTypes from "prop-types";
import React, { memo } from "react";

import { InfoIconWrapper } from "./style";
import BedIcon from "@mui/icons-material/Bed";
import PersonIcon from "@mui/icons-material/Person";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";

const BasicInfo = memo((props) => {
  const { area, bed, maxPeople } = props;
  return (
    <InfoIconWrapper>
      <div>
        <AspectRatioIcon color="primary" />
        {area}
      </div>
      <div>
        <BedIcon color="primary" />
        {bed}
      </div>
      <div>
        <PersonIcon color="primary" />
        {maxPeople}人
      </div>
    </InfoIconWrapper>
  );
});

BasicInfo.propTypes = {
  area: PropTypes.string,
  bed: PropTypes.string,
  maxPeople: PropTypes.number,
};
export default BasicInfo;

import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const Checkmark = props => {
  return (
    <SvgIcon viewBox="0 0 24 24" color="primary">
      <defs>
        <path
          d="M6.0553379,16.4873526 C5.70320669,16.4873526 5.36454498,16.3461152 5.11670619,16.0928886 L0.374672561,11.2461777 C-0.132550319,10.7274096 -0.123698933,9.89614902 0.394684389,9.38892614 C0.913067711,8.88208811 1.74471312,8.89132433 2.25193599,9.40932281 L5.92526102,13.1638497 L15.4405005,0.523686195 C15.8765275,-0.0555022982 16.6993215,-0.172494525 17.2796645,0.264302112 C17.858853,0.700329064 17.9750756,1.52389277 17.5390486,2.10308126 L7.10480436,15.9643511 C6.87428349,16.2699163 6.52215228,16.4600287 6.14038818,16.4850435 C6.11152496,16.4865829 6.08343143,16.4873526 6.0553379,16.4873526 Z"
          id="path-1"
        />
      </defs>
      <g transform="translate(3 4)">
        <mask id="mask-2" fill="#fff">
          <use xlinkHref="#path-1" />
        </mask>
        <g id="Colors/Cyan-High" mask="url(#mask-2)">
          <rect
            width="24"
            height="24"
            transform="translate(-3 -4)"
            id="Rectangle-3-Copy-54"
          />
        </g>
      </g>
    </SvgIcon>
  );
};

export default Checkmark;

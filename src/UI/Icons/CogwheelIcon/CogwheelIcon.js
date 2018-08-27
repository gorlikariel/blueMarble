import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const CogwheelIcon = props => {
  return (
    <SvgIcon viewBox="0 0 24 24">
      <defs>
        <path
          d="M4,7.73684211 C6.03473329,7.73684211 7.68421053,6.08736487 7.68421053,4.05263158 C7.68421053,2.01789829 6.03473329,0.368421053 4,0.368421053 C1.96526671,0.368421053 0.315789474,2.01789829 0.315789474,4.05263158 C0.315789474,6.08736487 1.96526671,7.73684211 4,7.73684211 Z M4,2.21052632 C5.01736664,2.21052632 5.84210526,3.03526493 5.84210526,4.05263158 C5.84210526,5.06999822 5.01736664,5.89473684 4,5.89473684 C2.98263336,5.89473684 2.15789474,5.06999822 2.15789474,4.05263158 C2.15789474,3.03526493 2.98263336,2.21052632 4,2.21052632 Z"
          id="path-1"
        />
        <path
          d="M0.278908899,16.0861842 C0.44584943,16.4135338 0.629764444,16.73174 0.82988583,17.0394737 C1.50504345,18.0620411 2.78239309,18.4875957 3.92628511,18.0710526 L5.06922073,17.6565789 C5.60627778,18.0693561 6.19213103,18.412795 6.81322209,18.6789474 L7.03179145,19.8901316 C7.24956959,21.1348736 8.29635819,22.0573843 9.5453391,22.1052632 L10.0006919,22.1052632 L10.4560448,22.1052632 C11.6987131,22.0540518 12.739656,21.1371853 12.9604854,19.8993421 L13.1881618,18.6789474 C13.8056193,18.4150004 14.3883575,18.0746882 14.9230561,17.6657895 L16.0659917,18.0802632 C17.2146064,18.4998261 18.497925,18.0697305 19.171498,17.0394737 C19.3720999,16.7297276 19.5545547,16.4083417 19.7179215,16.0769737 C20.2695785,14.9774775 19.9933569,13.638081 19.0531063,12.8532895 L18.1424006,12.0611842 C18.2273787,11.3884795 18.2273787,10.7075731 18.1424006,10.0348684 L19.0531063,9.24276316 C19.9798294,8.45001646 20.2556053,7.12187794 19.722475,6.01907895 C19.5555344,5.69172932 19.3716194,5.37352317 19.171498,5.06578947 C18.4963404,4.04322207 17.2189908,3.61766746 16.0750988,4.03421053 L14.9321631,4.44868421 C14.3962121,4.03423026 13.8101418,3.6906641 13.1881618,3.42631579 L12.9695924,2.21513158 C12.7518143,0.970389556 11.7050257,0.0478789077 10.4560448,0 C10.1418513,0 9.82310433,0 9.50891088,0 C8.26624254,0.0512113119 7.2252997,0.968077835 7.00447028,2.20592105 L6.81322209,3.42631579 C6.19488898,3.68848004 5.61193748,4.02891687 5.07832779,4.43947368 L3.93539217,4.025 C2.78677751,3.60543704 1.50345884,4.03553263 0.82988583,5.06578947 C0.630282619,5.37456821 0.447858344,5.6943628 0.283462428,6.02368421 C-0.250722686,7.12546474 0.0231392001,8.45341921 0.948277568,9.24736842 L1.85898324,10.0394737 C1.7740052,10.7121784 1.7740052,11.3930848 1.85898324,12.0657895 L0.948277568,12.8578947 C0.00879166401,13.6448865 -0.268820661,14.9837794 0.278908899,16.0861842 Z M2.12764141,14.2440789 L3.43905758,13.1203947 C3.68918644,12.905611 3.8057336,12.5713491 3.74414398,12.2453947 C3.58626758,11.4458321 3.58626758,10.622589 3.74414398,9.82302632 C3.8057336,9.49707194 3.68918644,9.16281003 3.43905758,8.94802632 L2.12764141,7.82894737 C1.83796424,7.59145997 1.74587989,7.18472648 1.90451852,6.84342105 C2.04198811,6.56825246 2.19399193,6.30076085 2.35987136,6.04210526 C2.5746422,5.73450207 2.96821662,5.61319281 3.31611231,5.74736842 L4.93716841,6.33223684 C5.24876393,6.44744603 5.59765519,6.38216782 5.84787408,6.16184211 C6.45571811,5.63160335 7.15711016,5.22223649 7.91517595,4.95526316 C8.22497573,4.84618795 8.45283579,4.57703773 8.51168817,4.25065789 L8.8213281,2.53289474 C8.89647175,2.14548353 9.22369202,1.86019217 9.61364203,1.84210526 C9.87149457,1.82829222 10.1298893,1.82829222 10.3877418,1.84210526 C10.7811512,1.85602947 11.1132133,2.14225238 11.1891628,2.53289474 L11.4988028,4.25526316 C11.5576551,4.58164299 11.7855152,4.85079321 12.095315,4.95986842 C12.8533808,5.22684175 13.5547728,5.63620861 14.1626169,6.16644737 C14.4128357,6.38677308 14.761727,6.45205129 15.0733225,6.33684211 L16.6943786,5.75197368 C17.0422743,5.61779807 17.4358487,5.73910733 17.6506196,6.04671053 C17.816499,6.30536612 17.9685028,6.57285773 18.1059724,6.84802632 C18.2601667,7.19016911 18.164434,7.59453678 17.8737425,7.82894737 L16.5668798,8.95263158 C16.3150731,9.16639507 16.1967283,9.50082106 16.2572399,9.82763158 C16.4151163,10.6271942 16.4151163,11.4504373 16.2572399,12.25 C16.1967283,12.5768105 16.3150731,12.9112365 16.5668798,13.125 L17.8737425,14.2763158 C18.1634196,14.5138032 18.255504,14.9205367 18.0968654,15.2618421 C17.9593958,15.5370107 17.8073919,15.8045023 17.6415125,16.0631579 C17.4277516,16.3721709 17.0331064,16.4938102 16.6852716,16.3578947 L15.0642155,15.7730263 C14.75262,15.6578171 14.4037287,15.7230953 14.1535098,15.9434211 C13.5456658,16.4736598 12.8442737,16.8830267 12.0862079,17.15 C11.7764081,17.2590752 11.5485481,17.5282254 11.4896957,17.8546053 L11.1800558,19.5723684 C11.1049121,19.9597796 10.7776919,20.245071 10.3877418,20.2631579 C10.1298893,20.2769709 9.87149457,20.2769709 9.61364203,20.2631579 C9.21883414,20.2487645 8.88630468,19.960228 8.81222104,19.5677632 L8.50258111,17.85 C8.44372873,17.5236202 8.21586868,17.2544699 7.9060689,17.1453947 C7.1480031,16.8784214 6.44661105,16.4690545 5.83876702,15.9388158 C5.6732631,15.7934408 5.46146532,15.7133186 5.24225481,15.7131579 C5.1381842,15.7138134 5.03499466,15.7325051 4.93716841,15.7684211 L3.31611231,16.3532895 C2.96827745,16.489205 2.57363223,16.3675657 2.35987136,16.0585526 C2.19399193,15.799897 2.04198811,15.5324054 1.90451852,15.2572368 C1.74828256,14.9171389 1.8401681,14.5131801 2.12764141,14.2763158 L2.12764141,14.2440789 Z"
          id="path-3"
        />
      </defs>
      <g id="Icons/Settings-(I09)" fill="none" fillRule="evenodd">
        <g id="noun_Settings_1515651(2)" transform="translate(2 1)">
          <g id="🎨-Color" transform="translate(6 7)">
            <mask id="mask-2" fill="#fff">
              <use xlinkHref="#path-1" />
            </mask>
            <use id="Mask" fill="#000" fillRule="nonzero" xlinkHref="#path-1" />
            <g id="Colors/Cyan-High" mask="url(#mask-2)" fill="#314354">
              <rect
                width="24"
                height="24"
                transform="translate(-8 -8)"
                id="Rectangle-3-Copy-54"
              />
            </g>
          </g>
          <g id="🎨-Color">
            <mask id="mask-4" fill="#fff">
              <use xlinkHref="#path-3" />
            </mask>
            <use id="Mask" fill="#000" fillRule="nonzero" xlinkHref="#path-3" />
            <g id="Colors/Cyan-High" mask="url(#mask-4)" fill="#314354">
              <rect
                width="24"
                height="24"
                transform="translate(-2 -1)"
                id="Rectangle-3-Copy-54"
              />
            </g>
          </g>
        </g>
      </g>
    </SvgIcon>
  );
};

export default CogwheelIcon;
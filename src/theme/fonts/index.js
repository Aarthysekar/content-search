import { Global } from '@emotion/react'

import FontRegular from  "./AvertaStd-Regular.woff";
import FontMedium from "./AvertaStd-Semibold.woff";
import FontBold from "./AvertaStd-Bold.woff";
import FontExtraBold from "./AvertaStd-ExtraBold.woff";

const Fonts = () => (
  <Global
    styles={`
        @font-face {
            font-family: Averta;
            src: url(${FontRegular});
            font-weight: 300;
        }
        @font-face {
            font-family: Averta;
            src: url(${FontMedium});
            font-weight: 600;
        }
        
        @font-face {
            font-family: Averta;
            src: url(${FontBold});
            font-weight: 700;
        }
        
        @font-face {
            font-family: Averta;
            src: url(${FontExtraBold});
            font-weight: 800;
        }
      `}
  />
)

export default Fonts
import { getWechatVersionFunction } from "../../Common/getData/getWechatVersionFunction";
import { availableVersion } from "../CommonData/data-offset";
const checkSupportedFunction = (): boolean => {
  const ver: number = getWechatVersionFunction();
  return ver == availableVersion;
};

export { checkSupportedFunction };

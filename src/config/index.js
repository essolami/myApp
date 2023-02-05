import { isDev } from "../_helpers/utils";
import defaultConfig from "./default";
import prodConfig from "./prod";

export default isDev ? defaultConfig : { ...defaultConfig, ...prodConfig };

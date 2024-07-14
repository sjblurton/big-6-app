import  bridges from "./bridges";
import handstands from "./handstands";
import pullUps from "./pullUps";
import pushUps from "./pushUps";
import legRaises from "./legRaises";
import squats from "./squats";

export default [...bridges, ...handstands, ...pullUps, ...pushUps, ...legRaises, ...squats] as const;
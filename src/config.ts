import { IConfig } from "./interfaces/config.types"

export const config: IConfig = {
  user: "1022422292" || "1042353883",
  password: "Agentesoporte_16",
  puppeteer: {
    headless: false,
    defaultViewport: { width: 1920, height: 1080, deviceScaleFactor: 1 },
    args: ["--start-maximized"],
    devtools: false,
  },
  basePath: "http://54.159.160.153:8081/ekogui-gateway/",
  mode: "full",
}

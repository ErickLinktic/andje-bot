import dotenv from "dotenv"
import { IConfig } from "./interfaces/config.types"
dotenv.config()

const { user, environment, mode } = process.env

export const config: IConfig = {
  user: user || "1022422292",
  password: "Agentesoporte_16",
  puppeteer: {
    headless: false,
    defaultViewport: { width: 1920, height: 1080, deviceScaleFactor: 1 },
    args: ["--start-maximized"],
    devtools: false,
  },
  basePath:
    environment === "dev"
      ? "http://54.159.160.153:8081/ekogui-gateway/"
      : "http://44.205.203.238:8081/ekogui-gateway/",
  mode: mode || "full",
}

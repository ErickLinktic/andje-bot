import { PuppeteerLaunchOptions } from "puppeteer"

export interface IConfig {
  user: string
  password: "Agentesoporte_16"
  basePath: "http://54.159.160.153:8081/ekogui-gateway/"
  mode: "basic" | "full"
  puppeteer: PuppeteerLaunchOptions
}

import { PuppeteerLaunchOptions } from "puppeteer"

export interface IConfig {
  user: string
  password: "Agentesoporte_16"
  basePath: string // "http://54.159.160.153:8081/ekogui-gateway/"
  mode: string // "basic" | "full"
  puppeteer: PuppeteerLaunchOptions
}

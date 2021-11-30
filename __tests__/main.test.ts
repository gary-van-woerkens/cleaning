// import * as process from "process"
// import * as cp from "child_process"
// import * as path from "path"
import { expect, test } from "@jest/globals"
import purge from "../src/purge"

const container = "fabrique/www"

test(`Purge container ${container}`, async () => {
  const count = await purge(container, 1, 100, 4)
  expect(count).toBe(0)
})

// shows how the runner will run a javascript action with env / stdout protocol
// test("test runs", () => {
//   process.env["INPUT_MILLISECONDS"] = "500"
//   const np = process.execPath
//   const ip = path.join(__dirname, "..", "lib", "main.js")
//   const options: cp.ExecFileSyncOptions = {
//     env: process.env,
//   }
//   console.log(cp.execFileSync(np, [ip], options).toString())
// })

import * as core from "@actions/core"
import purge from "./purge"

const PAGE_LIMIT = 100 // Number of packages per page (from 1 to 100)
const START_PAGE_INDEX = 1 // Starting page index
const RETENTION_WEEKS = Number(core.getInput("retention-weeks"))
// const RETENTION_WEEKS = 2

const containers = core.getInput("containers").split("\n")
// const containers = ["cdtn/code-du-travail-frontend"]
// const containers = ["cdtn/elasticsearch"]

async function run(): Promise<void> {
  try {
    for (const container of containers) {
      core.debug(`===> Container: ${container}`)
      const count = await purge(
        container,
        START_PAGE_INDEX,
        PAGE_LIMIT,
        RETENTION_WEEKS
      )
      core.debug(`Total versions deleted: ${count}`)
      core.debug("--------------------")
    }
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()

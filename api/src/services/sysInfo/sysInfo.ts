import fs from 'fs'
import os from 'os'
import process from 'process'

import type { QueryResolvers } from 'types/graphql'

export const sysInfo: QueryResolvers['sysInfo'] = () => {
  const sysInfo = {
    os: os.platform() + ' ' + os.version(),
    cwd: process.cwd(),
    env: process.env,
    filesInCwd: fs.readdirSync(process.cwd()),
  }

  return {
    sysInfo: JSON.stringify(sysInfo),
  }
}

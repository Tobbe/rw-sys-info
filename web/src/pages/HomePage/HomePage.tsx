import { MetaTags } from '@redwoodjs/web'

import SysInfoCell from 'src/components/SysInfoCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <SysInfoCell />
    </>
  )
}

export default HomePage

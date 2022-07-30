import type { FindSysInfoQuery, FindSysInfoQueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindSysInfoQuery {
    sysInfo {
      sysInfo
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindSysInfoQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  sysInfo,
}: CellSuccessProps<FindSysInfoQuery, FindSysInfoQueryVariables>) => {
  const sysInfoObj = JSON.parse(sysInfo.sysInfo)
  return (
    <pre>
      <code>{JSON.stringify(sysInfoObj, null, 2)}</code>
    </pre>
  )
}

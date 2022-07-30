export const schema = gql`
  type SysInfo {
    sysInfo: String!
  }

  type Query {
    sysInfo: SysInfo @requireAuth
  }
`

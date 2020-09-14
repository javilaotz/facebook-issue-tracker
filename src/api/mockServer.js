import { issuesResponse } from './mock'

export const GETissues = () => {
  return new Promise( resolve => 
    setTimeout(() => resolve(issuesResponse), 1000 )
  )
};
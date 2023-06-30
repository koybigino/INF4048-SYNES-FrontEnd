import React from 'react'
import Container from '../../../../../components/container/Container'
import ContributionList from '../../../../../components/contributionlist/ContributionList'

export default function Contribution() {
  return (
    <Container>
      <div className="flex items-center my-10 justify-center">
        <ContributionList />
      </div>
    </Container>
  )
}

import React from 'react'
import CaisseList from '../../../../../components/caisselist/CaisseList'
import Container from '../../../../../components/container/Container'

export default function Caisse() {
  return (
    <Container>
      <div className="flex items-center my-10 justify-center">
        <CaisseList />
      </div>
    </Container>
  )
}

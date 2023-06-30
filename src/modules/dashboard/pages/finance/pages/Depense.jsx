import React from 'react'
import Container from '../../../../../components/container/Container'
import DepenseList from '../../../../../components/depenselist/DepenseList'

export default function Depense() {
  return (
    <Container>
      <div className="flex items-center my-10 justify-center">
        <DepenseList />
      </div>
    </Container>
  )
}

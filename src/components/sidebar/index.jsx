import React from 'react'
import { Wrapper, Card, CardName, CardValue, CardUnit } from './index.styled'

export const Sidebar = () => {

  const fields = [
    {
      name: 'Presion pico',
      value: 3.9,
      unit: 'cmH2o'
    },
    {
      name: 'Presion base',
      value: 53,
      unit: 'cmH2o'
    }, 
    {
      name: 'Presion Media',
      value: 46,
      unit: 'cmH2o'
    },
    {
      name: 'Volumen',
      value: 37,
      unit: 'litros '
    },
    {
      name: 'Flujo',
      value: 27,
      unit: 'l/min'
    }
  ]

  return (
    <Wrapper>
      {
        fields.map(field => (
          <Card>
            <CardName>{field.name}</CardName>
            <CardValue>{field.value}</CardValue>
            <CardUnit>{field.unit}</CardUnit>
          </Card>
        ))
      }
    </Wrapper>
  )
}
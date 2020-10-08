import React from 'react'
import { Header } from '../components/header'
import { Sidebar } from '../components/sidebar'
import { Graphs } from '../components/graphs'

export const Main = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Graphs />
    </div>
  )
}
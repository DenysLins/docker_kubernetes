import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders Home react link', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/Home/i)
  expect(linkElement).toBeInTheDocument()
})

test('renders Other Page react link', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/Other Page/i)
  expect(linkElement).toBeInTheDocument()
})

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, waitFor, within } from '@testing-library/react'
import App from '../App'

beforeEach(() => {
  global.fetch = vi.fn((url) => {
    if (url.includes('/books')) {
      return Promise.resolve({
        ok: true,
        json: async () => [
          {
            "id": "4",
            "description": "A whimsical fantasy tale about a talking cat and a cursed forest",
            "name": "Whiskers and the Wyrmwood",
            "author": "Eleanor Sage",
            "price": 14.25
        },
        {
            "id": "5",
            "description": "A romantic drama set in post-war Italy",
            "name": "Letters from Lake Como",
            "author": "Gianni Bellucci",
            "price": 16.75
        },
        {
            "id": "6",
            "description": "An illustrated beginner's guide to plant care",
            "name": "The Joy of Houseplants",
            "author": "Nadia Bloom",
            "price": 20
        },
        {
            "id": "7",
            "description": "A fast-paced sci-fi epic exploring AI and humanity",
            "name": "Synthetic Skies",
            "author": "Khalid Monroe",
            "price": 22.99
        },
        {
            "id": "8",
            "description": "A collection of poems about love, loss, and healing",
            "name": "The Sound of Falling Leaves",
            "author": "Aria Benet",
            "price": 12.5
        },
        {
            "id": "3548",
            "name": "The Last Ember",
            "author": "Daniel Levin",
            "description": "A historical thriller unraveling ancient secrets in modern-day Rome.",
            "price": "17.99"
        },
        {
            "id": "2c44",
            "name": "Climbing the Quiet Mountain",
            "author": "Rosa Nguyen",
            "description": "An inspiring memoir about resilience and hope",
            "price": "18.50"
        }
        ],
      })
    }
    if (url.includes('/store_info')) {
      return Promise.resolve({
        ok: true,
        json: async () => [{
          name: "Books & Beyond",
          "description": "A cozy independent bookstore with titles from all genres",
          "phone_number": "555-1234"
        }]
      })
  }
})
  window.history.pushState({}, '', '/')
})

describe('Book shop app - Vitest Suite', () => {
  it('renders Home component at root ("/")', async () => {
    render(<App />)
    expect(await screen.findByText(/Books & Beyond/i)).toBeInTheDocument()
  })

  it('displays book list at "/books"', async () => {
    window.history.pushState({}, '', '/books')
    render(<App />)
    expect(await screen.findByText(/Letters from Lake Como/i)).toBeInTheDocument()
    expect(await screen.findByText(/The Joy of Houseplants/i)).toBeInTheDocument()
  })

  it('navigates to AdminPage on "/admin"', async () => {
    window.history.pushState({}, '', '/admin')
    render(<App />)
    expect(await screen.findByText(/Add New Book/i)).toBeInTheDocument()
    expect(await screen.findByText(/Edit Existing Books/i)).toBeInTheDocument()
  })

  it('navigates to EditForm at "/admin/editBook/:id/editForm"', async () => {
    window.history.pushState({}, '', '/admin/editBook/:id/editForm')
    render(<App />)
    expect(await screen.findByText(/Name/i)).toBeInTheDocument()
    expect(await screen.findByText(/Author/i)).toBeInTheDocument()
    expect(await screen.findByText(/Description/i)).toBeInTheDocument()
    expect(await screen.findByText(/Price/i)).toBeInTheDocument()
  })

  it('navigates to AddNewBook at "/admin/newBook"', async () => {
    window.history.pushState({}, '', '/admin/newBook')
    render(<App />)
    expect(await screen.findByText(/Book Name/i)).toBeInTheDocument()
    expect(await screen.findByText(/Author/i)).toBeInTheDocument()
    expect(await screen.findByText(/Description/i)).toBeInTheDocument()
    expect(await screen.findByText(/Price/i)).toBeInTheDocument()
  })

})
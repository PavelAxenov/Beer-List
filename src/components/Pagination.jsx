import React from 'react'

export default function Pagination({countPerPage, totalBeers, paginate}) {
const pageNumber = []

for (let i = 1; i <= Math.ceil(totalBeers / countPerPage); i++) {
    pageNumber.push(i)
}

  return (
    <div>
        <ul>
            {
                pageNumber.map(number => (
                    <li key={number}>
                        <button  onClick={() => paginate(number)}>{number}</button>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
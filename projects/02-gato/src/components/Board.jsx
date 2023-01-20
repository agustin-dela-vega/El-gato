import { Squere } from "./Squere"

export function Board ({ b, updateBoard }) {
  return (
    b.map((square, index) => {
      return (
        <Squere
          key={index}
          index={index}
          updateBoard={updateBoard}
        >
          {square}
        </Squere>
      )
    })
  )
}
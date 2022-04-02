interface SquareProps {
  key?: number
  val: number
  row: number
  col: number
}

export default function Square(props: SquareProps): any {
  let boxStyle = 'box-border h-32 w-32 border-b-4 border-r-4 border-sky-500'
  if (props.row === 0 && props.col == 0) {
    boxStyle = 'box-border h-32 w-32 border-4 border-sky-500'
  } else if (props.row === 0) {
    boxStyle = 'box-border h-32 w-32 border-y-4 border-r-4 border-sky-500'
  } else if (props.col === 0) {
    boxStyle = 'box-border h-32 w-32 border-x-4 border-b-4 border-sky-500'
  }

  return (
    <div className={boxStyle}>
      <div className="py-12 text-4xl font-bold">{props.val}</div>
    </div>
  )
}

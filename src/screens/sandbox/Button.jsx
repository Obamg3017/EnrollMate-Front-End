export const Button = ({onClick, text, courseId}) => {

  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

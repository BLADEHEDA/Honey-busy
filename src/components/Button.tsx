
const Button = (props:string) => {
  return (
    <div>
      <button style={props.style}  >
        {props.name}
      </button>
    </div>
  )
}

export default Button

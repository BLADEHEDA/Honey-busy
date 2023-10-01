
const Button = (props:string) => {
  return (
    <div>
      <button className="bg-[#c74817] text-[white]  " style={props.style}  >
        {props.name}
      </button>
    </div>
  )
}

export default Button

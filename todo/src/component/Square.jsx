

export default function Square({value,handleClick}) {
    

  
    return <button onClick={handleClick} className="Square">{value}</button>;
}
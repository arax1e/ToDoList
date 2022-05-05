function Todo({todo,index,remove}){
  function handle(){
    var checkbox = (event) =>  document.getElementsByClassName(event.target.id);
      checkbox.checked = false;
    remove(index);
    
  }

  return (
  <>
  <div className="todo">
    <input  id={index} className="checkbox" type="checkbox" />
    {todo.text}
    <button className="button" type="button" onClick={handle}>Remove</button> 
     </div>
  </>
     )

     
}

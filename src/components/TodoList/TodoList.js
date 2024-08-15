import TodoListItem from "./TodoListItem/TodoListItem"

const TodoList =()=>{

    const items=[
        {text:"Learn Js",important:true,id:1},
        {text:"Learn Ts",important:true,id:2},
        {text:"Drink Coffe",important:false,id:3},
        {text:"Learn NodeJs",important:false,id:4},
        {text:"Learn Python",important:true,id:5}
    ]

    const data=items.map(({text,important,id})=>{
        return (<TodoListItem text={text} important={important} key={id}/>)
    })
    return(
       <div>
       <ul>{data}</ul>
       </div>
    )
   }
   
   export default TodoList 
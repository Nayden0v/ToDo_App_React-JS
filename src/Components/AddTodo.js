
export default function AddTodo(){
    const input = <input type="text" placeholder="Enter your todo..." />

    return (
             <div className="input--container">
                 {input}
                 <button className="btn--add">Add todo</button>
            </div>

    )
}
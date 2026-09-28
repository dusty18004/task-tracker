
function TaskItem({ task, onToggle, onDelete}) {
    return (
        <div style={{ display:"flex", alignItems: "center", gap: "10px", background: "white", 
                padding:"12px 16px", borderRadius: "8px", marginBottom: "8px" }}>
                
            <input
                type="checkbox"
                checked={task.done}
                onChange={() => onToggle(task.id)}
            />
            <span style={{ flex:1, textDecoration: task.done ? "line-through" : "none", color :task.done ? "#999" : "#1a1a1a" }}>
                {task.text}
            </span>
            <button onClick={() => onDelete(task.id)}>Remove</button>
            </div>
    );
}

export default TaskItem;
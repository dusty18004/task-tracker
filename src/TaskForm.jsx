
import { useState } from "react";

function TaskForm({ onAdd }) {
    const [text, setText] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!text.trim()) return;
        onAdd(text.trim());
        setText("");
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px", marginBottom: "1rem"}}>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a care task. . ."
                style={{ flex:1, padding:"10px", borderRadius: "6px", border: "1px solid #ccc" }}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default TaskForm;
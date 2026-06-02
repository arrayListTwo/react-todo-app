import { useState } from "react";

type Props = {
    addTodo: (text: string) => void;
};

function TodoInput({addTodo}: Props) {
    const [text, setText] = useState("");
    const handleAdd = () => {
        if (!text.trim()) return
        addTodo(text);
        setText("");
    }

    return (
        <div>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="请输入任务"
            />
            <button onClick={handleAdd}>添加</button>
        </div>
    )
}

export default TodoInput;

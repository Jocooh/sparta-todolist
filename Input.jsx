import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Input({ setTodos }) {
  const handleSubmitClick = (e) => {
    e.preventDefalut();

    //세팅된 title과 contents를 todos에 넣어주는 작업!
    //새로운 투두를 newtodo
    const newTodo = { title, contents, isDone: "false", id: uuidv4() };
    setTodos((prev) => {
      return [...prev, newTodo];
    });
  };

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleContentChange = (event) => {
    setContents(event.target.value);
  };

  return (
    <section>
      <form onSubmit={handleSubmitClick}>
        제목: <input value={title} onChange={handleTitleChange} />
        내용: <input value={contents} onChange={handleContentChange} />
        <button>추가</button>
      </form>
    </section>
  );
}

export default Input;

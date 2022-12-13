import React, { useState } from "react";
import Header from "./componenets/Header";
import Input from "./componenets/Input";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./componenets/TodoList";

export default function App() {
  const [todos, setTodos] = useState(initialState);

  return (
    <div>
      <Header>헤더입니다.</Header>
      <main style={{ padding: "20px", backgroundColor: "aliceblue" }}>
        {/* 인풋을 만들어 입력하는 부분 */}

        {/* <section>
          제목: <input></input>
          내용: <input></input>
          <button>추가</button>
        </section> */}
        <Input setTodos={setTodos} />

        {/* 투두리스트를 출력하는 부분 */}
      </main>
      <TodoList isActive={true} todos={todos} setTodos={setTodos} />
      <TodoList isActive={false} todos={todos} setTodos={setTodos} />
      <footer>푸터입니다.</footer>
    </div>
  );
}

//원래 useState안에 들어가야하는 부분으로 너무 길어질경우 이렇게 밖에서 만들어 줄 수 있다.
const initialState = [
  { title: "제목1", contents: "내용1", isDone: "false", id: uuidv4() },
  { title: "제목2", contents: "내용2", isDone: "false", id: uuidv4() },
  { title: "제목3", contents: "내용3", isDone: "false", id: uuidv4() },
];

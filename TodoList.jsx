import React from "react";
import Todo from "./Todo";

function TodoList({ todos, isActive, setTodos }) {
  //props으로 todos를 가져와서 map으로 전체를 출력한다.
  return (
    <div>
      <h4>{isActive ? "해야할것" : "완성된것"}</h4>
      {todos
        //todos중에서 isDone이 isActive(true or false)와 다른것만 필터링하겠다.
        //왜냐면 isActive는 true가 해야할것이고 isDone은 해야할 것이 false인 상태이기 때문에 조건에서 상태를 반대로 뒤집어논거임
        //결국에 map에 들어가는 것은 해야할 것이 들어간다(isDone은 모두 false상태임)
        .filter((item) => item.isDone === !isActive)
        //map으로 돌릴때는 key라는 속성이 필수이다.
        .map((item) => {
          return <Todo item={item} isActive={isActive} setTodos={setTodos} />;
        })}
    </div>
  );
}

export default TodoList;

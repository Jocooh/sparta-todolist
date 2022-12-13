import React from "react";

function Todo({ item, isActive, setTodos }) {
  const handleDeleteButtonClick = () => {
    setTodos((prev) => prev.filter((t) => t.id !== item.id));
  };

  //isDone의 부분을 바꿀 수 있는 함수이다.
  const handleSwithButtonClick = () => {
    setTodos((prev) =>
      prev.map((t) => {
        //내가 선택한 이 컴포넌트가 그 컴포넌트가 맞으면 isDone을 바꿔주고 아니면 그냥 냅둬
        if (t.id === item.id) {
          return { ...t, isDone: !t.isDone };
        } else {
          return t;
        }
      })
    );
  };

  return (
    <div key={item.id} style={{ border: "1px solid black" }}>
      <h5>{item.title}</h5>
      <p>{item.contents}</p>
      <button onClick={handleSwithButtonClick}>
        {isActive ? "완료" : "취소"}
      </button>
      <button onClick={handleDeleteButtonClick}>삭제</button>
    </div>
  );
}

export default Todo;

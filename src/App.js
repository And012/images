import awsconfig from "./aws-exports";
import { Amplify, API } from "aws-amplify";
import { createTodo } from "./graphql/mutations";
import { useEffect, useState } from "react";
import { listTodos } from "./graphql/queries";
Amplify.configure(awsconfig);

async function getList(api, setState) {
  const result = await api.graphql({ query: listTodos });
  console.log(result);
  setState(result);
}
function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    getList(API, setList);
  }, []);
  return (
    <div>
      <div>Azatyan hovhannes</div>
      <div>Andranik tsaturyan</div>
      <button
        onClick={async () => {
          const result = await API.graphql({
            query: createTodo,
            variables: {
              input: {
                name: "some to do",
              },
            },
          });
          console.log(result);
        }}
      >
        some create todo button
      </button>
    </div>
  );
}

export default App;

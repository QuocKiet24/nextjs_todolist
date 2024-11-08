import { PrismaClient } from "@prisma/client";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

const prisma = new PrismaClient();
async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

const Home = async () => {
  const data = await getData();
  return (
    <div className="w-screen py-20 flex flex-col justify-center items-center">
      <span className="text-3xl font-extrabold uppercase">To-Do-App</span>
      <div className="flex justify-center flex-col items-center w-[1000px]  mt-10">
        <AddTodo />
        <div className=" flex flex-col gap-5 items-center justify-center mt-10 w-full">
          <div className="w-full">
            {data.map((todo, id) => (
              <div className="w-full" key={id}>
                <Todo todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

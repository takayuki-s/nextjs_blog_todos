import Link from "next/link";

export default function Task({ task }) {
  console.log(task);
  return (
    <div>
      <span>{task.id}</span>
      {" : "}
      <Link href={`/posts/${task.id}`}>
        <span className="cursor-pointer text-white border-b border-gray-500 hover:bg-gray-600">
          {task.title}
        </span>
      </Link>
    </div>
  );
}

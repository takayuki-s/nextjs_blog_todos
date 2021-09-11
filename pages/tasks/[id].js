import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { getAllTaskIds, getTaskData } from "../../lib/tasks";

export default function Task({ task }) {
  const router = useRouter();

  if (router.isFallback || !task) {
    return <div>Loading...</div>;
  }
  return (
    <Layout title={task.title}>
      <p className="m-4">
        {"ID : "}
        {task.id}
      </p>
      <p className="mb-4 text-xl font-bold">{task.title}</p>
      <p className="mb-12">{task.created_at}</p>
      <p className="px-10">{task.content}</p>
      <Link href="/task-page">
        <div className="flex cursor-pointer mt-12">
          <svg
            className="w-6 h-6 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            ></path>
          </svg>
          <span>Back to task-page</span>
        </div>
      </Link>
    </Layout>
  );
}
export async function getStaticPaths() {
  const paths = await getAllTaskIds();

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { task: task } = await getTaskData(params.id);
  return {
    props: {
      task,
    },
    revalidate: 3,
  };
}

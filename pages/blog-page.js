import Layout from "../components/Layout";
import link from "next/link";

export default function BlogPage() {
  <Layout title="BlogPage">
    <Link href="/main-page">
      <div className="w-6 h-6 mr-3">
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
        <span>Back to main page</span>
      </div>
    </Link>
  </Layout>;
}
import MessageList from "./components/MessageList";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;
  const viewToken = process.env.VIEW_TOKEN;

  if (!token || token !== viewToken) {
    return (
      <main className="flex items-center justify-center min-h-screen px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
            无权访问
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            请使用正确的链接访问此页面
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-lg mx-auto px-4 py-6">
      <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        短信验证码
      </h1>
      <MessageList token={token} />
    </main>
  );
}

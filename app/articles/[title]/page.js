export default async function ShowArticlePage(props) {
  const { title } = await props.params
  return (
    <div className="flex p-2 gap-2 flex-col">
      <h1 className="font-bold text-3xl">Show Article</h1>
      <h2 className="font-bold text-2xl">{title}</h2>
    </div>
  );
}
const Empty = ({ title }: { title: string }) => {
  return (
    <div className="py-4 col-span-2 grid place-items-center text-text">
      <span>No {title} yet</span>
    </div>
  );
};

export default Empty;
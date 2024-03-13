export default function Input({ label, textarea, ...props }) {
  const classes =
    "w-full p-1 border-b-2 border-stone-300 bg-stone-200 rounded-sm text-stone-600 focus:outline-none focus:border-stone-600";

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm uppercase font-bold text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea className={classes} {...props} />
      ) : (
        <input className={classes} {...props} />
      )}
    </p>
  );
}

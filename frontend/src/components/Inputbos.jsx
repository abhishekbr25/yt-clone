export function InputBox({placeholder}) {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-500"
      />
    </div>
  );
}

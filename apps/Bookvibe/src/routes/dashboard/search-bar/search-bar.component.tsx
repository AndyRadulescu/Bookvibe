export function SearchBarComponent({ searchBook }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchVal = e.target[0].value;
    if (searchVal == undefined || searchVal == '') {
      return;
    }
    searchBook(searchVal.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-sm mx-auto flex gap-1">
        <input
          type="text"
          id="inputField"
          placeholder="Search book..."
          className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
    </form>
  );
}

const Loading = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent">
  <div className="flex flex-col items-center">
    <div className="w-24 h-24 border-8 border-gray-200 border-t-8 border-t-black rounded-full animate-spin"></div>
    <p className="mt-4 text-gray-600">Loading</p>
  </div>
</div>

    );
};

export default Loading;

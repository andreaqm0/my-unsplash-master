const Loading = () => {
  return (
    <div className="flex justify-center items-center" style={{height: 'calc(100vh - 120px)'}}>
        <div className="animate-spin inline-block w-20 h-20 border-[3px] border-current border-t-transparent text-gray-300 rounded-full" role="status" aria-label="loading">
        <span className="sr-only">Loading...</span>
        </div>
    </div>
  )
}

export default Loading
interface Props {
  closeHandler: Function,
  className?: string
}

function CloseButton({ closeHandler, className } : Props) {
  return (
    <button className={`w-6 h-6 bg-red-500 rounded-sm text-white hover:bg-red-600 ${className}`} onClick={() => closeHandler()}>
      <i className="bi bi-x"/>
    </button>
  )
}

export default CloseButton
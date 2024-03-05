'use client'
const Hamburger = ({isActive, setIsActive}) => {
  return (
    <button className="st-button block w-[3rem] h-[3rem]" onClick={() => setIsActive(!isActive)}>
        <div className={`hm-burger ${isActive ? 'hm-burger-active': ''}`}>
        </div>
    </button>
  )
}

export default Hamburger
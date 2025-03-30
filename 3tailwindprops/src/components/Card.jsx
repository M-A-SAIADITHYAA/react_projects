import React from 'react'

function Card(props) {
  return (
    <div>
        <div className="flex flex-col items-center p-7 rounded-2xl">
  <div>
    <img className="size-48 shadow-xl rounded-md" alt="" src="https://images.pexels.com/assets/static/images/canva/photo-background-remover.png?w=600" />
  </div>
  <div className="flex">
    <span className="text-2xl font-medium">Class Warfare</span>
    <span className="font-medium text-sky-500">The Anti-Patterns {props.username}</span>
    <span className="flex">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>
    </div>
  )
}

export default Card
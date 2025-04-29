import React from 'react'

function Comments({ comments }) {
  return (
    <div>
      {comments.map((c, idx) => (
        <div key={idx} className="py-1 flex items-start gap-3">
          <i className="bi bi-person-circle text-2xl text-[#5193d6] mt-1"></i>
          <div>
            <div className="text-gray-800 text-sm font-semibold">
              {c.get("userId")?.get("firstName")} {c.get("userId")?.get("lastName")}
            </div>
            <div className="text-gray-600 text-sm">{c.get("comment")}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Comments
import React, { useState, useEffect } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Comments from './Comments';
import { getCurrentUser } from '../../Auth/AuthService'
import { getCommentsFromId, submitComment } from '../../../Common/Services/TripsService';

function DisplayDigibook({ show, handleClose, digibook }) {
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState("")

  useEffect(() => {
    if (!digibook) return;

    getCommentsFromId(digibook.id).then((res) => {
      setComments(res);
    })
  }, [digibook])

  const handleCommentSubmit = () => {
    if (!comment.trim()) {
      alert("Please comment before pressing submit!")
    }
    const user = getCurrentUser();
    submitComment({ scrapbookId: digibook.id, userId: user.id, comment: comment.trim() }).then((res) => {
      setComments((prev) => [res, ...prev]);
      setComment("");
    }).catch((err) => {
      console.error(err);
    })

  }

  return (
    <div>
      {digibook && <Offcanvas
        show={show}
        onHide={handleClose}
        scroll={true}
        backdrop={false}
        placement={'end'}
        className="shadow-lg"
      >
        <Offcanvas.Header closeButton className="border-b border-[#525658]">
          <div className="flex items-center gap-3">
            <div className="text-md font-semibold">
              {digibook.get("userId").get("firstName")} {digibook.get("userId").get("lastName")}
            </div>
          </div>
        </Offcanvas.Header>

        <Offcanvas.Body className="bg-white text-gray-900 p-0">
          {/* Image */}
          <div className="w-full h-64 overflow-hidden shadow-md">
            <img
              src={digibook.get("imagePreview")?.url()}
              alt={digibook.get("name")}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-4">
            <span className="text-2xl font-bold mb-1 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">{digibook.get("name")}</span>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-yellow-500">
                {'★'.repeat(Math.round(digibook.get("rating") || 0))}
                {'☆'.repeat(5 - Math.round(digibook.get("rating") || 0))}
              </span>
              <span className="text-sm text-gray-500">
                {digibook.get("rating")?.toFixed(1)} rating
              </span>
            </div>

            <p className="text-sm leading-relaxed mb-4 overflow-auto h-[300px]">
              {digibook.get("description")}
            </p>
            <div className="border-t pt-4">
              {/* Comment Input */}
              <div className="flex flex-col gap-2">
                <textarea
                  id="commentField"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows="3"
                  placeholder="Add a comment..."
                />
                <button
                  type="button"
                  className="self-end px-4 py-2 bg-[#5193d6] text-white rounded-lg text-sm hover:bg-[#2d94da] transition"
                  onClick={handleCommentSubmit}
                >
                  Post
                </button>
              </div>

              {/* Comments Section */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-sm font-semibold text-gray-700">Comments</div>
                  <div className="bg-gray-200 text-gray-700 text-xs font-medium rounded-full px-2 py-1 flex items-center justify-center">
                    {comments.length}
                  </div>
                </div>
                {comments.length > 0 ? (
                  <div>
                    <Comments comments={comments} />
                  </div>
                ) : (
                  <div className="text-sm text-gray-500 italic">No comments yet — be the first!</div>
                )}
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      }
    </div>
  )
}

export default DisplayDigibook
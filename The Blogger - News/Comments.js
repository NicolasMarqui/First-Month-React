import React, { Component } from 'react'
import image from './user.png'

export default class Comments extends Component {
  render() {
    return (
      <div className="mainComment">
        {
            this.props.showComments.map(comment => {
                return(
                    <div className="commentContainer" key={comment.id}>
                        <div class="user-img">
                            <img src={image} height="100px" width="100px;"></img>
                        </div>
                        <div class="user-name">
                            <h3>Posted By: {comment.name}</h3>
                        </div>
                        <div class="user-email">
                            <h3>{comment.email}</h3>
                        </div>
                        <div class="user-comment">
                            <p>{comment.body}</p>
                        </div>
                    </div>
                )
            })
        }
      </div>
    )
  }
}

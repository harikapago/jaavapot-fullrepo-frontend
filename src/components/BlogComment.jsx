import React,{useState} from 'react'

const BlogComment = () => {
  const [comment, setCommentData] = useState({ comment:"",name: "", email: ""})
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/createComment', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    comment: comment.comment,
    name: comment.name,
    email: comment.email,
  }),
});
const json = await response.json();
if (response.status === 400) {
  alert(json.message);
} else {
  console.log(json);
  setCommentData({ comment: '', name: '', email: '' });
  alert('Thank you for your Comment');
}


  //   const response = await fetch("http://localhost:5000/api/createComment", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       comment: comment.comment,
  //       name: comment.name,
  //       email: comment.email,
  //     }),
  //   });
  //   const json = await response.json();
  //   console.log(json);
  // setCommentData({ comment:"",name: "", email: ""})
  // alert("Thank you for your Comment")
  };


  const onChange = (e) => {
    setCommentData({ ...comment, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <div className='container mb-5' >
          <form className='w-50 m-auto mt-5 border bg-light border-success rounded' onSubmit={handleSubmit}>
        <div className='text-center m-5'>
          <h3>Leave a Reply</h3>
        </div>
          <div className="m-3">
              <label htmlFor="comment" className="form-label text-red">Comment</label>
              <textarea type="text" className="form-control" name='comment' rows="4" value={comment.comment} onChange={onChange} aria-describedby="emailHelp" />
            </div>
            <div className="m-3">
              <label htmlFor="name" className="form-label text-red">Name</label>
              <input type="text" className="form-control" name='name' value={comment.name} onChange={onChange} aria-describedby="emailHelp" />
            </div>
            <div className="m-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" name='email' value={comment.email} onChange={onChange} aria-describedby="emailHelp" />
            </div>
            
           
          
            <button type="submit" className="m-3 btn btn-danger" >POST COMMENT</button>
           
          </form>
        </div>
    </div>
  )
}

export default BlogComment;

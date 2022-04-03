import './post.css'

export default function Post() {
    return (
        <div className='post'>
            <img
                className='postImg'
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <div className="postCat">Music</div>
                    <div className="postCat">Life</div>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet.</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus repudiandae expedita perspiciatis quod aperiam assumenda molestias optio dolorum, ipsa nobis molestiae magni culpa beatae. Assumenda nostrum sint pariatur? Delectus, distinctio?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus repudiandae expedita perspiciatis quod aperiam assumenda molestias optio dolorum, ipsa nobis molestiae magni culpa beatae. Assumenda nostrum sint pariatur? Delectus, distinctio?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus repudiandae expedita perspiciatis quod aperiam assumenda molestias optio dolorum, ipsa nobis molestiae magni culpa beatae. Assumenda nostrum sint pariatur? Delectus, distinctio?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus repudiandae expedita perspiciatis quod aperiam assumenda molestias optio dolorum, ipsa nobis molestiae magni culpa beatae. Assumenda nostrum sint pariatur? Delectus, distinctio?
            </p>
        </div>
    )
}

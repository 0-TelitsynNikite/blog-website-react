import './singlePost.css'

export default function SinglePost() {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img
                    className='singlePostImg'
                    src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                />
                <h1 className='singlePostTitle'>
                    Lorem ipsum dolor sit amet
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>Author: <strong>Nikita</strong></span>
                    <span className='singlePostDate'>1 hour ago</span>
                </div>
                <p className='singlePostDesc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias nesciunt cum eum, distinctio temporibus? Nobis sequi sunt maxime molestiae. Veniam laudantium similique accusantium nulla nostrum rerum distinctio, magnam vel, nesciunt iusto deleniti delectus ex cupiditate voluptate? Perspiciatis, consequuntur libero molestiae tenetur illum soluta ipsum laudantium sunt dolore, quidem quia autem. Molestiae non vero dolorum aperiam! Blanditiis facere nulla architecto est culpa, repellendus earum aspernatur commodi reprehenderit vitae! Dolores repudiandae tempora fuga, odit esse sed vitae, perspiciatis corporis cum enim, eos maxime molestiae nesciunt quos optio excepturi minima nam? 
                </p>
            </div>
        </div>
    )
}

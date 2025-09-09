import './NewsLetter.css'

const NewsLetter =() =>{
    return(
        <div className='news-letter'>
            <h2>Receive News on Exclusive Offers</h2>
            <p>Subscribe to stay up to date</p>
            <div>
                <input type="email" placeholder='Your Email address' />
                <button>Subscribe</button>
            </div>
        </div>
    );
}
export default NewsLetter
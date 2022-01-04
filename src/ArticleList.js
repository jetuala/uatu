import Article from "./Article";
import constants from './constants';

var snoowrap = require('snoowrap')

const ArticleList = () => {
    // const data = [
    //     {
    //         id: '234986',
    //         link: 'www.google.com',
    //         text: 'Google',
    //         score: 245
    //     },
    //     {
    //         id: '9564289',
    //         link: 'www.yahoo.com',
    //         text: 'Yahoo',
    //         score: 50
    //     },
    //     {
    //         id: '219485',
    //         link: 'www.facebook.com',
    //         text: 'Facebook',
    //         score: 500
    //     }
    // ]
    async function scrapeSubreddit() {
        const r = new snoowrap({
            userAgent: 'Captain America',
            clientId: constants.clientId,
            clientSecret: constants.clientSecret,
            refreshToken: constants.refreshToken,
            accessToken: constants.accessToken
        });
    
        const subreddit = await r.getSubreddit('Marvel');
        const topPosts = await subreddit.getTop({time: 'week', limit: 3});
    
        let data = [];
    
        topPosts.forEach((post) => {
            data.push({
                link: post.url,
                text: post.title,
                score: post.score
            })
        })

        const listItems = data.map((obj) => {
            return (
                <Article id={obj.id} title={obj.text} link={obj.link} score={obj.score} />
            )}
        )
    
        return listItems;
    }

    const listItems = scrapeSubreddit();

    // Still having the same problem: React is trying to render the component before getting the results back from the Promise.

    return (
        <ul>
            {listItems}
        </ul>
    )
}

export default ArticleList;
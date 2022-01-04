import Article from "./Article";
import { scrapeSubreddit } from './scraper';

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
    const data = scrapeSubreddit();

    const listItems = data.map((obj) => {
        return (
            <Article id={obj.id} title={obj.text} link={obj.link} score={obj.score} />
        )}
    )
    return (
        <ul>
            {listItems}
        </ul>
    )
}

export default ArticleList;
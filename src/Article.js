function Article(props) {
    return(
        <li key={props.id}>
            Title: {props.title} <br/>
            Link: {props.link} <br/>
            Score: {props.score} <br/>
        </li>
    )
}

export default Article;
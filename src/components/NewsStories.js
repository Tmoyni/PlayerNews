import React from 'react';

const apiKey = process.env.REACT_APP_API_KEY

class NewsStories extends React.Component {

    state = {
        articles: [],
        isLoaded: false
    }
    
    componentDidMount() {
        fetch('http://newsapi.org/v2/everything?' +
        'q="Nolan Smith""football"&' +
        `apiKey=${apiKey}&` +
        'sortBy=relevancy' 
        )
        .then(res => res.json())
        .then(result => {
            this.setState({
                isLoaded: true,
                articles: result
            })
        });
        }

    render() {
        console.log(this.state.articles)
        
        return (
            <div>
                News Stories
                
                {this.state.isLoaded 
                ? this.state.articles.articles.map((article) => (
                    <div key={article.index}>
                        <h4>{article.title}</h4>
                        {article.description}

                        
                    </div> 
                  )) 
                : ""}
            </div>
        )
    }

}

export default NewsStories;

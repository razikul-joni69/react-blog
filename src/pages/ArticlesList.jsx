import { Link } from 'react-router-dom';
import articles from './article-content'
const ArticlesList = () => {
    return (
        <>
            <h1 className="sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-900">
                Articles List
            </h1>
            <div className="container py-4 mx-auto">
                <div className="flex flex-wrap m-4">
                    {
                        articles.map((article, index) => (
                            <div key={index} className="p-4 md:w-1/2">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <Link to={`/article/${article.name}`} className="text-xl font-bold mb-4">{article.title}</Link>
                                    <p className="text-gray-700 text-base">{article.content}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    );
};

export default ArticlesList;

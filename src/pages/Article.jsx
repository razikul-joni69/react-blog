import { useParams } from "react-router-dom";
import articleContent from './article-content'
const Article = () => {
    const {name} = useParams();
    const article = articleContent.find(article => article.name === name);
    if(!article) {
        return <div className="sm:text-4xl text-2xl font-bold mt-56 mb-6 text-red-900 text-center">Article not found</div>
    }
    return (
        <>
            <h1 className="sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-900">
                {article.title}
            </h1>
            {
                article.content.map((paragraph, index) => (
                    <p key={index} className="mx-auto leading-relaxed text-base mb-4 text-gray-700">
                        {paragraph}
                    </p>
                ))



            }
        </>
        
    )
}

export default Article

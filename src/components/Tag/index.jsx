import './Tag.scss'

const Tag = ({ tags }) => (
    <div className="tags">
        {tags.map((tag, index) => (
            <div key={`tag-${index}`} className="tag">
                {tag}
            </div>
        ))}
    </div>
)

export default Tag
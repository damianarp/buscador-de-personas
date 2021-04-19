export default function SearchResultsItem({name, username, email, phone}) {
    return (
        <div className="results-item">
            <p className="name-item">{name}</p>
            <p className="username-item">{username}</p>
            <p className="email-item">{email}</p>
            <p className="phone-item">{phone}</p>
        </div>
    );
}
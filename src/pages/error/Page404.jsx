import {Link} from "react-router-dom";

function Page404() {
    return (
        <div>
            <h1>404 !</h1>
            <Link to="/">
                Return Home page !
            </Link>
        </div>
    )
}

export default Page404;
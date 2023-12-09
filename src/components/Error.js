import { useRouteError } from "react-router-dom";

const Error = () => {

    const err = useRouteError();
    // console.log(err);
    return (
        <div className="errorPage">
            <h2>Oops!! Their is an Error</h2>
            <h3>{err.data}</h3>
        </div>
    )
}

export default Error;
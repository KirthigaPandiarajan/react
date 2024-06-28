import { useRouteError } from "react-router-dom"

let Error = () => {
    let err = useRouteError();
    return (
        <h1>Opps Try after some time. {err.status} {err.statusText}</h1>
    )
};

export default Error;
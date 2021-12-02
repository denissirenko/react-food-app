import { useParams, useNavigate } from "react-router-dom";

export const Movies = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    return (
        <>
            <h1>
                Movies {id}
            </h1>
            <button
                onClick={() => {
                    navigate("/");
            }}
        >
          home
        </button>
        </>
    )
}

import { useParams } from "react-router";
const ProductDetail = () => {
    const params = useParams();
    return (
        <div>
            Detail : {params.id}
        </div>
    )
}

export default ProductDetail;
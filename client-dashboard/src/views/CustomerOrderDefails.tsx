import OrderDetails from "@/components/orders/OrderDetails"
import { Order, useFetchUserOrderByIdQuery } from "@/store/reducers/ordersSlice"
import { useParams } from "react-router"

function CustomerOrderDefails() {
    const params = useParams();
    const { data: order, isLoading, isError, isSuccess } = useFetchUserOrderByIdQuery(parseInt(params.id as string, 10));
    return (
    <OrderDetails order={order as Order} />
  )
}

export default CustomerOrderDefails
import OrderDetails from '@/components/orders/OrderDetails';
import { DistributorOrder, useFetchDistributorOrderByIdQuery } from '@/store/reducers/distributorOrdersSlice'
import { useParams } from 'react-router';

function DistributorOrderDetails() {
    const params = useParams();
    const { data: order, isLoading, isSuccess, isError } = useFetchDistributorOrderByIdQuery(parseInt(params.id as string, 10));
    return (
        <OrderDetails order={order as DistributorOrder} />
  )
}

export default DistributorOrderDetails
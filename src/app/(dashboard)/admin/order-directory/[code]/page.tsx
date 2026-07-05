import { getOrderByCode } from '@/features/admin/data/orders';
import OrderDirectoryFullPageScreen from '@/features/admin/order-directory/screens/OrderDirectoryFullPageScreen';

type Props = {
  params: Promise<{
    code: string;
  }>;
};
const OrderDirectoryFullPage = async({params}: Props) => {
    const { code } = await params;
    const order = getOrderByCode(code);
  if (!order) 
    return <p>Order Not Found</p>;

  return (
<>
<OrderDirectoryFullPageScreen order = {order} />
</>
  )
}

export default OrderDirectoryFullPage
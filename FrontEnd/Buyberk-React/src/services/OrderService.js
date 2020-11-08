import axios from 'axios'

const ORDER_API_BASE_URL ="http://localhost:8080/api/v1/orders";

class OrderService {

    GetOrders() {
        return axios.get(ORDER_API_BASE_URL);
    }

    addOrder(order) {
       return axios.post(ORDER_API_BASE_URL,order);
    }

}
export default new OrderService()
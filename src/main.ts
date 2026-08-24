import './scss/styles.scss';

import { Catalog } from './components/Models/Catalog';
import { Basket } from './components/Models/Basket';
import { Buyer } from './components/Models/Buyer';
import { Api } from './components/base/Api';
import { ApiClient } from './components/Api/ApiClient';

import { API_URL } from './utils/constants';

const catalog = new Catalog();
const basket = new Basket();
const buyer = new Buyer();

const api = new Api(API_URL);
const apiClient = new ApiClient(api);

apiClient.getProducts()
    .then((data) => {
        catalog.setProducts(data.items);

        console.log(
            'Каталог товаров с сервера:',
            catalog.getProducts()
        );
    })
    .catch((error) => {
        console.error(
            'Ошибка при получении каталога:',
            error
        );
    });




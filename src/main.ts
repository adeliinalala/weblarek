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

        console.log(
            'Catalog: начальный список товаров',
            catalog.getProducts()
        );

        catalog.setProducts(data.items);

        console.log(
            'Catalog: получение списка товаров',
            catalog.getProducts()
        );

        console.log(
            'Catalog: получение товара по ID',
            catalog.getProduct(data.items[0].id)
        );

        catalog.setSelectedProduct(data.items[0]);

        console.log(
            'Catalog: сохранение товара для подробного просмотра'
        );

        console.log(
            'Catalog: получение товара для подробного просмотра',
            catalog.getSelectedProduct()
        );


        console.log(
            'Basket: начальное состояние',
            basket.getItems()
        );

        basket.addItem(data.items[0]);

        console.log(
            'Basket: добавление товара',
            basket.getItems()
        );

        console.log(
            'Basket: проверка наличия товара',
            basket.hasItem(data.items[0].id)
        );

        console.log(
            'Basket: количество товаров',
            basket.getCount()
        );

        console.log(
            'Basket: общая стоимость',
            basket.getTotal()
        );

        basket.addItem(data.items[1]);

        console.log(
            'Basket: добавление второго товара',
            basket.getItems()
        );

        basket.removeItem(data.items[0]);

        console.log(
            'Basket: удаление товара',
            basket.getItems()
        );

        console.log(
            'Basket: проверка отсутствия удалённого товара',
            basket.hasItem(data.items[0].id)
        );

        basket.clear();

        console.log(
            'Basket: очистка корзины',
            basket.getItems()
        );

        console.log(
            'Basket: количество товаров после очистки',
            basket.getCount()
        );

        console.log(
            'Basket: стоимость после очистки',
            basket.getTotal()
        );


        console.log(
            'Buyer: начальные данные',
            buyer.getData()
        );

        console.log(
            'Buyer: валидация пустых данных',
            buyer.validate()
        );

        buyer.setData({
            payment: 'card',
        });

        console.log(
            'Buyer: сохранение способа оплаты',
            buyer.getData()
        );

        buyer.setData({
            address: 'Test address',
        });

        console.log(
            'Buyer: сохранение адреса',
            buyer.getData()
        );

        buyer.setData({
            email: 'test@test.com',
        });

        console.log(
            'Buyer: сохранение email',
            buyer.getData()
        );

        buyer.setData({
            phone: '+995555555555',
        });

        console.log(
            'Buyer: сохранение телефона',
            buyer.getData()
        );

        console.log(
            'Buyer: валидация заполненных данных',
            buyer.validate()
        );

        buyer.clear();

        console.log(
            'Buyer: очистка данных',
            buyer.getData()
        );

        console.log(
            'Buyer: валидация после очистки',
            buyer.validate()
        );
    })
    .catch((error) => {
        console.error(
            'Ошибка при получении каталога:',
            error
        );
    });
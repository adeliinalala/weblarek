import { IBuyer, TPayment } from '../../types';

export class Buyer {
    private payment: TPayment | null = null;
    private address = '';
    private email = '';
    private phone = '';

    setData(data: Partial<IBuyer>): void {
        Object.assign(this, data);
    }

    getData(): IBuyer {
        return {
            payment: this.payment as TPayment,
            address: this.address,
            email: this.email,
            phone: this.phone,
        };
    }

    clear(): void {
        this.payment = null;
        this.address = '';
        this.email = '';
        this.phone = '';
    }

    validate(): Partial<Record<keyof IBuyer, string>> {
        const errors: Partial<Record<keyof IBuyer, string>> = {};

        if (!this.payment) {
            errors.payment = 'Не выбран вид оплаты';
        }

        if (!this.address) {
            errors.address = 'Укажите адрес доставки';
        }

        if (!this.email) {
            errors.email = 'Укажите емэйл';
        }

        if (!this.phone) {
            errors.phone = 'Укажите телефон';
        }

        return errors;
    }
}
import validator from 'validator';
import _ from 'lodash';

export class CustomerValidator {
    isName = (string = '') => {
        return validator.isLength(`${string}`, { min: 1, max: 10 });
    };
    isEmail = (string = '') => {
        return validator.isEmail(`${string}`);
    };
    isPhone = (string = '') => {
        return validator.isMobilePhone(`${string}`, 'zh-TW');
    };
    isPassword = (string = '') => {
        return validator.isLength(`${string}`, { min: 6, max: 20 });
    };
    isGender = (string = '') => {
        return validator.isIn(`${string}`, ['1', '2']);
    };
    isIdCard = (string = '') => {
        return validator.isIdentityCard(`${string}`, 'zh-TW');
    };
    isAddressCity = (string = '') => {
        return validator.isLength(`${string}`, { min: 1, max: 5 });
    };
    isAddressTown = (string = '') => {
        return validator.isLength(`${string}`, { min: 1, max: 5 });
    };
    isAddressContent = (string = '') => {
        return validator.isLength(`${string}`, { min: 1, max: 50 });
    };
    isAddressCode = (string = '') => {
        return validator.isPostalCode(`${string}`, 'TW');
    };
    isBirthday = (string = '') => {
        return !!string;
    };
    isTaxId = (string = '') => {
        return (
            validator.isInt(`${string}`) &&
            validator.isLength(`${string}`, { min: 8, max: 8 })
        );
    };
    isValid = (isBusinessType, customer) => {
        const isValid =
            this.isEmail(_.get(customer, 'email')) &&
            this.isPassword(_.get(customer, 'password')) &&
            this.isName(_.get(customer, 'name')) &&
            this.isAddressCity(_.get(customer, 'address_city')) &&
            this.isAddressTown(_.get(customer, 'address_town')) &&
            this.isAddressCode(_.get(customer, 'address_code')) &&
            this.isAddressContent(_.get(customer, 'address_content')) &&
            this.isPhone(_.get(customer, 'phone')) &&
            this.isBirthday(_.get(customer, 'birthday')) &&
            this.isIdCard(_.get(customer, 'id_card')) &&
            this.isGender(_.get(customer, 'gender'));
        if (isBusinessType) {
            return isValid && this.isTaxId(_.get(customer, 'taxID'));
        }
        return isValid;
    };
}

export class PackageValidator {
    isPackageNo = (string = '') => {
        return /[A-Z|\d]{5,30}/g.test(string);
    };
    isPackageName = (string = '') => {
        return validator.isLength(`${string}`, { min: 1, max: 256 });
    };
    isPrice = (string = '') => {
        return validator.isInt(`${string}`, {
            allow_leading_zeroes: false,
            min: 1,
        });
    };
    isQuantity = (string = '') => {
        return validator.isInt(`${string}`, {
            allow_leading_zeroes: false,
            min: 1,
        });
    };
    isValid = (selectedPackage) => {
        return (
            this.isPackageNo(_.get(selectedPackage, 'packageNo')) &&
            this.isPackageName(_.get(selectedPackage, 'packageName')) &&
            this.isPrice(_.get(selectedPackage, 'price')) &&
            this.isQuantity(_.get(selectedPackage, 'quantity'))
        );
    };
}

export class ReceiverValidator {
    isName = (string = '') => {
        return validator.isLength(`${string}`, { min: 1, max: 10 });
    };
    isIdCard = (string = '') => {
        return validator.isIdentityCard(`${string}`, 'zh-TW');
    };
    isAddressCity = (string = '') => {
        return validator.isLength(`${string}`, { min: 1, max: 5 });
    };
    isAddressTown = (string = '') => {
        return validator.isLength(`${string}`, { min: 1, max: 5 });
    };
    isAddressContent = (string = '') => {
        return validator.isLength(`${string}`, { min: 1, max: 50 });
    };
    isAddressCode = (string = '') => {
        return validator.isPostalCode(`${string}`, 'TW');
    };
    isPhone = (string = '') => {
        return validator.isMobilePhone(`${string}`, 'zh-TW');
    };
    isStoreAddress = (string = '') => {
        return !!string;
    };
    isStoreId = (string = '') => {
        return !!string;
    };
    isStoreName = (string = '') => {
        return !!string;
    };
}

export class BrokerValidator {
    isName = (string = '') => {
        return validator.isLength(`${string}`, { min: 1, max: 10 });
    };
    isIdCard = (string = '') => {
        return validator.isIdentityCard(`${string}`, 'zh-TW');
    };
    isAddressCity = (string = '') => {
        return validator.isLength(`${string}`, { min: 1, max: 5 });
    };
    isAddressTown = (string = '') => {
        return validator.isLength(`${string}`, { min: 1, max: 5 });
    };
    isAddressContent = (string = '') => {
        return validator.isLength(`${string}`, { min: 1, max: 50 });
    };
    isAddressCode = (string = '') => {
        return validator.isPostalCode(`${string}`, 'TW');
    };
    isPhone = (string = '') => {
        return validator.isMobilePhone(`${string}`, 'zh-TW');
    };
    isValid = (broker) => {
        return (
            this.isName(_.get(broker, 'name')) &&
            this.isIdCard(_.get(broker, 'id_card')) &&
            this.isAddressCity(_.get(broker, 'address_city')) &&
            this.isAddressTown(_.get(broker, 'address_town')) &&
            this.isAddressContent(_.get(broker, 'address_content')) &&
            this.isAddressCode(_.get(broker, 'address_code')) &&
            this.isPhone(_.get(broker, 'phone'))
        );
    };
}

export class PrepayValidator {
    isAmount = (string = '') => {
        return validator.isInt(`${string}`, {
            allow_leading_zeroes: false,
            min: 1,
        });
    };
}

export class TicketValidator {
    isPackageId = (string = '') => {
        return !!string;
    };
    isServiceName = (string = '') => {
        return !!string;
    };
    isDescription = (string = '') => {
        return !!string;
    };
}

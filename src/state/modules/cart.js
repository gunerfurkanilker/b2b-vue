
import Swal from "sweetalert2";
import Vue from "vue";

export const state = {
    cartList: []
};

export const mutations = {
    addProductToCartList(state, data) {
        data.quantity = 1;
        state.cartList.push(data);
    },
    changeQuantityOfProduct(state, data){
        
        let productItemInCart = state.cartList.find(e => e.stock_code == data.product.stock_code)
        if (productItemInCart) {
            productItemInCart.quantity +=data.number;
            let indexProductItemInCart = state.cartList.indexOf(productItemInCart);
            Vue.set(state.cartList, indexProductItemInCart, productItemInCart);
        }
    },
    removeProductFromCartList(state, data) {
        let productItemInCart = state.cartList.find(e => e.stock_code == data.stock_code)
        if(productItemInCart)
        {
            let indexProductItemInCart = state.cartList.indexOf(productItemInCart);
            if (indexProductItemInCart > -1) {
                state.cartList.splice(indexProductItemInCart, 1);
            }
        }
        

    }
};

export const getters = {
    getCartList(state) {
        return state.cartList;
    }
};

export const actions = {
    addProductToCartList(context, product) {
        if (context.state.cartList.includes(product)) {
            Swal.fire({
                title: "Ürün Ekleme Başarısız",
                text:
                    product.stock_name + " adlı ürün sepetinizde halihazırda bulunuyor",
                icon: "error",
                confirmButtonText: "Tamam",
            });
        }
        else {
            context.commit("addProductToCartList", product);
            Swal.fire({
                title: "Ürün Ekleme Başarılı",
                text:
                    product.stock_name + " adlı ürün sepetinize başarılı ile eklendi",
                icon: "success",
                confirmButtonText: "Tamam",
            });
        }

    },
    removeProductFromCartList(context, product, number) {
        context.commit("removeProductFromCartList", product, number);
    },
    changeQuantityOfProduct(context, product, number ){
        context.commit("changeQuantityOfProduct", product, number);
    }

};

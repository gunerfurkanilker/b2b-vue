
import Swal from "sweetalert2";
import Vue from "vue";

export const state = {
    cartList: [],
    cartCategoryList: []
};

export const mutations = {
    addProductToCartList(state, data) {
        data.quantity = 1;
        state.cartList.push(data);
    },
    changeQuantityOfProduct(state, data) {
        let productItemInCart = state.cartList.find(e => e.stock_code == data.product.stock_code)
        if (productItemInCart) {
            if (data.definiteVal)
                productItemInCart.quantity = data.definiteVal;
            else
                productItemInCart.quantity += data.number;
            let indexProductItemInCart = state.cartList.indexOf(productItemInCart);
            Vue.set(state.cartList, indexProductItemInCart, productItemInCart);
        }
    },
    removeProductFromCartList(state, data) {
        var productItemInCart = state.cartList.find(e => e.stock_code == data.stock_code)
        if (productItemInCart) {
            let indexProductItemInCart = state.cartList.indexOf(productItemInCart);
            if (indexProductItemInCart > -1) {
                state.cartList.splice(indexProductItemInCart, 1);
            }
        }
    },
    setCartCategoryList(state, data) {
        state.cartCategoryList = data;
    },
    setCartCategoryListHeaders(state, data) {
        state.cartCategoryListHeaders = data;
    },
    setCartCategoryListLoading(state, data) {
        state.cartCategoryListLoading = data;
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
    removeProductFromCartList(context, product) {
        Swal.fire({
            title: "Ürün Silme İşlemi",
            text: product.stock_name + " adlı ürünü silmek istediğinize emin misiniz ?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Evet",
            cancelButtonText: "Hayır"
        })
            .then(function (confirm) {
                if (confirm.isConfirmed) {
                    context.commit("removeProductFromCartList", product);
                }

            });

    },
    changeQuantityOfProduct(context, product, number = 1, definiteVal = false) {
        context.commit("changeQuantityOfProduct", product, number, definiteVal);
    },
    fetchCartCategoryList(context) {
        context.commit("setCartCategoryListLoading", true)
        setTimeout(function () {
            context.commit('setCartCategoryList', [
                {
                    id: 1,
                    title: "Kategori 1",
                    status: true
                },
                {
                    id: 2,
                    title: "Kategori 2",
                    status: false
                },
            ]);
            context.commit('setCartCategoryListHeaders', [
                {
                    key: 'title',
                    label: 'Başlık',
                    sortable: false,

                },
                {
                    key: 'status',
                    label: 'Durum',
                    sortable: true,
                    class: "text-center"

                },
                {
                    key: 'process',
                    label: 'İşlem',
                    sortable: false,
                    class: "text-center"

                }
            ]);
            context.commit("setCartCategoryListLoading", false)
        }, 2000)
    }

};

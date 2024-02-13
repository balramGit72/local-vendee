import {
    Login,
    Signup,
    Home,
    Category,
    Details,
    TopProduct,
    Wishlist,
    Payment,
    EditProfile,
    ContactUs,
    ProductDetail,
    ClassifiedDetail,
    ClassifiedProduct
} from "./Pages";

export const routes = [
    {
        path: "/login",
        element: Login,
        exact: true,
        isPrivate: 0
    },
    {
        path: "/signup",
        element: Signup,
        exact: true,
        isPrivate: 0
    },
    {
        path: "/",
        element: Home,
        exact: true,
        isPrivate: 1
    },
    {
        path: "/*",
        element: Home,
        exact: true,
        isPrivate: 1
    },
    {
        path: "/category",
        element: Category,
        exact: true,
        isPrivate: 2
    },  
    {
        path: "/details",
        element: Details,
        exact: true,
        isPrivate: 2
    },
    {
        path: "/top-product",
        element: TopProduct,
        exact: true,
        isPrivate: 2
    },
    {
        path: "/wishlist",
        element: Wishlist,
        exact: true,
        isPrivate: 2
    },
    {
        path:"/payment",
        element: Payment,
        exact: true,
        isPrivate: 2
    },
    {
        path:"/edit-profile",
        element:EditProfile,
        exact:true,
        isPrivate: 2
    },
    {
        path:"/contact-us",
        element:ContactUs,
        exact:true,
        isPrivate: 2
    },
    {
        path:"/product-detail",
        element:ProductDetail,
        exact:true,
        isPrivate: 2
    },
    {
        path:"/classified-detail",
        element:ClassifiedDetail,
        exact:true,
        isPrivate: 2
    },
    {
        path:"/classified-product/:id",
        element:ClassifiedProduct,
        exact:true,
        isPrivate: 2
    }
];
import * as auth from "./auth";
import * as fCart from "./fCart";
import * as homeAction from "./homeAction"

export default {
    ...auth,
    ...fCart,
    ...homeAction
}
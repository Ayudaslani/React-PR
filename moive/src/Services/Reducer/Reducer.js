
// const initialstate = {
//     men: [],
//     allMen: [],
//     MenData: null,
//     isError: "",
//     isCreate: false,
//     isloading:false
// }
// export const ReducerData = (state = initialstate, action) => {
//     switch (action.type) {
//         case "LOADING" :
//             return{
//                 ...state,
//                 isloading:true
//             }
//         case "Rej_ALL":
//             return {
//                 ...state,
//                 isError: action.message,
//                 isCreate: false,
//                 isloading:false
//             }

//         case "GET_ALL_MEN_DATA":
//             return {
//                 ...state,
//                 men: action.payload,
//                 allMen: action.payload,
//                 isCreate: false,
//                 isloading:false
//             }
//         case "ADD_MEN_DATA":
//             return {
//                 ...state,
//                 isCreate: true
//             }

//         case "GET_ONE_MEN_DATA":
//             return {
//                 ...state,
//                 MenData: action.payload
//             }
//         case "UPDATE_MEN_DATA":
//             return {
//                 ...state,
//                 MenData: null,
//                 men: action.payload
//             }
//         case "FILTER_MEN_DATA":
//             let allMen = state.allMen;
//             let { categories, Brand, pattern } = action.payload;

//             let filtered = allMen.filter((item) => {
//                 const matchCategory =
//                     categories.length === 0 || categories.some(
//                         (cat) => cat.toLowerCase() === item.categoryType.toLowerCase()
//                     );

//                 const matchBrand =
//                     Brand.length === 0 || Brand.some((brand) => brand.toLowerCase() === item.brand.toLowerCase());

//                 const matchPattern =
//                     pattern.length === 0 ||
//                     (Array.isArray(item.pattern)
//                         ? pattern.some((patt) =>
//                             item.pattern
//                                 .map((i) => i.toLowerCase())
//                                 .includes(patt.toLowerCase())
//                         )
//                         : pattern.some(
//                             (patt) => patt.toLowerCase() === item.pattern.toLowerCase()
//                         ));
//                 return matchCategory && matchBrand && matchPattern;
//             });

//             return {
//                 ...state,
//                 men: filtered
//             }
//         default:
//             return state
//     }
// }

const initialstate = {
    moive: [],
    onemoive: null,
    isError: "",
    isCreated: false,
    isLoading: false,
    isUpdated: false
}

export const ReducerData = (state = initialstate, action) => {
    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                isLoading: true
            }
        case 'REJ_ALL':
            return {
                ...state,
                isError: action.message
            }
        case 'ADD_MOIVE':
            return {
                ...state,
                isCreated: true
            }

        case 'GET_ALL_MOIVE':
            return {
                ...state,
                moive: action.payload,
                isLoading: false,
                isCreated: false,
                isError: "",

            }
        case 'GET_ONE_MOIVE':
            return {
                ...state,
                onemoive: action.payload,
            }

        case 'UPDATE_MOIVE':
            return {
                ...state,
                onemoive: null,
                isUpdated: true,
                isLoading:false
            }


        default:
            return state
    }
}
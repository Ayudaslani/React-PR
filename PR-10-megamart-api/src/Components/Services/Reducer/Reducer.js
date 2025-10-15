const initialstate = {
    men: [],
    allMen: [],
    loading: false,
    MenData: null,
    isError: ""
}
export const ReducerData = (state = initialstate, action) => {
    switch (action.type) {
        case "Rej_ALL":
            return {
                ...state,
                isError: action.message
            }

        case "GET_ALL_MEN_DATA":
            return {
                ...state,
                men: action.payload,
                allMen: action.payload
            }
        case "ADD_MEN_DATA":
            return {
                ...state,
            }

        case "GET_ONE_MEN_DATA":
            return {
                ...state,
                MenData: action.payload
            }
        case "UPDATE_MEN_DATA":
            return {
                ...state,
                MenData: null,
                men: action.payload
            }
        case "FILTER_MEN_DATA":
            let allMen = state.allMen;
            let { categories, Brand, pattern } = action.payload;

            let filtered = allMen.filter((item) => {
                const matchCategory =
                    categories.length === 0 || categories.some(
                        (cat) => cat.toLowerCase() === item.categoryType.toLowerCase()
                    );

                const matchBrand =
                    Brand.length === 0 || Brand.some((brand) => brand.toLowerCase() === item.brand.toLowerCase());

                const matchPattern =
                    pattern.length === 0 ||
                    (Array.isArray(item.pattern)
                        ? pattern.some((patt) =>
                            item.pattern
                                .map((i) => i.toLowerCase())
                                .includes(patt.toLowerCase())
                        )
                        : pattern.some(
                            (patt) => patt.toLowerCase() === item.pattern.toLowerCase()
                        ));
                return matchCategory && matchBrand && matchPattern;
            });

            return {
                ...state,
                men: filtered
            }
        default:
            return state
    }
}
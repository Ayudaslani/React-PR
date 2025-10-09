export const AddMenData = (data) => {
    return {
        type: "ADD_MEN_DATA",
        payload: data
    }
}

export const DeleteMenData = (data) => {
    return {
        type: "DELETE_MEN_DATA",
        payload: data
    }
}
export const GetOneMenData = (id) => {
    return {
        type: "GET_ONE_MEN_DATA",
        payload: id
    }
}
export const UpdateMenData = (data) => {
    return {
        type: "UPDATE_MEN_DATA",
        payload: data
    }
}
export const filterData = (data) => {
    return {
        type: "FILTER_MEN_DATA",
        payload: data
    }
}


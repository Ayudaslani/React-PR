import { setDoc, doc, collection, getDocs, deleteDoc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../config/firebase.config';

export const AddMenData = () => {
    return {
        type: "ADD_MOIVE"
    }
}

export const AllRej = (msg) => {
    return {
        type: "REJ_ALL",
        message: msg
    }
}

export const GetAllMoive = (data) => {
    return {
        type: "GET_ALL_MOIVE",
        payload: data

    }
}

export const Loading = () => {
    return {
        type: "LOADING"
    }
}

export const GetMoive = (data) => {
    return {
        type: "GET_ONE_MOIVE",
        payload: data
    }

}
export const UpdateMoive = () => {
    return {
        type: "UPDATE_MOIVE",
        
    }
}

export const setSearchText = (text) => {
    return {
        type: "SET_SEARCH_TEXT",
        payload: text
    }
}



export const AddmoiveAsync = (data) => {
    return async (dispatch) => {
        dispatch(Loading());

        try {
            await setDoc(doc(db, "moive", `${data.id}`), data);
            dispatch((AddMenData()))
        }
        catch (error) {
            dispatch(AllRej(error.message))
        }
    }
}

export const GetAllMoiveAsync = () => {
    return async (dispatch) => {
        dispatch(Loading());
        try {
            const res = await getDocs(collection(db, "moive"));
            let result = [];
            res.forEach((doc) => {
                const data = doc.data();
                result.push(data);
            });
            dispatch(GetAllMoive(result));
        } catch (error) {
            dispatch(AllRej(error.message));
        }
    };
}

export const DeleteMoiveAsync = (id) => {
    return async (dispatch) => {
        dispatch(Loading());
        try {
            await deleteDoc(doc(db, "moive", `${id}`));
            dispatch(GetAllMoiveAsync())
        } catch (error) {
            dispatch(AllRej(error.message))
        }

    }
}

export const GetOneMoiveAsync = (id) => {
    return async (dispatch) => {
        dispatch(Loading());
        try {
            let res = await getDoc(doc(db, "moive", `${id}`))
            dispatch(GetMoive(res.data()))
        } catch (error) {
            dispatch(getPropertyRej(error.message))
        }

    }
}

export const UpdatemoiveAsync = (data) => {
    return async (dispatch) => {
        dispatch(Loading());
        try {
            await updateDoc(doc(db, 'moive', `${data.id}`), data)
            dispatch(UpdateMoive())

        } catch (error) {
            dispatch(AllRej(error.message));
        }

    }
}





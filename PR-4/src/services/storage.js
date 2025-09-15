export const GetstrorageData = () => {
    return JSON.parse(localStorage.getItem("reviewData")) || [];
}

export const Setstoragedata = (data) => {
    localStorage.setItem('reviewData', JSON.stringify(data));
}
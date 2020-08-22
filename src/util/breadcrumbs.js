const breadcrumbs = (link) => {
    const arr = link.split("/");
    const newArr = [];
    var str = "";

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "" && arr[i] !== "https:" && arr[i] !== "http:") {
            newArr.push(arr[i]);
        }
    }

    for (let i = 0; i < newArr.length; i++) {
        str += newArr[i];
        if (i < newArr.length - 1) str += " › ";
    }

    return str.length < 60 ? str : str.substring(0, 60) + "...";
};

export default breadcrumbs;

const trimData = (str) => (str.indexOf("?") !== -1 ? str.split("?")[0] : str);

const breadcrumbs = (link) => {
    const arr = link.split("/");
    var newArr = [];
    var str = "";

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "" && arr[i] !== "https:" && arr[i] !== "http:") {
            const data = trimData(arr[i]);
            if (data !== "") newArr.push(data);
        }
    }

    for (let i = 0; i < newArr.length; i++) {
        str += newArr[i];
        if (i < newArr.length - 1) str += " › ";
    }

    return str.length < 60 ? str : str.substring(0, 60) + "...";
};

export default breadcrumbs;

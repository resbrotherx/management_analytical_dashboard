import moment from "moment";
import axios from "axios";

export const yearStartAndEnd = (
    params
) => {
    let _moment = moment();
    let _moment2 = moment();
    if (params) {
        const {
            startDate,
            endDate,
        } = params;
        if (typeof startDate !== undefined) {
            _moment = moment(startDate);
        }
        if (typeof endDate !== undefined) {
            _moment2 = moment(endDate);
        }
    }

    return {
        start: _moment.startOf('year').format('YYYY-MM-DD'),
        end: _moment2.endOf('year').format('YYYY-MM-DD'),
    }
}

export const weekStartAndEnd = (
    params
) => {
    let _moment = moment();
    let _moment2 = moment();
    if (params) {
        const {
            startDate,
            endDate,
        } = params;
        if (typeof startDate !== undefined) {
            _moment = moment(startDate);
        }
        if (typeof endDate !== undefined) {
            _moment2 = moment(endDate);
        }
    }

    return {
        start: _moment.startOf('week').format('YYYY-MM-DD'),
        end: _moment2.endOf('week').format('YYYY-MM-DD'),
    }
}

export const quarterStartAndEnd = (
    params
) => {
    let _moment = moment();
    let _moment2 = moment();
    if (params) {
        const {
            startDate,
            endDate,
        } = params;
        if (typeof startDate !== undefined) {
            _moment = moment(startDate);
        }
        if (typeof endDate !== undefined) {
            _moment2 = moment(endDate);
        }
    }


    return {
        start: _moment.startOf('quarter').format('YYYY-MM-DD'),
        end: _moment2.endOf('quarter').format('YYYY-MM-DD'),
    }
}

export const dailyStartAndEnd = (
    params
) => {
    let _moment = moment();
    let _moment2 = moment();
    if (params) {
        const {
            startDate,
            endDate,
        } = params;
        if (typeof startDate !== undefined) {
            _moment = moment(startDate);
        }
        if (typeof endDate !== undefined) {
            _moment2 = moment(endDate);
        }
    }

    return {
        start: _moment.startOf('quarter').format('YYYY-MM-DD'),
        end: _moment2.endOf('quarter').format('YYYY-MM-DD'),
    }
}

export const sendRequest = async ({
    url,
    //datepiker,
    setState,
    onError,
    method = 'get',
}) => {
    console.log("method", method)
    switch (method) {
        case 'get':
            await axios.get(`${url}`)
                .then((response) => setState(response.data))
                .catch((error) => {
                    console.log(error);
                    if (onError) {
                        onError(error);
                    }
                })
            break;
        default:
            break;
    }
}

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const prepareValue = (transform, value) => {
    if (!value) return value;
    if (transform) {
        switch (transform) {
            case "number":
                value = numberWithCommas(value);
                break;
            case "currency":
                value = parseFloat(value).toFixed(2);
                value = numberWithCommas(value);
                break;
            case "tofixed":
                value = parseFloat(value).toFixed(2);
                break;
            case "moment":
            case "date":
                value = moment(value).format("yyyy/MM/DD");
                break;
            case "datetime":
                value = moment(value).format("yyyy/MM/DD hh:mm");
                break;
            default:
                break;
        }
    }
    return value;
};
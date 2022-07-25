const baseURL = "http://188.166.99.136:7010/";

const allChartPageUrls = {
    billtypeUrl: "http://188.166.99.136:7010/payments/totalCollectionByBillType/",
    baseUrl: "http://188.166.99.136:7010/general/totalBilledUnitsByFeeder",
    serviceClusterUrl: "http://188.166.99.136:7010/payments/totalCollectionByServiceCluster/",
    districtlUrl: "http://188.166.99.136:7010/payments/totalCollectionByDistrict/",

    categoryUrl: "http://188.166.99.136:7010/payments/totalCollectionByCustomers/",
    billunitdistrictUrl: "http://188.166.99.136:7010/billed-units/totalBilledUnitsByDistrict/",
    billunitcluterUrl: "http://188.166.99.136:7010/billed-units/totalBilledUnitsByServiceCluster/",
};

export const urls = {
    ...{ allChartPageUrls },
};

export const getAppUrl = (() => {
    return {
        ...{
            allChartPageUrls,
        },
        ...{
            paymentsTotalCollectionByBillType: `${baseURL}payments/totalCollectionByBillType/`,
            generalTotalBilledUnitsByFeeder: `${baseURL}general/totalBilledUnitsByFeeder`,
            paymentsTotalCollectionByServiceCluster: `${baseURL}payments/totalCollectionByServiceCluster/`,
            paymentsTotalCollectionByDistrict: `${baseURL}payments/totalCollectionByDistrict/`,
            paymentTotalCollectionByCustomers: `${baseURL}payments/totalCollectionByCustomers/`,
            billedunitsTotalBilledUnitsByDistrict: `${baseURL}billed-units/totalBilledUnitsByDistrict/`,
            billedUnitstotalBilledUnitsByServiceCluster: `${baseURL}billed-units/totalBilledUnitsByServiceCluster/`,
        }
    }
})();
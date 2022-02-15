 const DriversLicenseValidation = (state) => {
    const states = {
        AL: new RegExp(/\b\d{7,8}\b/, "g"),
        AK: new RegExp(/\b\d{7}\b/, "g"),
        AZ: new RegExp(/(\b[A-Z]{1}\d{8}\b)|(\b\d{9}\b)/, "g"),
        AR: new RegExp(/\b\d{9}\b/, "g"),
        CA: new RegExp(/\b[A-Z]{1}\d{7}\b/, "g"),
        CO: new RegExp(/\b\d{9}\b/, "g"),
        CT: new RegExp(/\b\d{9}\b/, "g"),
        DE: new RegExp(/\b\d{2,7}\b/, "g"),
        DC: new RegExp(/(\b\d{7,9}\b)/, "g"),
        FL: new RegExp(/\b[A-Z]{1}\d{12}\b/, "g"),
        GA: new RegExp(/\b\d{9}\b/, "g"),
        HI: new RegExp(/(\bH\d{8}\b)|(\b\d{9}\b)/, "g"),
        ID: new RegExp(/(\b[A-Z]{2}\d{6}[A-Z]{1}\b)|(\b\d{9}\b)/, "g"),
        IL: new RegExp(/\b[A-Z]{1}\d{11,12}\b/, "g"),
        IN: new RegExp(/(\b\d{10}\b)/, "g"),
        IA: new RegExp(/(\b\d{9}\b)|(\b\d{3}[A-Z]{2}\d{4}\b)/, "g"),
        KS: new RegExp(/(\b[K]\d{8}\b)/, "g"),
        KY: new RegExp(/\b[A-Z]{1}\d{8}\b/, "g"),
        LA: new RegExp(/(\b[0]?\d{7,8}\b$)|(\b\d{7,8}\b$)/, "g"),
        ME: new RegExp(/\b\d{7}\b/, "g"),
        MD: new RegExp(/(\b[A-Z]{1}\d{12}\b)|(\bMD\d{11}\b)/, "g"),
        MA: new RegExp(/(\bSA\d{7}\b)|(\bS\d{8}\b)|(\b\d{9}\b)/, "g"),
        MI: new RegExp(/(\b[A-Z]{1}\d{12}\b)/, "g"),
        MN: new RegExp(/(\b[A-Z]{1}\d{12}\b)/, "g"),
        MS: new RegExp(/\b\d{9}\b/, "g"),
        MO: new RegExp(
            /(\b\d{9}\b)|(\b[A-Z]{1}\d{5,9}\b)|(\b\d{3}[A-Z]{1}\d{6}\b)/,
            "g"
        ),
        MT: new RegExp(
            /(\b\d{13}\b$)|(\b(\d|[A-Z]){9}\b$)|(\b[A-Z]{3}\d{10}\b$)/,
            "g"
        ),
        NE: new RegExp(/\b[A-Z]{1}\d{3,8}\b/, "g"),
        NV: new RegExp(/\b\d{10}\b/, "g"),
        NH: new RegExp(/(\b\d{2}[A-Z]{3}\d{5}\b)|(\bNHL\d{8}\b)/, "g"),
        NJ: new RegExp(/\b[A-Z]{1}\d{14}\b/, "g"),
        NM: new RegExp(/\b\d{9}\b/, "g"),
        NY: new RegExp(/(\b\d{9}\b)|(\b[A-Z]{1}\d{18}\b)/, "g"),
        NC: new RegExp(/\b\d{1,12}\b/, "g"),
        ND: new RegExp(/\b(\d|[A-Z]){9}\b/, "g"),
        OH: new RegExp(/(\b[A-Z]{2}\d{6}\b)|(\b\d{8}\b)/, "g"),
        OK: new RegExp(/(\b^[A-Z]{1}\d{9}\b)|(\b^\d{9}\b)/, "g"),
        OR: new RegExp(/(\b\d{5,7}\b)|(\b[A-Z]{1}\d{6}\b)/, "g"),
        PA: new RegExp(/\b\d{8}\b/, "g"),
        PR: new RegExp(/(\b\d{5,7}\b$)|(\b\d{9}\b$)/, "g"),
        RI: new RegExp(/(\b\d{7,8}\b)|(\bV\d{6}\b)/, "g"),
        SC: new RegExp(/\b\d{3,10}\b/, "g"),
        SD: new RegExp(/\b\d{6,9}\b/, "g"),
        TN: new RegExp(/\b\d{7,9}\b/, "g"),
        TX: new RegExp(/\b\d{7,8}\b/, "g"),
        UT: new RegExp(/\b\d{4,10}\b/, "g"),
        VT: new RegExp(/(\b\d{8}\b)|(\b\d{7}A\b)/, "g"),
        VA: new RegExp(/(\b[A-Z]{1}\d{8}\b)|(\b\d{9}\b)/, "g"),
        WA: new RegExp(
            /(\b[A-Z*]{4,8}\d{2,3}(\d|[A-Z]){2}\b)|(\bWDL([A-Z]|\d){9}\b)/,
            "g"
        ),
        WV: new RegExp(/\b([A-Z]|\d){7}\b/, "g"),
        WI: new RegExp(/\b[A-Z]{1}\d{13}\b/, "g"),
        WY: new RegExp(/\b\d{9}\b/, "g"),
    };
    return states[state.toUpperCase()];
}

module.exports = DriversLicenseValidation
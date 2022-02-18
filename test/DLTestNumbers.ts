interface StateOptions {
    criteria: string
    valid: string[]
    invalid: string[]

}

interface DLStates {
  [key:string]: StateOptions
}
export const DLTestNumbers = (state:string):StateOptions => {
  const states:DLStates = {
    AL: {
      criteria: "7-8 Numeric",
      valid: ["1234567", "12345678"],
      invalid: ["123456", "123456789", "ASDFGHJ", "ASDFGHJK"],
    },
    AK: {
      criteria: "7 Numeric",
      valid: ["1234567"],
      invalid: ["123456", "12345678", "ASDFGHJ", "123456G", "1232.'/"],
    },
    AZ: {
      criteria: "(1 Alpha + 8 Numeric) OR 9 Numeric",
      valid: ["A12345678", "123456789"],
      invalid: [
        "AB1234567",
        "A1234567",
        "A123456789",
        "1234567890",
        "12345678",
      ],
    },
    AR: {
      criteria: "9 Numeric",
      valid: ["123456789"],
      invalid: ["12345678", "1234567890", "ASDFGHJKL", "12345678A"],
    },
    CA: {
      criteria: "1 Alpha + 7 Numeric",
      valid: ["A1234567"],
      invalid: ["AS123456", "A12345678", "A123456"],
    },
    CO: {
      criteria: "9 Numeric",
      valid: ["123456789"],
      invalid: ["12345678", "1234567890", "ASDFGHJKL", "12345678A"],
    },
    CT: {
      criteria: "9 Numeric",
      valid: ["123456789"],
      invalid: ["12345678", "1234567890", "ASDFGHJKL", "12345678A"],
    },
    DE: {
      criteria: "2-7 Numeric",
      valid: ["12", "123", "1234", "12345", "123456", "1234567"],
      invalid: ["1", "12345678", "A123456", "ASDFGHJ"],
    },
    DC: {
      criteria: "7-9 Numeric",
      valid: ["1234567", "12345678", "123456789"],
      invalid: ["A123456", "ASDFGHJK", "123456", "1234567890"],
    },
    FL: {
      criteria: "1 Alpha + 12 Numeric",
      valid: ["A123456789012"],
      invalid: [
        "BB12345678901",
        "123456789012",
        "ASDFGHJKLQWE",
        "A1234567890,;",
      ],
    },
    GA: {
      criteria: "9 Numeric",
      valid: ["123456789"],
      invalid: ["12345678", "1234567890", "ASDFGHJKL", "12345678A"],
    },
    HI: {
      criteria: '("H" + 8 Numeric) or 9 Numeric',
      valid: ["H12345678", "123456789"],
      invalid: ["H1234567", "A12345678", "12345678", "1234567890"],
    },
    ID: {
      criteria: "(2 Alpha + 6 Numeric + 1 Alpha) or 9 Numeric",
      valid: ["AB123456A", "123456789"],
      invalid: ["A123456AB", "ABC12345D", "12345678", "1234567890"],
    },
    IL: {
      criteria: "1 Alpha + 11-12 Numeric",
      valid: ["A12345678901", "A123456789012"],
      invalid: [
        "AB12345678901",
        "AB123456789012",
        "1234567890123",
        "A1234567890",
        "ASDFGHJKLAZ",
      ],
    },
    IN: {
      criteria: "10 Numeric",
      valid: ["1234567890"],
      invalid: ["123456789", "12345678901", "A123456789", "ASDFGHJKLZ"],
    },
    IA: {
      criteria: "9 Numeric or (3 Numeric + 2 Alpha + 4 Numeric)",
      valid: ["123456789", "123AB1234"],
      invalid: [
        "12345678",
        "1234567890",
        "ASDFGHJKL",
        "12ABC12345",
        "1234A1234",
        "123;;1234",
      ],
    },
    KS: {
      criteria: '"K" + 8 Numeric',
      valid: ["K12345678"],
      invalid: ["A12345678", ";12345678", "K1234567", "K123456789"],
    },
    KY: {
      criteria: "1 Alpha + 8 Numeric",
      valid: ["A12345678"],
      invalid: ["1ASDFGHJK", "ASDFGHJKL;", "1234567890"],
    },
    LA: {
      criteria:
        '("0" + 7 Numeric) OR ("0" + 8 Numeric) OR 7 Numeric or 8 Numeric',
      valid: ["01234567", "012345678", "12345678", "1234567"],
      invalid: ["A1234567", "0A2345", "01234567,", "0123456789"],
    },
    ME: {
      criteria: "7 Numeric",
      valid: ["1234567"],
      invalid: ["123456", "12345678", "ASDFGHJ", "123456G", "1232.'/"],
    },
    MD: {
      criteria: '(1 Alpha + 12 Numeric) OR ("MD" + 11 Numeric)',
      valid: ["A123456789012", "MD12345678901"],
      invalid: [
        "MA12345678901",
        "DM12345678901",
        "AB12345678901",
        "A12345678901",
        "A1234567890123",
      ],
    },
    MA: {
      criteria: '("SA" + 7 Numeric) OR ("S" + 8 Numeric) OR 9 Numeric',
      valid: ["SA1234567", "S12345678", "123456789"],
      invalid: [
        "12345678",
        "1234567890",
        "S1234567",
        "S123456789",
        "A12345678",
        "SA123456",
        "SA12345678",
        "AB1234567",
      ],
    },
    MI: {
      criteria: "1 Alpha + 12 Numeric",
      valid: ["A123456789012"],
      invalid: [
        "BB12345678901",
        "123456789012",
        "ASDFGHJKLQWE",
        "A1234567890,;",
      ],
    },
    MN: {
      criteria: "1 Alpha + 12 Numeric",
      valid: ["A123456789012"],
      invalid: [
        "BB12345678901",
        "123456789012",
        "ASDFGHJKLQWE",
        "A1234567890,;",
      ],
    },
    MS: {
      criteria: "9 Numeric",
      valid: ["123456789"],
      invalid: ["12345678", "1234567890", "ASDFGHJKL", "12345678A"],
    },
    MO: {
      criteria:
        "9 Numeric OR (1 Alpha + 5-9 Numeric) OR (3 Numeric + 1 Alpha + 6 Numeric)",
      valid: [
        "123456789",
        "A12345",
        "A123456",
        "A1234567",
        "A12345678",
        "A123456789",
        "123A123456",
      ],
      invalid: [
        "12345678",
        "1234567890",
        "A1234",
        "A1234567890",
        "AB12345678",
        "1234A12345",
        "AB12123456",
        "12AB123456",
      ],
    },
    MT: {
      criteria: "13 Numeric or 9 Alpha-Numeric or (3 Alpha + 10 Numeric)",
      valid: ["1234567890123", "AB123AB12", "ABC1234567890"],
      invalid: [
        "123456789012",
        "12345678901234",
        "A12345678,",
        "1ASDFGHJK;",
        "AB12345678901",
        "ABCD123456789",
      ],
    },
    NE: {
      criteria: "1 Alpha + 3-8 Numeric",
      valid: ["A123", "A1234", "A12345", "A123456", "A1234567"],
      invalid: ["A12", "A123456789", "12345678"],
    },
    NV: {
      criteria: "10 Numeric",
      valid: ["1234567890"],
      invalid: ["123456789", "12345678901", "A123456789", "ASDFGHJKL;"],
    },
    NH: {
      criteria: '(2 Numeric + 3 Alpha + 5 Numeric) OR ("NHL" + 8 Numeric)',
      valid: ["12ABC12345", "NHL12345678"],
      invalid: [
        "123AB12345",
        "12AB123456",
        "1ABC123456",
        "12ABC1234",
        "12ABC123456",
      ],
    },
    NJ: {
      criteria: "1 Alpha + 14 Numeric",
      valid: ["A12345678901234"],
      invalid: ["A1234567890123", "A123456789012345", "123456789012345"],
    },
    NM: {
      criteria: "9 Numeric",
      valid: ["123456789"],
      invalid: ["12345678", "1234567890", "ASDFGHJKL", "12345678A"],
    },
    NY: {
      criteria: "9 Numeric OR 1 Alpha + 18 Numeric",
      valid: ["123456789", "A123456789123456789"],
      invalid: [
        "12345678",
        "1234567890",
        "A12345678912345678",
        "A1234567891234567891",
        "A123456789,.3456789",
      ],
    },
    NC: {
      criteria: "1-12 Numeric",
      valid: [
        "1",
        "12",
        "123",
        "1234",
        "12345",
        "123456",
        "1234567",
        "12345678",
        "123456789",
        "1234567890",
        "12345678901",
        "123456789012",
      ],
      invalid: ["1234567890123", "A123456789", "123456789D"],
    },
    ND: {
      criteria: "9 Alpha-Numeric",
      valid: ["A12345678", "234567ASD", "123456789", "ASDFGHJKL"],
      invalid: ["ASDFGH,.4", "1234567890", "ASDFGHJKLM"],
    },
    OH: {
      criteria: "2 Alpha + 6 Numeric OR 8 Numeric",
      valid: ["AB123456", "12345678"],
      invalid: ["AB12345", "AB1234567", "AB123456789", "ABC123456", "A,123456"],
    },
    OK: {
      criteria: "(1 Alpha + 9 Numeric) or 9 Numeric",
      valid: ["123456789", "A123456789"],
      invalid: [
        "12345678",
        "1234567890",
        "A12345678",
        "A1234567890",
        "AB12345678",
        "AB123456789",
      ],
    },
    OR: {
      criteria: "5-7 Numeric OR (1 Alpha + 6 Numeric)",
      valid: ["12345", "123456", "1234567", "A123456"],
      invalid: ["1234", "12345678", "AB123456", "AB1245", "A1234567", "A12345"],
    },
    PA: {
      criteria: "8 Numeric",
      valid: ["12345678"],
      invalid: ["A1234567", "A12345678", "123456;["],
    },
    PR: {
      criteria: "5-7 Numeric OR 9 Numeric",
      valid: ["12345", "123456", "1234567", "123456789"],
      invalid: ["1234", "12345678", "A12345", "AB1234567", "1234567,."],
    },
    RI: {
      criteria: '7-8 Numeric OR ("V" + 6 Numeric)',
      valid: ["1234567", "12345678", "V123456"],
      invalid: ["123456", "123456789", "V12345", "V1234567"],
    },
    SC: {
      criteria: "3-10 Numeric",
      valid: [
        "1234567890",
        "123456789",
        "12345678",
        "1234567",
        "123456",
        "12345",
        "1234",
        "123",
      ],
      invalid: ["12", "12345678901", "A12345678"],
    },
    SD: {
      criteria: "6-9 Numeric",
      valid: ["123456", "1234567", "12345678", "123456789"],
      invalid: ["12345", "1234567890", "A1234567"],
    },
    TN: {
      criteria: "7-9 Numeric",
      valid: ["1234567", "12345678", "123456789"],
      invalid: ["123456", "1234567890", "A1234567"],
    },
    TX: {
      criteria: "7-8 Numeric",
      valid: ["1234567", "12345678"],
      invalid: ["123456", "123456789", "A1234567"],
    },
    UT: {
      criteria: "4-10 Numeric",
      valid: [
        "1234567890",
        "123456789",
        "12345678",
        "1234567",
        "123456",
        "12345",
        "1234",
      ],
      invalid: ["123", "12345678901", "A12345678"],
    },
    VT: {
      criteria: '8 Numeric or (7 Numeric + "A")',
      valid: ["12345678", "1234567A"],
      invalid: ["1234567", "123456789", "1234567B"],
    },
    VA: {
      criteria: "(1 Alpha + 8 Numeric) OR 9 Numeric",
      valid: ["A12345678", "123456789"],
      invalid: ["AB12345678", "AB1234567", "12345678", "1234567890"],
    },
    WA: {
      criteria:
        '4-8 Alpha + 2-3 Numeric + 2 Alpha-Numeric OR "WDL" + 9 Alpha-Numeric',
      valid: ["ABCD12AB", "ABCDEFGH123AB", "WDL123456789"],
      invalid: ["ABC12AB", "ABCD1234AB", "ABCD12ABC", "ABCDEFGHI123AB"],
    },
    WV: {
      criteria: "7 Alpha-Numeric",
      valid: ["ABC1234", "123ABCD", "ABCDEFG", "1234567"],
      invalid: ["ABC123", "ABCD12334", "ABC456;"],
    },
    WI: {
      criteria: "1 Alpha + 13 Numeric",
      valid: ["A1234567890123"],
      invalid: ["AB123456789012", "A123456789012", "A12345678901234"],
    },
    WY: {
      criteria: "9 Numeric",
      valid: ["123456789"],
      invalid: ["12345678", "1234567890", "ASDFGHJKL", "12345678A"],
    },
  };
    return states[state.toUpperCase()];
};

export const DLStateList = ():string[] => {
  return [
    "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "DC",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "PR",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
  ]
}

module.exports = { DLStateList,DLTestNumbers}
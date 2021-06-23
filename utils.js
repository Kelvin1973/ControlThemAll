export const asArray = (x) => Array.isArray(x) ? x : [x]

export const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2

export const getEnumByValue = (myEnum, enumValue) => {
    let keys = Object.keys(myEnum).filter(x => myEnum[x] == enumValue)
    return keys.length > 0 ? keys[0] : null
}

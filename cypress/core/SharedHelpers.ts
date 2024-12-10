export const constants ={
    HOST: 'http://127.0.0.1',
    PORT: 8000,
    nameDataAttr:'data-test'
}
Object.freeze(constants);

export const baseURL = `${constants.HOST}:${constants.PORT}/`

// Helpers
const isEmptyValue = (value:string | null | undefined) => {
    if(value === '' || value === null || value === undefined) {
        throw new Error('Не указали все параметры для data-attr')
    }
}

//Generate data-attr для конкретных модулей и для shared
export const generateNameAttr = (nameModule:string,namePage:string,nameElement:string) => {
    isEmptyValue(nameModule)
    isEmptyValue(namePage)
    isEmptyValue(nameElement)
    return `${nameModule}-${namePage}-${nameElement}`
}

export const generateNameAttrShared = (nameElement:string) => {
    isEmptyValue(nameElement)
    return `shared-${nameElement}`
}

export const getDataAttr = (val:string)=> `[${constants.nameDataAttr}="${val}"]`


// Standarts
export const listTimeOuts = {
    '1000':1000,
    '1500':1500,
    '2000':2000,
    '2500':2500,
    '3000':3000,
    '3500':3500
}

export const statusesApi = {
    '200':200,
    '201':201,
    '400':400,
    '401':401,
    '402':403,
    '404':404,
    '500':500,
}

export const methodsApi = {
    'GET': 'GET',
    'POST': 'POST',
    'PUT': 'PUT',
    'DELETE': 'DELETE',
    'OPTIONS': 'OPTIONS',
    'PATCH': 'PATCH',
}



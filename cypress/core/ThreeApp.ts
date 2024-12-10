import {baseURL, generateNameAttr, generateNameAttrShared} from "./SharedHelpers";

export const ThreeApp = {
    pageLanding:{
        name: 'Landing',
        url: baseURL,
        elements:{}
    },
    pageLK:{
        name:'Lk',
        url: baseURL + 'lk',
       elements:{
            inputSearch:generateNameAttr('Home','Lk','input-search'),
           buttonSearch:generateNameAttr('Home','Lk','button-search'),
           buttonClearSearch:generateNameAttr('Home','Lk','button-clear-search'),
       },
        pages:{}
    },
    sharedAttrs:{
        FF:generateNameAttrShared('button-gg'),
    }
}

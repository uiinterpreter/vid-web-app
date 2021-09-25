export function parseEntries(view, viewDictionary){
    if(viewDictionary.hasOwnProperty(view)){
        return viewDictionary[view].entries;
    } else {
        return [];
    }
}
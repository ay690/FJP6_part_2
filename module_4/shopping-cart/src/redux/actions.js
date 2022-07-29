//mein pass karunga id and id ke basis pe differntiate karenge and 
//Reducer joh hai palyload ke basis pe id ko access kar paayega

export const addCreator = (id)=>{
    return{
        type:"ADD_TO_CART",
        payload:id,
    }
}

export const removeCreator = (id)=>{
    return {
        type:"REMOVE_FROM_CART",
        payload:id,
    }
}


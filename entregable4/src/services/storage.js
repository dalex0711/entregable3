export function saveDate(...inputs){
    localStorage.setItem(inputs[0],JSON.stringify(inputs))
};


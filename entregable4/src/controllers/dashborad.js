export function saveDate(...inputs){
    localStorage.setItem('userData',JSON.stringify(inputs))
}
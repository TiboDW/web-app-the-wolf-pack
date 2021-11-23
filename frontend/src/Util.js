export default async function isAdmin(accessToken){
    const obj = JSON.parse(atob(accessToken.split('.')[1]));
    const {permissions} = obj;
    const required_permissions = ['create:movies', 'read:movies', 'update:movies', 'delete:movies'];
    for (let permission of required_permissions) {
        if (!permissions.includes(permission)) {
            return false;
        }
    }
    return true;
}
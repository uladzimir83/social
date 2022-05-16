export default class UserDto {
    email;
    id;
    role;
    login;

    constructor(model) {
        this.email = model.email;
        this.login = model.login;
        this.id = model.id;
        this.role = model.role;
    }
}
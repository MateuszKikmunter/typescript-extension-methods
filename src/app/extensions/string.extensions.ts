export { }; // this file needs to be a module

String.prototype.capitalizeFirstLetter = function(this: string) {
    if (this && this !== null) {
        return `${this.charAt(0).toUpperCase()}${this.slice(1)}`
    }
};

String.prototype.isNullOrEmpty = function(this: string) {
    return !this || this === null || this === "";
};
var Data = /** @class */ (function () {
    function Data(method, uri, version, message) {
        this.response = undefined;
        this.fulfilled = false;
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
    }
    Data.prototype.getData = function () {
        return this;
    };
    return Data;
}());
var myData = new Data('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData.getData());

class HttpError {
  constructor(message, errorCode) {
    this.errorCode = errorCode;
    this.message = message;
  }
}

module.exports = HttpError;

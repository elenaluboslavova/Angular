class KeyValuePair<T, U>{
    private key: T;
    private value: U;

    public setKeyValue(key: T, value: U): void{
        this.key = key;
        this.value = value;
    }

    public display(): string{
        return `key = ${this.key}, value = ${this.value}`;
    }
}

export default KeyValuePair;
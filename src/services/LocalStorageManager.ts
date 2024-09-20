export default class LocalStorageManager<T> {
	private readonly _key: string;
	private _defaultValue: T;

	constructor(key: string, defaultValue: T) {
		this._key = key;
		this._defaultValue = defaultValue;
	}

	public get(): typeof this._defaultValue | null {
		const value = localStorage.getItem(this._key);
		if (value === null) return null;
		const parsed = JSON.parse(value);

		return parsed;
	}

	public set(value: typeof this._defaultValue): void {
		localStorage?.setItem(this._key, JSON.stringify(value));
	}

	public delete(): void {
		localStorage?.removeItem(this._key);
	}
}

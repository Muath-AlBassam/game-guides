
class StoreService {

    state = new Map([]);

    set(key, value) {
        this.state.set(key, value);
    }

    get(key) {
        return this.state.get(key);
    }

    delete(key) {
        if (this.state.has(key)) {
            this.state.delete(key);
        }
    }
}

const storeService = new StoreService();
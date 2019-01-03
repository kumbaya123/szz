import Storage from 'react-native-storage';
import {AsyncStorage} from 'react-native'

var store = new Storage({
    size: 1000,
    storageBackend: AsyncStorage,
    defaultExpires: null,
    enableCache: true,
})
var storage = {
    load(key, id) {
        if (id) {
            return store.load({
                key: key,
                id: id
            }).then(ret => {
                return JSON.parse(ret);
            }).catch(err => {
                throw err;
            })
        } else {
            return store.load({
                key: key,
            }).then(ret => {
                return JSON.parse(ret);
            }).catch(err => {
                throw err;
            })
        }
    },
    save(key, data, expires, id) {
        let setValue = JSON.stringify(data)
        if (id) {
            store.save({
                key: key,
                id: id,
                data: setValue,
                expires: expires ? expires : null
            })
        } else {
            store.save({
                key: key,
                data: setValue,
                expires: expires ? expires : null
            })
        }
    },
    remove(key, id) {
        if (id) {
            store.remove({
                key: key,
                id: id
            })
        }
        else{
            store.remove({
                key: key,
            })
        }
    },
    clerMapForKey(key){
        store.clerMapForKey(key)
    }
}
export function StorageInit(){
    global.storage = storage
}
// module.exports = storage
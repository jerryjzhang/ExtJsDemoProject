Ext.define('AlcazarFailure.store.Failures', {
    extend: 'Ext.data.Store',
    model: 'AlcazarFailure.model.Failure',
//    autoLoad: true,
//    proxy: {
//        type: 'ajax',
//        url: 'alcazar/failure/get/name/all',
//        reader: {
//            type: 'json',
//            root: 'data',
//            successProperty: 'success'
//        }
//    },
//    data: [{
//        title: 'The Matrix',
//        year: '1999'
//    }, {
//        title: 'Star Wars: Return of the Jedi',
//        year: '1983'
//    }]
});
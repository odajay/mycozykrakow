var restaurantModel = {
    currentArray: [{
        name: '77 Sushi',
        lat: 50.0581635,
        lng: 19.9389086
    }, {
        name: 'Youmiko Sushi',
        lat: 50.0504222,
        lng: 19.943054
    }, {
        name: 'Zen Sushi',
        lat: 50.0621398,
        lng: 19.9417126
    }, {
        name: 'Urara',
        lat: 50.0643265802915,
        lng: 19.9408391802915
    }, {
        name: 'Youmiko Sushi',
        lat: 50.0569154,
        lng: 19.9324689
    }],

    filteredArray: [],
}



var viewModel = {
    currentRestaurant: ko.observableArray(restaurantModel.currentArray);
    // var self = this;
    // self.array = restaurantModel.currentArray;
    // self.restoFilter = ko.observable();

    // self.doFilter = function() {
    //     alert("test");
    // }
};

ko.applyBindings(viewModel);

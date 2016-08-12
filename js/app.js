
var shopModule = angular.module('shopModule', []);

shopModule.controller('shopCtrl', function ($scope) {

    $scope.checkboxs = [
        {checked: true},
        {checked: false},
        {checked: false}
    ];

    // shop elements
    $scope.items = [{
        name: 'Water',
        done: true,
        id: 1
    },{
        name: "Potates",
        done: true,
        id: 2
    },{
        name: 'Onion',
        done: false,
        id: 3
    }];


    // add new item
    $scope.addItem = function () {
        $scope.items.push({name: $scope.itemText, done: false});
        $scope.itemText = "";
    };


    $scope.buyItems = function () {
        var count = 0;
        angular.forEach($scope.items, function (item) {
            count += item.done;
        });
        return count;
     };

    $scope.deleteItem = function (id) {
        $scope.items.forEach(function (item, index) {
            if(item.id === id){
                if(item.done == false){
                    $scope.items.splice(index, 1);
                }else{
                    alert("Сначало снимите галочку с покупки");
                }
            }
        })
    };

    $scope.checkAllCheckboxs = function (checkbox) {
        angular.forEach($scope.checkboxs, function (item) {
            item.checked = !item.checked;

        })
    };



});





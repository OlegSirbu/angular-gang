(function () {
    angular.module('app.items.module')
        .controller('ItemsController', ItemsController);

    function ItemsController($scope, _, dataservices, authService) {
        console.log('ItemsController', arguments);
        var vm = this;


        vm.changeItem = function (item) {
            vm.activeMenu = item;
            vm.selectedItem = item;
        };
        vm.approveCallback = function () {
            console.log('approveCallback', vm.selectedItem);
        };
        vm.rejectCallback = function () {
            console.log('rejectCallback', vm.selectedItem);
        };
        vm.declineCallback = function () {
            console.log('declineCallback', vm.selectedItem);
        };
        vm.pager = {};
        vm.setPage = setPage;

        vm.logout = function (){
            authService.logout();
        };
        
        dataservices.getOrders().then(function (data) {
            vm.allItems = data;
            vm.descriptions = {
                ConfigurationID: '8731293123-idname',
                SheetWidth: 600,
                SheetHeight: 500,
                Width: 300,
                Height: 200,
                Brake: 10
            };
            vm.selectedItem = vm.allItems[0];
            vm.activeMenu = vm.selectedItem;
            vm.setPage(1);

        });

        function setPage(page) {
            if (page < 1 || page > vm.pager.totalPages) {
                return;
            }

            // get pager object from service
            vm.pager = GetPager(vm.allItems.length, page);

            // get current page of items
            vm.items = vm.allItems.slice(vm.pager.startIndex, vm.pager.endIndex + 1);
        }

        function GetPager(totalItems, currentPage, pageSize) {
            // default to first page
            currentPage = currentPage || 1;

            // default page size is 10
            pageSize = pageSize || 10;

            // calculate total pages
            var totalPages = Math.ceil(totalItems / pageSize);

            var startPage, endPage;
            if (totalPages <= 10) {
                // less than 10 total pages so show all
                startPage = 1;
                endPage = totalPages;
            } else {
                // more than 10 total pages so calculate start and end pages
                if (currentPage <= 6) {
                    startPage = 1;
                    endPage = 10;
                } else if (currentPage + 4 >= totalPages) {
                    startPage = totalPages - 9;
                    endPage = totalPages;
                } else {
                    startPage = currentPage - 5;
                    endPage = currentPage + 4;
                }
            }

            // calculate start and end item indexes
            var startIndex = (currentPage - 1) * pageSize;
            var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

            // create an array of pages to ng-repeat in the pager control
            var pages = _.range(startPage, endPage + 1);

            // return object with all pager properties required by the view
            return {
                totalItems: totalItems,
                currentPage: currentPage,
                pageSize: pageSize,
                totalPages: totalPages,
                startPage: startPage,
                endPage: endPage,
                startIndex: startIndex,
                endIndex: endIndex,
                pages: pages
            };
        }
    }
})();
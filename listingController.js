angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    // Adds a new listing to the directory
    $scope.addListing = function(listing) {
        // don't add duplicates
        for (i = 0; i < $scope.listings.length; i++)
            if ($scope.listings[i].code == listing.code)
                return;
        $scope.listings.push(listing);
    };
    
    // Removes a listing from the directory
    $scope.deleteListing = function(index) {
        console.log("delete " + $scope.listings[index].code);
        $scope.listings.splice(index, 1);
    };
    
    // Populates the "Detailed Information" box with info
    // from the specified listing
    $scope.showDetails = function(listing) {
        $scope.detailedInfo = listing;
    };
  }
]);
(function () {
    angular.module('ShoppingListCheckOff',[])
           .controller('ToBuyController', ToBuyController)
           .controller('AlreadyBoughtController', AlreadyBoughtController)
           .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
  
            //To buy list
               ToBuyController.$inject =['ShoppingListCheckOffService'];
               function ToBuyController (ShoppingListCheckOffService)
            {
                   var buy = this;
                   buy.items = ShoppingListCheckOffService.toBuyItems();
                   buy.removeItem = function(itemIndex){
                       ShoppingListCheckOffService.bought(itemIndex);
                   };
               }
  
            //Already bought list
              AlreadyBoughtController.$inject =['ShoppingListCheckOffService'];
              function AlreadyBoughtController (ShoppingListCheckOffService)
            {
                  var bought = this;
                  bought.items = ShoppingListCheckOffService.boughtItems();
              }
  
            //Shopping list service
              function ShoppingListCheckOffService()
            {
                  var service = this;
              var toBuyItems =
              [
                {name: "Cookies",
                 quantity: 10
                },
                {name: "Chocolate",
                 quantity: 1
                },
                {name: "Milk",
                 quantity: 1
                },
                {name: "Yogurts",
                 quantity: 4
                },
                {name: "Meat",
                 quantity: 1
                },
                {name: "Eggs",
                 quantity: 10
                },
                {name: "Tomato",
                 quantity: 5
                },
                {name: "Cucumber",
                 quantity: 1
                },
                {name: "Bread",
                 quantity: 1
                },
                {name: "Cheese",
                 quantity: 1
                }
              ];
  
                  var boughtItems = [];
  
                service.bought = function(itemIndex) {
                        boughtItems.push(toBuyItems[itemIndex]);
                        toBuyItems.splice(itemIndex, 1);
                };
  
                service.boughtItems = function() {
                        return boughtItems;
                };
  
                service.toBuyItems = function() {
                        return toBuyItems;
                };
            }
  
  })();
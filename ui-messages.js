/**
 * Simple ng-messages like implementation for angular < 1.3
 *
 * @author Tilwin Joy <tilwinjoy@gmail.com>
 */
 
angular.module('uiMessages', []).directive('uiMessages', function() {

    return {
        restrict: 'EA',
        link: function(scope, element, attrs) {
            // hide all message elements
            var messageElements = element.find('ui-message,[ui-message]').css('display', 'none');

            // watch when messages object change - change display state of the elements
            scope.$watchCollection(attrs.uiMessages || attrs['for'], function(messages) {
                var oneElementAlreadyShowed = false;
                angular.forEach(messageElements, function(messageElement) {
                    messageElement = angular.element(messageElement);
                    var message = messageElement.attr('ui-message') || messageElement.attr('when');
                    if (!oneElementAlreadyShowed && messages[message] && messages[message] === true) {
                        messageElement.css('display', 'block');
                        oneElementAlreadyShowed = true;
                    } else {
                        messageElement.css('display', 'none');
                    }
                });
            });
        }
    };
});

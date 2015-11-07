require(["dojo/dom", "dojo/dom-construct", "dojo/on", "dojo/domReady!"],
        function(dom, domConstruct, on) {
            var node = dom.byId('one');
            node.innerHTML = "hello";

            var list = dom.byId("list");
            domConstruct.create("li", {
                innerHTML: 'newNode',
                style: {
                    color: 'red'
                }
            }, list);

            function firstHandler() {
                var first = dom.byId('three');
                domConstruct.place(first, list, "last");
            }

            on(dom.byId('one'), 'click', firstHandler);
            on(dom.byId('two'), 'click', function(){
                domConstruct.empty(list);
            });
            console.log('got here!');
});

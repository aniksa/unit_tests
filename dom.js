 test("prettyDate update", function() {
            var links = document.getElementById("qunit-fixture").getElementsByTagName("a");
            equal(links[0].innerHTML, "January 28th, 2008");
            equal(links[2].innerHTML, "January 27th, 2008");
            prettyDate.update("2008-01-28T22:25:00Z:00");
            equal(links[0].innerHTML, "2 hours ago");
            equal(links[2].innerHTML, "Yesterday");
        });

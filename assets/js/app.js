/* All call with {{VueJsCALL}} are done with v-for inside an object */
let vm = new Vue({
    el: "#app",
    data: {
        Navbar: 
        [
            {
                navLink1: "home",
                navLink2: "about",
                navLink3: "services",
                navLink4: "work",
                navLink5: "articles",
            }
        ],
        hero: [
            {
                bigText: "Building inspiring spaces",
                littleText: "We build inspiring Residential & Commercial Spaces",
            }
        ],
        connect: [
            {
                textConnect: "Do You Have a Construction Project We Can Help With ?"
            }
        ]
    }
});
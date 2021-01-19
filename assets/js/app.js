/* All call with {{VueJsCALL}} are done with v-for inside an object */
let vm = new Vue({
    el: "#app",
    data: {
        Navbar: [
            {
                navLink: "home",
                link: "",
            },
            {
                navLink: "about",
                link: "",
            },            
            {
                navLink: "services",
                link: "",
            },            
            {
                navLink: "work",
                link: "",
            },            
            {
                navLink: "articles",
                link: "",
            },
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
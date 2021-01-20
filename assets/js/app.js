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
        ],
        specialists: [
            {
                icon: "",
                text: "Buildings",
                subtitle: ""
            },
            {
                icon: "",
                text: "Renovate",
                subtitle: ""
            },
            {
                icon: "",
                text: "Construct",
                subtitle: ""
            },
            {
                icon: "",
                text: "Exclusive",
                subtitle: ""
            },
        ],
        milestone: [
            {
                icon: "",
                number: "3534",
                text: "planning applications",
            },
            {
                icon: "",
                number: "896",
                text: "completed project",
            },
            {
                icon: "",
                number: "172",
                text: "trained professionals",
            },
            {
                icon: "",
                number: "19",
                text: "international offices",
            },
        ]
    }
});
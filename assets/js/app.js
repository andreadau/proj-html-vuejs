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
                icon: "far fa-building",
                text: "Buildings",
                subtitle: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod labore quo, similique corporis."
            },
            {
                icon: "fas fa-sync-alt",
                text: "Renovate",
                subtitle: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod labore quo, similique corporis."
            },
            {
                icon: "fas fa-home",
                text: "Construct",
                subtitle: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod labore quo, similique corporis."
            },
            {
                icon: "fas fa-truck",
                text: "Exclusive",
                subtitle: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod labore quo, similique corporis."
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
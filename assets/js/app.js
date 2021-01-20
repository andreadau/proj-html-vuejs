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
        milestones: [
            {
                icon: "fas fa-suitcase fa-4x",
                number: "3534",
                text: "planning applications",
            },
            {
                icon: "far fa-building fa-4x",
                number: "896",
                text: "completed project",
            },
            {
                icon: "fas fa-users fa-4x",
                number: "172",
                text: "trained professionals",
            },
            {
                icon: "fas fa-globe fa-4x",
                number: "19",
                text: "international offices",
            },
        ]
    }
});
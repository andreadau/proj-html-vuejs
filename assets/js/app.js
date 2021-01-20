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
        ],
        works: [
            {
                img:"assets/img/project1-featured-294276386-400x400.jpg"
            },
            {
                img:"assets/img/project2-featured-15013609-400x400.jpg"
            },
            {
                img:"assets/img/project3-featured-189023420-400x400.jpg"
            },
        ],
        values: [
            {
                icon: "fas fa-home fa-3x bg-turq",
                title: "Great Services",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda vel dolore nemo officiis magnam ipsam.",
            },
            {
                icon: "fas fa-cog fa-3x bg-blue",
                title: "Highest Standards",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda vel dolore nemo officiis magnam ipsam.",
            },
            {
                icon: "fas fa-users fa-3x bg-orange",
                title: "Professional Team",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda vel dolore nemo officiis magnam ipsam.",
            },
            {
                icon: "fas fa-lightbulb fa-3x bg-green",
                title: "Creative Solutions",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda vel dolore nemo officiis magnam ipsam.",
            },
        ]
    }
});
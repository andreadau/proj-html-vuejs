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
                img:"assets/img/project2-featured-15013609-400x400.jpg"
            },
            {
                img:"assets/img/project1-featured-294276386-400x400.jpg"
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
        ],
        experiences: [
            {
                img:"assets/img/home-testimonial-113165296.jpg",
                text:"No man but feels more of a man in the world if we have but a bit of ground that he call his own. However small it is on the surface. It is four thousand miles deep: and this is a very handsome property",
                name: "Harry smith - new home owner",
            }
        ],
        news: [
            {
                title:"Redeveloping Florida's Remote Southern Coast",
                date:"January 21st, 2021",
                img:"assets/img/blog-post-134132600-400x241.jpg",            
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, reprehenderit quia placeat doloremque quos minima deleniti est, fugiat esse dolorum distinctio incidunt recusandae commodi nobis ullam eius expedita? Sed corrupti ipsam aliquam quos nihil laboriosam!",
            },
            {                
                title:"How We Manage Large Construction Projects",
                date:"January 21st, 2021",
                img:"assets/img/blog-post-92486644-400x241.jpg",            
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, reprehenderit quia placeat doloremque quos minima deleniti est, fugiat esse dolorum distinctio incidunt recusandae commodi nobis ullam eius expedita? Sed corrupti ipsam aliquam quos nihil laboriosam!",
            },
            {
                title:"Future proofing a modern home",
                date:"January 21st, 2021",
                img:"assets/img/blog-post-332773904-400x241.jpg",            
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, reprehenderit quia placeat doloremque quos minima deleniti est, fugiat esse dolorum distinctio incidunt recusandae commodi nobis ullam eius expedita? Sed corrupti ipsam aliquam quos nihil laboriosam!",
            },
        ],
        partners: [
            {
                img: "assets/img/home-logo11-219096700-320x202.png",
            },
            {
                img: "assets/img/home-logo10-219096700-320x202.png",
            },
            {
                img: "assets/img/home-logo2-219096700-320x202.png",
            },
            {
                img: "assets/img/home-logo1-219096700-320x202.png",
            },
            {
                img: "assets/img/home-logo9-219096700-320x202.png",
            },
        ],
        contacts:[
            {
                icon:"fas fa-globe",
                text:"Corporate Location 1600, Amphitheatre Parkway, London WC1 1BA"
            },
            {
                icon:"fas fa-home",
                text:"Residential Location, 9521 Broadsberry Avenue, Paddington RC7 9ZA"
            },
            {
                icon:"fas fa-phone",
                text:"1.800.458.556 / 1.800.532.2112"
            },
            {
                icon:"fas fa-envelope",
                text:"info@your-domain.com"
            },
            {
                icon:"far fa-clock",
                text:"Monday - Friday: 9:00 AM - 6.00 PM"
            },
            {
                icon:"far fa-clock",
                text:"Saturday - Sunday: 9:00 AM - 12.00 PM"
            },
        ],
        upHere: null,
    }
});
export interface Project {
    slug: string;
    title: string;
    description: string;
    tags: { label: string; colorVar: string }[];
    githubUrl?: string;
    liveUrl?: string;
    isPrivate?: boolean;
    image?: string;
    problem: string;
    solution: string;
    keyFeatures: { title: string; description: string }[];
    techStack: string[];
    designDecisions: string;
}


export const projects: Project[] = [
    {
        slug: "Yarnification",
        title: "Yarnification",
        description: "Plan yarn projects and calculate materials effortlessly.",
        tags: [
            { label: "TypeScript", colorVar: "--typescript" },
            { label: "React Native", colorVar: "--expo" },
        ],
        githubUrl: "https://github.com/JosueOF1130/yarnification",
        problem:
            "Many crocheting enthusiasts struggle to calculate exactly how much yarn they need for a project. When shopping, they often have to switch between a calculator, yarn labels, and project requirements — doing conversions and math manually. This can be frustrating, especially for beginners or anyone who wants a faster, smoother planning process.",
        solution:
            "Yarnification was designed to remove the guesswork and friction from planning yarn projects. Instead of manually calculating measurements and switching between apps, Yarnification handles all yarn conversions and calculations automatically in one place.\n\nThe app allows users to quickly input their project and yarn details and instantly see how much yarn they need — making it especially useful when shopping in-store. Users can also save calculations as projects, update them later, and add notes such as how much yarn was actually used.\n\nBy centralizing calculations, conversions, and saved projects, Yarnification helps crafters spend less time doing math and more time creating.",
        keyFeatures: [
            {
                title: "Yarn Calculation by Project & Yarn Type",
                description:
                    "Instantly calculates the required amount of yarn based on the selected project type and yarn weight, removing the need for manual conversions or guesswork.",
            },
            {
                title: "Project Management",
                description:
                    "Users can save projects for later reference, edit existing entries, or delete projects they no longer need — making it easy to reuse calculations for repeat projects.",
            },
        ],
        techStack: ["React Native", "TypeScript", "Expo", "Firebase"],
        designDecisions:
            "Yarnification was designed to be approachable for crafters of all experience levels. The interface prioritizes clarity and ease of use, allowing users to navigate the app intuitively without needing prior technical knowledge.\n\nThe visual direction was inspired by the calming and relaxing nature of crocheting. Rather than using harsh whites or high-contrast themes, the app uses soft tones for both light and dark modes to create a cozy, comfortable experience.\n\nA minimal design approach was chosen to reduce visual clutter and cognitive load — helping users quickly find what they need whether planning at home or making decisions in-store.",
    },
    {
        slug: "Cleaning Services Invoice Creator",
        title: "Invoice Creator",
        description: "Simple invoice tracking for cleaning professionals.",
        tags: [
            { label: "TypeScript", colorVar: "--typescript" },
            { label: "React", colorVar: "--expo" },
        ],
        isPrivate: true,
        problem:
            "A family friend was manually creating invoices for their mother's cleaning business using Word documents and generic invoice templates. Each invoice had to be edited from scratch, which was time-consuming, repetitive, and easy to get wrong.\n\nThe goal was to create a faster, more automated way to generate invoices tailored specifically to the services offered, removing the need to repeatedly edit documents or reuse templates.",
        solution:
            "This React application automates invoice creation for a small cleaning business. The app provides pre-defined services, automatically calculates totals, and tracks invoice status. With a single login, the user can quickly generate invoices, mark them as paid, and see which invoices remain unpaid for over two weeks — all without manually editing templates.\n\nThis reduces repetitive work, speeds up invoice creation, and gives the user clear visibility over their billing.",
        keyFeatures: [
            {
                title: "Quick Invoice Creation",
                description:
                    "Generate invoices in seconds using pre-defined services and automated calculations. No need to manually edit templates.",
            },
            {
                title: "Invoice Management",
                description:
                    "View all invoices with clear status indicators: Sent, Paid, or Overdue — so you can easily track payments.",
            },
            {
                title: "PDF Export",
                description: "Download invoices as PDF files to send directly to clients.",
            },
            {
                title: "Overdue Tracking",
                description:
                    "Invoices that remain unpaid for more than two weeks are automatically flagged to help the user follow up quickly.",
            },
            {
                title: "Optional Enhancements",
                description:
                    "Preview invoices as PDF inside the app, search and filter by service or location, and switch between dark and light mode.",
            },
        ],
        techStack: ["React", "TypeScript", "Firebase", "CSS"],
        designDecisions:
            "CleanBill was designed to be simple and approachable for users with little to no computer experience. The interface prioritizes clarity and ease of use, allowing the client herself to create and send invoices independently.\n\nThe visual direction focuses on functionality and readability rather than decorative elements. Clear status indicators and minimal layouts ensure users can easily see which invoices are sent, paid, or overdue.\n\nA minimal design approach was chosen to streamline the workflow. Pre-defined services, automatic calculations, and PDF previews let users complete tasks quickly, cutting out unnecessary steps.",
    },
    {
        slug: "Flicksy",
        title: "Flicksy",
        description: "For indecisive movie lovers who never know what to watch next.",
        tags: [
            { label: "TypeScript", colorVar: "--typescript" },
            { label: "React Native", colorVar: "--expo" },
        ],
        githubUrl: "https://github.com/JosueOF1130/flicksy",
        liveUrl: "https://flick-sy.netlify.app/",
        image: "/src/assets/images/flicksy-screenshot.png",
        problem:
            "Choosing a movie has become increasingly frustrating. Movie lovers often have to jump between multiple streaming apps, each with different libraries and recommendations. This process is even more annoying on slower TVs, where opening and closing apps takes time and breaks the experience.\n\nStreaming platforms also cater to specific audiences, which means no single service offers everything. Even after finding a movie that looks interesting, users often discover it isn't available on any of their subscriptions — or worse, they spend all that time browsing and still don't find anything to watch at all.",
        solution:
            "Flicksy simplifies the movie selection process by giving users access to a large, centralized movie database powered by TMDb. Instead of endlessly scrolling through multiple streaming apps, users can quickly search for movies and see which platforms they are available on.\n\nTo help indecisive viewers find movies they'll actually enjoy, Flicksy includes an AI recommendation feature. Users can indicate the movies they like, select a preferred genre, and the AI suggests personalized recommendations tailored to their tastes — so choices are smarter, not just random.\n\nFlicksy also offers account management features, allowing users to log in and out, save movies, and search efficiently — making it easy to track favorites and return to them later.",
        keyFeatures: [
            {
                title: "Centralized Movie Database",
                description:
                    "Search from a huge collection of movies powered by TMDb and quickly see which streaming platforms have them available.",
            },
            {
                title: "AI-Powered Recommendations",
                description:
                    "Get personalized movie suggestions based on your favorite films and preferred genres, so you can discover new movies without the guesswork.",
            },
            {
                title: "Search & Discovery",
                description:
                    "Quickly find movies by title or filter by genre, making browsing fast and effortless.",
            },
            {
                title: "Account Management",
                description:
                    "Log in, log out, save movies, and maintain your personal list for easy access to favorites.",
            },
        ],
        techStack: ["React Native", "TypeScript", "Expo", "Firebase", "The Movie Database API", "OpenAi API"],
        designDecisions:
            "Flicksy prioritizes speed and clarity above all. The UI borrows from familiar streaming interfaces while adding cross-platform search that no single service offers. Dark mode first, with high-contrast movie art to keep the cinema feel front and center — making discovery feel effortless rather than exhausting.",
    },
    {
  slug: "Premier-Construction",
  title: "M&L Premier Construction",
  description: "A business website for a family-owned general contractor based in San Jose, CA serving the Bay Area.",
  tags: [
    { label: "TypeScript", colorVar: "--typescript" },
    { label: "React", colorVar: "--expo" },
  ],
  liveUrl: "https://mlconstructionsj.com/",
  isPrivate: false,
  problem:
    "M&L Premier Construction had no web presence. Without a website, potential clients had no way to verify the business, learn about their services, or request a quote — leaving real leads on the table and making it harder to compete with contractors who already had an online footprint.",
  solution:
    "A multi-section marketing site designed to build trust fast and convert visitors into leads. The site showcases the business's services, experience, and credentials in a clean, professional layout — giving homeowners everything they need to feel confident reaching out.\n\nThe site is structured to guide visitors naturally from awareness to action: hero → services → trust signals → testimonials → contact. Every section answers a question a potential client would have before picking up the phone.",
  keyFeatures: [
    {
      title: "Click-to-Call CTA",
      description:
        "A prominent call-to-action lets mobile visitors tap to call directly — removing friction for the most common way homeowners reach contractors.",
    },
    {
      title: "Free Estimate Request Form",
      description:
        "A simple quote request form powered by Formspree or EmailJS sends inquiries straight to the business owner's inbox — no backend needed.",
    },
    {
      title: "Services Grid",
      description:
        "A clear grid layout showcasing all offered services so visitors immediately understand what the business does and whether it fits their needs.",
    },
    {
      title: "Trust Bar",
      description:
        "A prominent bar highlighting key credentials: Licensed & Insured, 25+ Years of Experience, and Family Owned — the signals homeowners look for before hiring a contractor.",
    },
    {
      title: "Service Area Coverage",
      description:
        "A dedicated section listing the cities and neighborhoods served throughout the Bay Area, helping with local credibility and SEO.",
    },
    {
      title: "Testimonials",
      description:
        "Client reviews displayed prominently to build social proof and reinforce trust with first-time visitors.",
    },
  ],
  techStack: ["React", "TypeScript"],
  designDecisions:
    "The design uses a navy blue, forest green, and silver steel palette to communicate professionalism and reliability — the qualities homeowners prioritize when hiring a contractor.\n\nTypography and layout lean toward clean and structured rather than trendy, reflecting the craftsmanship and dependability of the business itself. The hierarchy is intentional: trust signals and CTAs are always within reach, never buried.\n\nMobile-first was a priority since most homeowners search for contractors on their phones. The click-to-call button stays accessible throughout the page so the path from interest to contact is always one tap away.",
},
]
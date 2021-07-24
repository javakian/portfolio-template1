// Change your display name on tha landing display
const header = {
    name: "James",
};
const background = {
    // Options: Snow or Particle
    type: "Snow"
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const about = {
    paragraph: "I am a Software with Next.js developer skills. I am skilled developing performant websites with TailwindCSS, HTML, JSX, and Markdown for api and RESTful page display.I implement fast page display using pre-rendered HTML for SEO and for efficiency, use of “Image” and “Link” commands in JSX. Have HTML, CSS3, Bootstrap, Bulma, TailwindCSS, and W3CSS layout, my preference is TailwindCSS megamenus for performance "
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
    {
        name: "Next.js",
        value: 75
    }, {
        name: "TailwindCSS",
        value: 85
    }, {
        name: "JavaScript",
        value: 80
    }, {
        name: "Bootstrap / CSS3 / W3CSS",
        value: 75
    }, {
        name: "React",
        value: 85
    }, {
        name: "Mongo DB Atlas / Mongoose",
        value: 70
    },
];
// Edit your projects, its name, your skills used to make it, and the url. 
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const projects = [
    {
        // Add image in './styles/images.css' in #project1
        id: "project1",
        name: "Optical Automation, LLC",
        skills: ["Wix.com"],
        url: "https://www.OpticalAutomation.com"
    },
    {
        // Add image in './styles/images.css' in #project2
        id: "project2",
        name: "JamesAvakian.com",
        skills: ["Next.js, React, JSX, MarkDown MDX, GitHub, Vercel"],
        url: "https://nextjs-tailwindcss-mdx-jamesavakian.vercel.app/likes"
    },
    {
        // Add image in './styles/images.css' in #project3
        id: "project3",
        name: "MyOneUniverse.com",
        skills: ["Next.js, TailwindCSS, JSX, MarkDown MDX, GitHub, Vercel deploy"],
        url: "https://javakian-nextjs-tailwindcss-myoneuniverse.vercel.app/ "
    },
    {
        // Add image in './styles/images.css' in #project4
        id: "project4",
        name: "eCommerce",
        skills: ["Wix.com"],
        url: "https://javakian1.wixsite.com/mysite-10"
    },
    {
        // Add image in './styles/images.css' in #project5
        id: "project5",
        name: "House Of Webs.com",
        skills: ["Wix.com"],
        url: "https://www.HouseOfWebs.com"
    },
    {
        // Add image in './styles/images.css' in #project6
        id: "project6",
        name: "MyTechnologyHouse.com",
        skills: ["Wix.com"],
        url: "https://www.technologyandtimes.com/"
    },
];
// Edit your Miscellaneous Activities, its name and the url. 
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const miscellaneous = [
    {
        // Add image in './styles/images.css' in #misc1
        id: "misc1",
        name: "Product Videos",
        url: "https://vimeo.com/user108564543"
    },
    {
        // Add image in './styles/images.css' in #misc2        
        id: "misc2",
        name: "The Importance of Next.js",
        url: "https://javakian1.wixsite.com/opticalautomation-c/copy-of-technology-1"
    },
    {
        // Add image in './styles/images.css' in #misc3
        id: "misc3",
        name: "Technical Documents",
        url: "https://javakian1.wixsite.com/opticalautomation-c/copy-of-investors"
    },
];
// Contact form text, and Jotforms link
// To get your own jotform link, go to https://www.jotform.com/
// If you hacve the link already, paste it in the contactUrl below
const contact = {
    pitch: "Hello, If you have any questions or want to talk to me regarding any topic whether it be for a website or project please send me a message.",
    copyright: "James Avakian",
    contactUrl: 'http://www.OpticalAutomation.com'
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
    github: 'https://github.com/javakian',
    facebook: 'https://www.facebook.com/Optical-Automation-LLC-134475819954908',
    linkedin: 'https://www.linkedin.com/in/james-l-avakian-13500713/',
    instagram: 'https://www.pinterest.com/jamesavakian/',
    resume: 'https://optical.hosted-by-files.com/public/ResumeAug2021.pdf/'
};



// Dont change anything here
export { header, background, about, skillsBar, projects, miscellaneous, contact, social };
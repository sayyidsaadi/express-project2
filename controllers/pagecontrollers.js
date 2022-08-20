const path = require('path');

// Home Page Controllers
const homePageControllers = (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/index.html'));
}

// About Page Controllers
const aboutPageControllers = (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/about.html'));
}

// Blog Single Page Controllers
const blogSinglePageControllers = (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/blog-single.html'));
}

// Blog Page Controllers
const blogPageControllers = (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/blog.html'));
}

// Contact 2 Page Controllers
const contact_2_PageControllers = (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/contact-2.html'));
}

// Contact Page Controllers
const contactPageControllers = (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/contact.html'));
}

// Course Single Page Controllers
const courseSinglePageControllers = (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/courses-single.html'));
}

// Courses Page Controllers
const coursesPageControllers = (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/courses.html'));
}

// Events 2 Page Controllers
const events_2_PageControllers = (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/events-2.html'));
}

// Events Single Page Controllers
const events_single_PageControllers = (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/events-single.html'));
}

// Events Page Controllers
const eventsPageControllers = (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/events.html'));
}

// FAQ Page Controllers
const faqPageControllers = (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/faq.html'));
}

// Gallery Page Controllers
const galleryPageControllers = (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/gallery.html'));
}

// Index 2 Page Controllers
const index_2_PageControllers = (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/index-2.html'));
}

// Index 3 Page Controllers
const index_3_PageControllers = (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/index-3.html'));
}

// Index 4 Page Controllers
const index_4_PageControllers = (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/index-4.html'));
}

// Policy Page Controllers
const policyPageControllers = (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/policy.html'));
}

// Register Page Controllers
const registerPageControllers = (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/register.html'));
}

// Shop Single Page Controllers
const shopSinglePageControllers = (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/shop-single.html'));
}

// Shop Page Controllers
const shopPageControllers = (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/shop.html'));
}


// Teachres 2 Page Controllers
const teachers_2_PageControllers = (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/teachers-2.html'));
}

// Teachres Single Page Controllers
const teachersSinglePageControllers = (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/teachers-single.html'));
}

// Teachres Page Controllers
const teachersPageControllers = (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/teachers.html'));
}

// Contact Form
const edubinFrmData = (req, res)=>{
    res.status(200).json(req.body)
}

// Register Form
const registerfrm = (req, res)=>{
    res.status(200).json(req.body);
}


// Controllers Page Exports
module.exports = {
    homePageControllers,
    aboutPageControllers,
    blogSinglePageControllers,
    blogPageControllers,
    contact_2_PageControllers,
    contactPageControllers,
    courseSinglePageControllers,
    coursesPageControllers,
    events_2_PageControllers,
    events_single_PageControllers,
    eventsPageControllers,
    faqPageControllers,
    galleryPageControllers,
    index_2_PageControllers,
    index_3_PageControllers,
    index_4_PageControllers,
    policyPageControllers,
    registerPageControllers,
    shopSinglePageControllers,
    shopPageControllers,
    teachers_2_PageControllers,
    teachersSinglePageControllers,
    teachersPageControllers,
    edubinFrmData,
    registerfrm


}
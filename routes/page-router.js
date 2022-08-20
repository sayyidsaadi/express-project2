const express = require('express');
const path = require('path');
const {
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
} = require('../controllers/pagecontrollers');

// Route Init
const router = express.Router();


// Routing
router.get('/', homePageControllers)

router.get('/about', aboutPageControllers)

router.get('/blog-single', blogSinglePageControllers)

router.get('/blog', blogPageControllers)

router.get('/contact-2', contact_2_PageControllers)

router.get('/contact', contactPageControllers)

router.get('/courses-single',  courseSinglePageControllers)

router.get('/courses', coursesPageControllers)

router.get('/events-2', events_2_PageControllers)

router.get('/events-single', events_single_PageControllers)

router.get('/events', eventsPageControllers)

router.get('/faq', faqPageControllers)

router.get('/gallery', galleryPageControllers)

router.get('/index-2', index_2_PageControllers)

router.get('/index-3', index_3_PageControllers)

router.get('/index-4', index_4_PageControllers)

router.get('/policy', policyPageControllers)

router.get('/register', registerPageControllers)

router.get('/shop-single', shopSinglePageControllers)

router.get('/shop', shopPageControllers)

router.get('/teachers-2', teachers_2_PageControllers)

router.get('/teachers-single', teachersSinglePageControllers)

router.get('/teachers', teachersPageControllers);

router.post('/frm_data', edubinFrmData);

router.post('/registerdata', registerfrm)






















module.exports = router;
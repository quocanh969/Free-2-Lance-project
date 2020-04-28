// import Logo from '../assets/images/logo.png';
import CompanyLogo1 from '../../assets/images/company-logo-01.png';
import CompanyLogo2 from '../../assets/images/company-logo-02.png';
import CompanyLogo3 from '../../assets/images/company-logo-03.png';
import CompanyLogo4 from '../../assets/images/company-logo-04.png';
import CompanyLogo5 from '../../assets/images/company-logo-05.png';
import CompanyLogo6 from '../../assets/images/company-logo-06.png';

// import UserAvatarSmall1 from '../assets/images/user-avatar-small-01.jpg';
// import UserAvatarSmall2 from '../assets/images/user-avatar-small-02.jpg';
// import UserAvatarSmall3 from '../assets/images/user-avatar-small-03.jpg';
// import UserAvatarPlaceholder from '../assets/images/user-avatar-placeholder.png';

const initState = {
    places: [
        {
            name: "Sydney",
            title: "Sydney",
            position: { lat: -33.847927, lng: 150.6517938 }
        },
        {
            name: "Melbourne",
            title: "Melbourne",
            position: { lat: -37.9722342, lng: 144.7729561 }
        },
        {
            name: "Perth",
            title: "Perth",
            position: { lat: -31.9546904, lng: 115.8350292 }
        }
    ],
    jobList: [
        {
            id: 1,
            logo: CompanyLogo1,
            company: 'Hexagon',
            title: 'Bilingual Event Support Specialist',
            isVerified: false,
            location: ' San Francisco',
            workingTime: ' Full Time',
            salary: ' $35000-$38000',
            postDay: ' 2 days ago',
        },
        {
            id: 2,
            logo: CompanyLogo5,
            company: 'Laxo',
            title: 'Competition Law Officer',
            isVerified: false,
            location: ' San Francisco',
            workingTime: ' Full Time',
            salary: ' $35000-$38000',
            postDay: ' 2 days ago',
        },
        {
            id: 3,
            logo: CompanyLogo2,
            company: 'Coffee',
            title: 'Barista and Cashier',
            isVerified: false,
            location: ' San Francisco',
            workingTime: ' Full Time',
            salary: ' $35000-$38000',
            postDay: ' 2 days ago',
        },
        {
            id: 4,
            logo: CompanyLogo3,
            company: 'King',
            title: 'Restaurant General Manager',
            isVerified: true,
            location: ' San Francisco',
            workingTime: ' Full Time',
            salary: ' $35000-$38000',
            postDay: ' 2 days ago',
        },
        {
            id: 5,
            logo: CompanyLogo5,
            company: 'Skyist',
            title: 'International Marketing Coordinator',
            isVerified: false,
            location: ' San Francisco',
            workingTime: ' Full Time',
            salary: ' $35000-$38000',
            postDay: ' 2 days ago',
        },
        {
            id: 6,
            logo: CompanyLogo5,
            company: 'Podous',
            title: 'Construction Labourers',
            isVerified: false,
            location: ' San Francisco',
            workingTime: ' Full Time',
            salary: ' $35000-$38000',
            postDay: ' 2 days ago',
        },
        {
            id: 7,
            logo: CompanyLogo4,
            company: 'Mates',
            title: 'Administrative Assistant',
            isVerified: false,
            location: ' San Francisco',
            workingTime: ' Full Time',
            salary: ' $35000-$38000',
            postDay: ' 2 days ago',
        },
        {
            id: 8,
            logo: CompanyLogo6,
            company: 'Trideo',
            title: 'Human Resources Consultant',
            isVerified: false,
            location: ' San Francisco',
            workingTime: ' Full Time',
            salary: ' $35000-$38000',
            postDay: ' 2 days ago',
        },
        {
            id: 9,
            logo: CompanyLogo6,
            company: 'Trideo',
            title: 'International Marketing Specialist',
            isVerified: false,
            location: ' San Francisco',
            workingTime: ' Full Time',
            salary: ' $35000-$38000',
            postDay: ' 2 days ago',
        },
        {
            id: 10,
            logo: CompanyLogo2,
            company: 'Coffee',
            title: 'Terrain Cafe Barista',
            isVerified: false,
            location: ' San Francisco',
            workingTime: ' Full Time',
            salary: ' $35000-$38000',
            postDay: ' 2 days ago',
        },
        {
            id: 11,
            logo: CompanyLogo5,
            company: 'Kinte',
            title: 'Skilled Labourer',
            isVerified: false,
            location: ' San Francisco',
            workingTime: ' Full Time',
            salary: ' $35000-$38000',
            postDay: ' 2 days ago',
        },
        {
            id: 12,
            logo: CompanyLogo5,
            company: 'Alilia',
            title: 'Healthcare Claims Advisor',
            isVerified: false,
            location: ' San Francisco',
            workingTime: ' Full Time',
            salary: ' $35000-$38000',
            postDay: ' 2 days ago',
        },
    ]
}

const ReadLocationReducer = (state = initState, action) => {
    switch (action.type) {
        case 'MAP_LOC_REQ':
            return {
                ...state,
                message: "Reading...",
            }
        case 'MAP_LOC_SUCCESS':
            return {
                ...state,
                message: "Read success",
            }
        case 'MAP_LOC_FAIL':
            return {
                ...state,
                message: "Read failed",
            }
        default: return state
    }
}

export default ReadLocationReducer;